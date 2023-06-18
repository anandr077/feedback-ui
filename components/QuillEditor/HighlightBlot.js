import Quill from "quill";

const Inline = Quill.import("blots/inline");

class HighlightBlot extends Inline {
  static create(value) {
    const node = super.create(value);
    node.setAttribute("data-comment-id", value.id);
    node.style.backgroundColor = value.color;
    node.classList.add("quill-highlight");
    return node;
  }

  static formats(node) {
    return {
      id: node.getAttribute("data-comment-id"),
      color: node.style.backgroundColor
    };
  }
}
HighlightBlot.blotName = "highlight";
HighlightBlot.tagName = "span";
HighlightBlot.className = "quill-highlight";

export default HighlightBlot;
