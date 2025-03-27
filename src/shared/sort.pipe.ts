import { Pipe } from "@angular/core";

@Pipe({
  name: "sort",
  pure: true,
  standalone: true,
})
export class SortPipe {
  transform(value: any[], key: string, order: "ASC" | "DESC" = "ASC") {
    if (!value) return [];
    return value;
  }
}
