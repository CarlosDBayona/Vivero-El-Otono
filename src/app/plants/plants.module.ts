import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { ListPlantsComponent } from './list-plants/list-plants.component';



@NgModule({
    declarations: [
        PlantsComponent,
        ListPlantsComponent
    ],
    exports: [
        PlantsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PlantsModule { }
