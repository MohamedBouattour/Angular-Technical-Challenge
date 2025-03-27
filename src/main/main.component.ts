import { Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { OneComponent } from "./challenges/one.component";
import { TowComponent } from "./challenges/tow.component";

import { SixComponent } from "./quizzes/six.component";
import { FourComponent } from "./quizzes/four.component";
import { FiveComponent } from "./quizzes/five.component";
import { ThreeComponent } from "./challenges/three.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  imports: [
    MatTabsModule,
    OneComponent,
    TowComponent,
    ThreeComponent,
    SixComponent,
    FourComponent,
    FiveComponent,
  ],
})
export class MainComponent {}
