import { NgModule } from "@angular/core";
import { SmileRateComponent } from "./smile-rate";
import { IonicPageModule } from "ionic-angular";


@NgModule({
    declarations:[
        SmileRateComponent
    ],
    imports:[
        IonicPageModule.forChild(SmileRateComponent),
    ],
    exports:[
        SmileRateComponent
    ]
})export class SmileRateComponentModule{

}