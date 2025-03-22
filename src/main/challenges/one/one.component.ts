import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { Subscription, interval } from "rxjs";

@Component({
  selector: "app-one",
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Task Name</mat-label>
      <input #taskInput matInput placeholder="GYM" />
    </mat-form-field>
    <button mat-fab (click)="doAdd()">
      <mat-icon>add</mat-icon>
    </button>

    <mat-list role="list">
      @for (task of tasks; track task) {
      <mat-list-item role="listitem">{{ task }}</mat-list-item>
      }
    </mat-list>
  `,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent {
  task = "";
  tasks = ["READ", "CODE"];
  @ViewChild("taskInput") taskInput: any;

  private subscriptions: Subscription[] = [];

  doAdd() {
    const sub = interval(1000)
      .pipe()
      .subscribe(() => {
        if (this.tasks.includes(this.taskInput.nativeElement.value)) {
          return;
        }
        this.tasks.push(this.taskInput.nativeElement.value);
        console.log(this.tasks);
        this.logSubscriptions();
      });

    this.subscriptions.push(sub);
  }

  logSubscriptions() {
    console.log(
      `Total Subscriptions: ${this.subscriptions.length}`,
      this.subscriptions
    );
  }
}
