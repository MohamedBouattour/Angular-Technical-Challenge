import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

export interface QuizOption {
  value: string;
  label: string;
  correct?: boolean;
}

@Component({
  selector: "app-quiz",
  template: `
    <div class="question">
      <h2>{{ title }}</h2>
      <p>{{ question }}</p>

      <mat-list role="list">
        <mat-list-item role="listitem" *ngFor="let option of options">
          <button mat-button (click)="checkAnswer(option)">
            {{ option.label }}
          </button>
        </mat-list-item>
      </mat-list>

      <p *ngIf="answered">{{ message }}</p>
      <button mat-button *ngIf="answered" (click)="resetQuiz()">
        Try Again
      </button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
  title = "IQ Quiz Question";
  @Input() question = "";
  @Input() options: QuizOption[] = [];
  correctMessage = "Correct!";
  incorrectMessage = "Incorrect";

  answered = false;
  message = "";

  checkAnswer(answer: QuizOption) {
    this.answered = true;
    if (answer.correct) {
      this.message = this.correctMessage;
    } else {
      this.message = this.incorrectMessage;
    }
  }

  resetQuiz() {
    this.answered = false;
    this.message = "";
  }
}
