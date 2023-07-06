import Quill from 'quill';

const Inline = Quill.import('blots/inline');

class HighlightBlot extends Inline {
  static create(value) {
    const node = super.create();
    node.setAttribute('data-comment-id', value.commentId);
    node.style.backgroundColor = value.background;
    node.classList.add('quill-highlight');
    return node;
  }

  static formats(node) {
    return {
      commentId: node.getAttribute('data-comment-id'),
      background: node.style.backgroundColor,
    };
  }
}

HighlightBlot.blotName = 'highlight';
HighlightBlot.tagName = 'span';
HighlightBlot.className = 'quill-highlight';

export default HighlightBlot;
