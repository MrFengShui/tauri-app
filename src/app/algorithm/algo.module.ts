import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { TimerPipe } from "../pipe/timer.pipe";

import { AlgorithmSortPageComponent } from "./sort/sort.component";
import { AlgorithmMazePageComponent } from "./maze/maze.component";

import { SortOrderOptionLoadEffect as SortOptionLoadEffect } from "./sort/ngrx-store/sort.effect";
import { SORT_OPTION_FEATURE_KEY } from "./sort/ngrx-store/sourt.selector";
import { SORT_OPTION_LOAD_REDUCER } from "./sort/ngrx-store/sort.reducer";

import { SortLoadConfigService, SortMatchService, SortToolsService, SortUtilsService } from "./sort/ngrx-store/sort.service";
import { BubbleSortService, CooktailSortService, ExchangeSortService, TwoWayBubbleSortService } from "./sort/service/bubble-sort.service";
import { BinarySearchInserionSortService, InsertionSortService, ShellSortService } from "./sort/service/insertion-sort.service";
import { LibrarySortService } from "./sort/service/insertion-sort.service";
import { ShakerSelectionSortService, SelectionSortService, TwoWaySelectionSortService } from "./sort/service/selection-sort.service";
import { BogoBubbleSortService, BogoCocktailSortService, BogoInsertionSortService, BogoSelectionSortService, BogoSortService } from "./sort/service/bogo-sort.service";
import { AverageIterativeQuickSortService, AverageRecursiveQuickSortService, DualPivotIterativeQuickSortService, DualPivotRecursiveQuickSortService, IterativeQuickSortService, RecursiveQuickSortService, ThreeWayIterativeQuickSortService, ThreeWayRecursiveQuickSortService, TwoWayIterativeQuickSortService, TwoWayRecursiveQuickSortService } from "./sort/service/quick-sort.service";
import { CountSortService } from "./sort/service/count-sort.service";
import { BucketSortService, InterpolationSortService, PigeonholeSortService } from "./sort/service/bucket-sort.service";
import { RadixLSDSortService, RadixMSDSortService } from "./sort/service/radix-sort.service";
import { AsyncSleepSortService, SyncSleepSortService } from "./sort/service/sleep-sort.service";
import { CycleSortService } from "./sort/service/cycle-sort.service";
import { SmoothSortService } from "./sort/service/heap-sort.service";
import { TernaryHeapSortService } from "./sort/service/selection-sort.service";
import { HeapSortService } from "./sort/service/selection-sort.service";
import { BottomUpMergeSortService, MultiWayMergeSortService, InPlaceMergeSortService, TopDownMergeSortService } from "./sort/service/merge-sort.service";
import { IterativeStoogeSortService, RecursiveStoogeSortService } from "./sort/service/stooge-sort.service";
import { SlowSortService } from "./sort/service/slow-sort.service";
import { GnomeSortService } from "./sort/service/insertion-sort.service";
import { TournamentSortService } from "./sort/service/tree-sort.service";
import { BottomUpBitonicMergeSortService, TopDownBitonicMergeSortService } from "./sort/service/bitonic-merge-sort.service";
import { OddEvenSortService } from "./sort/service/bubble-sort.service";
import { CombSortService } from "./sort/service/bubble-sort.service";
import { PancakeSortService } from "./sort/service/pancake-sort.service";
import { GravitySortService } from "./sort/service/gravity-sort.service";
import { BottomUpOddEvenMergeSortService, TopDownOddEvenMergeSortService } from "./sort/service/odd-even-merge-sort.service";
import { PatienceSortService } from "./sort/service/patience-sort.service";
import { OptimalStrandSortService, StrandSortService } from "./sort/service/strand-sort.service";
import { TimSortService } from "./sort/service/tim-sort.service";
import { BinarySearchTreeSortService } from "./sort/service/tree-sort.service";
import { OptimalShearSortService, ShearSortService } from "./sort/service/shear-sort.service";

