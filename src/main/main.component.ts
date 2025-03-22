import { Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { OneComponent } from "./challenges/one/one.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  imports: [MatTabsModule, OneComponent],
})
export class MainComponent {}
