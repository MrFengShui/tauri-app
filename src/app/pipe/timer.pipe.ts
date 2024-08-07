import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'timer'
})
export class TimerPipe implements PipeTransform {

    private hour: number = 0;
    private minute: number = 0;
    private second: number = 0;
    private mod: number = 0;

    transform(value: number, flag: boolean = false): string {
        if (flag) {
            this.hour = Math.floor(value / 3600);
            this.mod = value % 3600; 
            this.minute = Math.floor(this.mod / 60);
            this.second = this.mod % 60;
            return `${this.hour}`.padStart(2, '0') + ':' + `${this.minute}`.padStart(2, '0') + ':' + `${this.second}`.padStart(2, '0');
        } else {
            this.minute = Math.floor(value / 60);
            this.second = value % 60;
            return `${this.minute}`.padStart(2, '0') + ':' + `${this.second}`.padStart(2, '0');
        }
    }
    
}