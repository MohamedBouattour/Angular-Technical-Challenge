import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-three",
  template: `
    <p>Complete the binary search tree algorithm</p>
    <div class="tree-visualization">
      <pre>{{ displayTree() }}</pre>
    </div>
    <span>
      {{
        search(root, 14) === true
          ? "14 Exist in the tree"
          : "14 Not found in the tree"
      }}
    </span>
  `,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Complete The binary Search Tree algorithm
 */
export class ThreeComponent {
  search(node: TreeNode | null, value: number): boolean {
    if (node === null) {
      return false;
    }
    // add search logic here

    return false;
  }
  searchValue: number | null = null;
  searchResult: boolean | null = null;

  // Binary Tree Node structure

  // Sample binary search tree
  root = new TreeNode(8);

  constructor() {
    // Construct sample tree
    this.root.left = new TreeNode(3);
    this.root.right = new TreeNode(10);
    this.root.left.left = new TreeNode(1);
    this.root.left.right = new TreeNode(6);
    this.root.right.right = new TreeNode(14);
    this.root.right.right.left = new TreeNode(13);
  }

  displayTree(): string {
    const getTreeString = (
      node: TreeNode | null,
      prefix = "",
      isLeft = true
    ): string => {
      if (!node) return "";

      const nodeStr = `${prefix}${isLeft ? "└── " : "┌── "}${node.value}\n`;
      const nextPrefix = prefix + (isLeft ? "    " : "│   ");

      return (
        nodeStr +
        getTreeString(node.right, nextPrefix, false) +
        getTreeString(node.left, nextPrefix, true)
      );
    };

    return getTreeString(this.root, "", true);
  }
}

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
