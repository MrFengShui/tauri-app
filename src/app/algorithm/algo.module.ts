import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';

import { TimerPipe } from "../pipe/timer.pipe";

import { AlgorithmSortPageComponent } from "./sort/sort.component";

import { SortEffect } from "./sort/ngrx-store/sort.effect";
import { SORT_FEATURE_KEY } from "./sort/ngrx-store/sourt.selector";
import { SORT_REDUCER } from "./sort/ngrx-store/sort.reducer";

import { SortMatchService, SortUtilsService } from "./sort/service/sort.service";
import { BubbleSortService, BiBubbleSortService } from "./sort/service/bubble-sort.service";
import { BSInsertionSortService, InsertionSortService, ShellSortService } from "./sort/service/insertion-sort.service";
import { BiSelectionSortService, BoSelectionSortService, SelectionSortService } from "./sort/service/selection-sort.service";
import { BogoBubbleSortService, BogoSortService } from "./sort/service/bogo-sort.service";
import { QuickSortService, TwoWayQuickSortService } from "./sort/service/quick-sort.service";
import { CountSortService } from "./sort/service/count-sort.service";
import { BucketSortService } from "./sort/service/bucket-sort.service";
import { RadixLSDSortService, RadixMSDSortService } from "./sort/service/radix-sort.service";
import { SleepSortService } from "./sort/service/sleep-sort.service";
import { CycleSortService } from "./sort/service/cycle-sort.service";
import { HeapSortService } from "./sort/service/heap-sort.service";
import { MergeSortService } from "./sort/service/merge-sort.service";
import { StoogeSortService } from "./sort/service/stooge-sort.service";
import { SlowSortService } from "./sort/service/slow-sort.service";
import { GnomeSortService } from "./sort/service/gnome-sort.service";
import { TournamentSortService } from "./sort/service/tournament-sort.service";

@NgModule({
    declarations: [
        AlgorithmSortPageComponent,
        TimerPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        DropdownModule,
        FieldsetModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        SelectButtonModule,
        SliderModule,
        TagModule,
        ToolbarModule,

        EffectsModule.forFeature([SortEffect]),
        StoreModule.forFeature(SORT_FEATURE_KEY, { 'feature': SORT_REDUCER })
    ],
    exports: [
        AlgorithmSortPageComponent
    ],
    providers: [
        SortMatchService, SortUtilsService, 
        BubbleSortService, BiBubbleSortService, InsertionSortService, BSInsertionSortService, ShellSortService, SelectionSortService, BiSelectionSortService, BoSelectionSortService, QuickSortService, TwoWayQuickSortService, HeapSortService,
        BucketSortService, CountSortService, RadixLSDSortService, RadixMSDSortService, MergeSortService,
        BogoSortService, BogoBubbleSortService, CycleSortService, GnomeSortService, SleepSortService, StoogeSortService, SlowSortService, TournamentSortService
    ]
})
export class AlgorithmModule {}