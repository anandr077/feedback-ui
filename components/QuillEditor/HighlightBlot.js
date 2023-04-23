import Quill from "quill";

const Inline = Quill.import("blots/inline");

class HighlightBlot extends Inline {
  static create(value) {
    const node = super.create(value);
    node.setAttribute("data-comment-id", value);
    node.classList.add("quill-highlight");
    return node;
  }

  static formats(node) {
    return node.getAttribute("data-comment-id");
  }
}

HighlightBlot.blotName = "highlight";
HighlightBlot.tagName = "span";
HighlightBlot.className = "quill-highlight";

export default HighlightBlot;
