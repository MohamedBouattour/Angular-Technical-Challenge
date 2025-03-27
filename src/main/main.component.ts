import { Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { OneComponent } from "./challenges/one.component";
import { TowComponent } from "./challenges/tow.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  imports: [MatTabsModule, OneComponent, TowComponent],
})
export class MainComponent {}
