let Inline = Quill.import('blots/inline');

class MetaBlot extends Inline {
  static create(value) {
    let node = super.create();
    node.setAttribute('data-comment-id', value.commentId);
    return node;
  }

  static formats(node) {
    return JSON.parse(node.getAttribute('data-comment-id'));
  }
}
MetaBlot.blotName = 'meta';
MetaBlot.tagName = 'span';

Quill.register({
  'formats/meta': MetaBlot
});
