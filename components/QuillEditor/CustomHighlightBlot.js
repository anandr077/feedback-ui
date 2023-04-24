// CustomHighlightBlot.js

import Quill from "quill";

const Inline = Quill.import("blots/inline");

class CustomHighlightBlot extends Inline {
  static create() {
    const node = super.create();
    node.setAttribute("data-custom-highlight", "true");
    return node;
  }
}

CustomHighlightBlot.blotName = "customHighlight";
CustomHighlightBlot.tagName = "span";
CustomHighlightBlot.className = "custom-highlight";

Quill.register({
  "formats/customHighlight": CustomHighlightBlot,
});

export default CustomHighlightBlot;
