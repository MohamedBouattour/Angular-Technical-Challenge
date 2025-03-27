import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SortPipe } from "../../shared/sort.pipe";

@Component({
  selector: "app-tow",
  template: `
    <div class="filters">
      <mat-checkbox [(ngModel)]="filters.european" (change)="filterCars()"
        >European Cars</mat-checkbox
      >
      <mat-checkbox [(ngModel)]="filters.asian" (change)="filterCars()"
        >Asian Cars</mat-checkbox
      >
      <button
        mat-icon-button
        (click)="sortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC'"
      >
        <mat-icon>{{
          sortDirection === "ASC" ? "arrow_upward" : "arrow_downward"
        }}</mat-icon>
      </button>
    </div>

    <mat-list role="list">
      @for (car of filterCars() | sort:'speed':sortDirection; track car) {
      <mat-list-item role="listitem"
        >{{ car?.name }} {{ car?.speed }} {{ car?.price }}</mat-list-item
      >
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
    MatCheckboxModule,
    MatIconModule,
    SortPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Add sort logic in pipe
 * Add filter logic in filterCars()
 * Add number formattting for price and speed
 */
export class TowComponent {
  sortDirection: "ASC" | "DESC" = "ASC";
  filters = {
    european: false,
    asian: false,
  };
  cars = [
    {
      name: "BMW",
      price: 100000,
      speed: 200,
      origin: "european",
    },
    {
      name: "AUDI",
      price: 120000,
      speed: 220,
      origin: "european",
    },
    {
      name: "MERCEDES",
      price: 150000,
      speed: 250,
      origin: "european",
    },
    {
      name: "TOYOTA",
      price: 10000,
      speed: 150,
      origin: "asian",
    },
    {
      name: "HONDA",
      price: 10000,
      speed: 150,
      origin: "asian",
    },
  ];

  filterCars() {
    return this.cars;
  }
}
