import { ChangeDetectionStrategy, Component } from "@angular/core";

import { QuizComponent, QuizOption } from "../../shared/quizz.component";

@Component({
  selector: "app-three",
  template: `
    <app-quiz
      question="A farmer has 17 sheep. All but 9 die. How many sheep are left?"
      [options]="options"
    ></app-quiz>
  `,
  standalone: true,

  imports: [QuizComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeComponent {
  options: QuizOption[] = [
    { value: "8", label: "8 sheep" },
    { value: "9", label: "9 sheep", correct: true },
    { value: "0", label: "0 sheep" },
    { value: "17", label: "17 sheep" },
  ];
}
