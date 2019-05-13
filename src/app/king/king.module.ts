import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KingComponent } from "./king.component";


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[KingComponent],
    exports: [ KingComponent ]
})

export class KingModule{}