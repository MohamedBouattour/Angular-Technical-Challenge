import { ChangeDetectionStrategy, Component } from "@angular/core";
import { QuizComponent, QuizOption } from "../../core/components/quizz.component";

@Component({
  selector: "app-five",
  template: `
    <app-quiz
      question="What number comes next in this sequence: 2, 6, 12, 20, 30, ?"
      [options]="options"
      correctAnswer="42"
    >
    </app-quiz>
  `,
  standalone: true,
  imports: [QuizComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiveComponent {
  options: QuizOption[] = [
    { value: "42", label: "42", correct: true },
    { value: "40", label: "40" },
    { value: "36", label: "36" },
    { value: "44", label: "44" },
  ];
}
