import Quill from 'quill';

const Inline = Quill.import('blots/inline');

class HighlightBlot extends Inline {
  static create(value) {
    const node = super.create();
    node.setAttribute('data-comment-ids', value.commentIds);
    node.setAttribute('data-comment-colours', value.colours);
    if (value.isVisible) {
      node.style.backgroundColor = value.background;
    }
    node.classList.add('quill-highlight');
    return node;
  }

  static formats(node) {
    return {
      commentIds: node.getAttribute('data-comment-ids'),
      colours: node.getAttribute('data-comment-colours'),
      background: node.style.backgroundColor,
    };
  }
}

HighlightBlot.blotName = 'highlight';
HighlightBlot.tagName = 'span';
HighlightBlot.className = 'quill-highlight';

export default HighlightBlot;
