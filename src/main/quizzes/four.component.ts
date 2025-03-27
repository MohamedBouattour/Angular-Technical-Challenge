import { ChangeDetectionStrategy, Component } from "@angular/core";
import { QuizComponent, QuizOption } from "../../shared/quizz.component";

@Component({
  selector: "app-four",
  template: `
    <app-quiz
      question="If you multiply me by any number, the answer will always remain the same. What number am I?"
      [options]="options"
    ></app-quiz>
  `,
  standalone: true,
  imports: [QuizComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourComponent {
  options: QuizOption[] = [
    { value: "1", label: "1" },
    { value: "0", label: "0", correct: true },
    { value: "2", label: "2" },
    { value: "-1", label: "-1" },
  ];
}
