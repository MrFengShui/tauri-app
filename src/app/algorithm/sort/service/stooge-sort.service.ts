import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { SortDataModel, SortStateModel, SortOrder } from "../ngrx-store/sort.state";
import { SORT_DELAY_DURATION, complete, delay, swap } from "../sort.utils";
import { CLEAR_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../../../public/values.utils";

/**
 * 臭皮匠排序（递归）
 */
@Injectable()
export class RecursiveStoogeSortService {

    public sort(array: SortDataModel[], order: SortOrder): Observable<SortStateModel> {
        return new Observable(subscriber => {
            const temp: SortDataModel = { value: 0, color: CLEAR_COLOR };

            if (order === 'ascent') {
                this.sortByAscent(array, temp, 0, param => subscriber.next(param)).then(() => subscriber.complete());
            }
    
            if (order === 'descent') {
                this.sortByDescent(array, temp, 0, param => subscriber.next(param)).then(() => subscriber.complete());
            }
        });
    }

    private async sortByAscent(source: SortDataModel[], temp: SortDataModel, times: number, callback: (param: SortStateModel) => void): Promise<void> {
        times = await this.sortByOrder(source, 0, source.length - 1, temp, 'ascent', times, callback);
        await delay(SORT_DELAY_DURATION);
        await complete(source, times, callback);
    }

    private async sortByDescent(source: SortDataModel[], temp: SortDataModel, times: number, callback: (param: SortStateModel) => void): Promise<void> {
        times = await this.sortByOrder(source, 0, source.length - 1, temp, 'descent', times, callback);
        await delay(SORT_DELAY_DURATION);
        await complete(source, times, callback);
    }

    private async sortByOrder(source: SortDataModel[], lhs: number, rhs: number, temp: SortDataModel, order: SortOrder, times: number, callback: (param: SortStateModel) => void): Promise<number> {
        if (order === 'ascent' && source[lhs].value > source[rhs].value) {
            source[lhs].color = PRIMARY_COLOR;
            source[rhs].color = SECONDARY_COLOR;
            callback({ times, datalist: source });

            times += 1;
            await swap(source, lhs, rhs);
            await delay(SORT_DELAY_DURATION);

            source[lhs].color = CLEAR_COLOR;
            source[rhs].color = CLEAR_COLOR;
            callback({ times, datalist: source });
        }

        if (order === 'descent' && source[lhs].value < source[rhs].value) {
            source[lhs].color = PRIMARY_COLOR;
            source[rhs].color = SECONDARY_COLOR;
            callback({ times, datalist: source });

            times += 1;
            await swap(source, lhs, rhs);
            await delay(SORT_DELAY_DURATION);

            source[lhs].color = CLEAR_COLOR;
            source[rhs].color = CLEAR_COLOR;
            callback({ times, datalist: source });
        }

        if (rhs - lhs + 1 >= 3) {
            const mid: number = Math.floor((rhs - lhs + 1)  / 3);
            times = await this.sortByOrder(source, lhs, rhs - mid, temp, order, times, callback);
            times = await this.sortByOrder(source, lhs + mid, rhs, temp, order, times, callback);
            times = await this.sortByOrder(source, lhs, rhs - mid, temp, order, times, callback);
        }

        return times;
    }

}

/**
 * 臭皮匠排序（迭代）
 */
@Injectable()
export class IterativeStoogeSortService {

    public sort(array: SortDataModel[], order: SortOrder): Observable<SortStateModel> {
        return new Observable(subscriber => {
            const temp: SortDataModel = { value: 0, color: CLEAR_COLOR };

            if (order === 'ascent') {
                this.sortByAscent(array, temp, 0, param => subscriber.next(param)).then(() => subscriber.complete());
            }
    
            if (order === 'descent') {
                this.sortByDescent(array, temp, 0, param => subscriber.next(param)).then(() => subscriber.complete());
            }
        });
    }

    private async sortByAscent(source: SortDataModel[], temp: SortDataModel, times: number, callback: (param: SortStateModel) => void): Promise<void> {
        let stack: number[] = Array.from([]), lhs: number = 0, rhs: number = source.length - 1, mid: number;

        stack.push(rhs);
        stack.push(lhs);

        while (stack.length > 0) {
            lhs = stack.pop() as number;
            rhs = stack.pop() as number;

            if (source[lhs].value > source[rhs].value) {
                source[lhs].color = PRIMARY_COLOR;
                source[rhs].color = SECONDARY_COLOR;
                callback({ times, datalist: source });

                times += 1;
                await swap(source, lhs, rhs);
                await delay(SORT_DELAY_DURATION);

                source[lhs].color = CLEAR_COLOR;
                source[rhs].color = CLEAR_COLOR;
                callback({ times, datalist: source });
            }

            stack = await this.push(stack, lhs, rhs);
        }

        await delay(SORT_DELAY_DURATION);
        await complete(source, times, callback);
    }

    private async sortByDescent(source: SortDataModel[], temp: SortDataModel, times: number, callback: (param: SortStateModel) => void): Promise<void> {
        let stack: number[] = Array.from([]), lhs: number = 0, rhs: number = source.length - 1, mid: number;

        stack.push(rhs);
        stack.push(lhs);

        while (stack.length > 0) {
            lhs = stack.pop() as number;
            rhs = stack.pop() as number;

            if (source[lhs].value < source[rhs].value) {
                source[lhs].color = PRIMARY_COLOR;
                source[rhs].color = SECONDARY_COLOR;
                callback({ times, datalist: source });

                times += 1;
                await swap(source, lhs, rhs);
                await delay(SORT_DELAY_DURATION);

                source[lhs].color = CLEAR_COLOR;
                source[rhs].color = CLEAR_COLOR;
                callback({ times, datalist: source });
            }

            stack = await this.push(stack, lhs, rhs);
        }

        await delay(SORT_DELAY_DURATION);
        await complete(source, times, callback);
    }

    private async push(stack: number[], lhs: number, rhs: number): Promise<number[]> { 
        if (rhs - lhs + 1 >= 3) {
            const mid: number = Math.floor((rhs - lhs + 1)  / 3);

            if (lhs < rhs - mid) {
                stack.push(rhs - mid);
                stack.push(lhs);
            }

            if (lhs + mid < rhs) {
                stack.push(rhs);
                stack.push(lhs + mid);
            }

            if (lhs < rhs - mid) {
                stack.push(rhs - mid);
                stack.push(lhs);
            }
        }

        return stack;
    }

}
