import Quill from 'quill';

const Inline = Quill.import('blots/inline');
class HighlightedCommentBlot extends Inline {
  static blotName = 'highlight';
  static tagName = 'span';

  static create(value) {
    const node = super.create();
    node.style.backgroundColor = value.color;
    node.setAttribute('data-comment-id', value.commentId);
    return node;
  }

  static value(node) {
    return {
      color: node.style.backgroundColor,
      commentId: node.getAttribute('data-comment-id'),
    };
  }
}
