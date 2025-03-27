import { Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { OneComponent } from "./challenges/one.component";
import { TowComponent } from "./challenges/tow.component";

import { ThreeComponent } from "./quizzes/three.component";
import { FourComponent } from "./quizzes/four.component";
import { FiveComponent } from "./quizzes/five.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  imports: [
    MatTabsModule,
    OneComponent,
    TowComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
  ],
})
export class MainComponent {}