import { MazeMatchService, MazeToolsService, MazeUtilsService } from "./maze/ngrx-store/maze.service";
import { MazeGenerationRandomizedBacktrackerService } from "./maze/service/backtracker-maze.service";
import { MazeGenerationRandomizedPrimService } from "./maze/service/prim-maze.service";
import { MazeGenerationRandomizedKruskalService } from "./maze/service/kruskal-maze.service";
import { MazeGenerationAldousBroderService } from "./maze/service/aldous-broder-maze.service";
import { MazeGenerationHuntAndKillService } from "./maze/service/hunt-kill-maze.service";
import { MazeGenerationRandomizedDivisionService } from "./maze/service/division-maze.service";
import { MazeGenerationSidewinderService } from "./maze/service/sidewinder-maze.service";
import { MazeGenerationGrowTreeService } from "./maze/service/grow-tree-maze.service";
import { MazeGenerationEllerService } from "./maze/service/eller-maze.service";
import { MazeGenerationWilsonService } from "./maze/service/wilson-maze.service";

@NgModule({
    declarations: [
        AlgorithmSortPageComponent,
        AlgorithmMazePageComponent,
        TimerPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ButtonModule,
        CheckboxModule,
        ConfirmDialogModule,
        DropdownModule,
        FieldsetModule,
        InputNumberModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        SelectButtonModule,
        SliderModule,
        TagModule,
        ToastModule,
        ToolbarModule,

        EffectsModule.forFeature(SortOptionLoadEffect),
        StoreModule.forFeature(SORT_OPTION_FEATURE_KEY, { 'feature': SORT_OPTION_LOAD_REDUCER }),
    ],
    exports: [
        AlgorithmSortPageComponent
    ],
    providers: [
        SortLoadConfigService, SortMatchService, SortUtilsService, SortToolsService,
        BubbleSortService, CooktailSortService, TwoWayBubbleSortService, CombSortService, OddEvenSortService, ExchangeSortService, InsertionSortService, BinarySearchInserionSortService, ShellSortService, SelectionSortService, ShakerSelectionSortService, TwoWaySelectionSortService, RecursiveQuickSortService, IterativeQuickSortService, AverageRecursiveQuickSortService, AverageIterativeQuickSortService, TwoWayRecursiveQuickSortService, TwoWayIterativeQuickSortService, ThreeWayRecursiveQuickSortService, ThreeWayIterativeQuickSortService, DualPivotRecursiveQuickSortService, DualPivotIterativeQuickSortService, HeapSortService, TernaryHeapSortService, SmoothSortService,
        BucketSortService, CountSortService, InterpolationSortService, PigeonholeSortService, RadixLSDSortService, RadixMSDSortService, TopDownMergeSortService, BottomUpMergeSortService, MultiWayMergeSortService, InPlaceMergeSortService, TimSortService, 
        TopDownBitonicMergeSortService, BottomUpBitonicMergeSortService, TopDownOddEvenMergeSortService, BottomUpOddEvenMergeSortService, ShearSortService, OptimalShearSortService,
        BogoSortService, BogoBubbleSortService, BogoCocktailSortService, BogoInsertionSortService, BogoSelectionSortService, CycleSortService, GnomeSortService, GravitySortService, SyncSleepSortService, AsyncSleepSortService, RecursiveStoogeSortService, IterativeStoogeSortService, SlowSortService, TournamentSortService, PancakeSortService, PatienceSortService, LibrarySortService, StrandSortService, OptimalStrandSortService, BinarySearchTreeSortService,

        MazeMatchService, MazeUtilsService, MazeToolsService,
        MazeGenerationAldousBroderService, MazeGenerationRandomizedDivisionService, MazeGenerationEllerService, MazeGenerationGrowTreeService, MazeGenerationHuntAndKillService, MazeGenerationRandomizedBacktrackerService,  MazeGenerationRandomizedKruskalService, MazeGenerationRandomizedPrimService, MazeGenerationSidewinderService, MazeGenerationWilsonService
    ]
})
export class AlgorithmModule {}