import { add, flatMap } from 'lodash';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

import Quill from 'quill';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import HighlightBlot from './HighlightBlot';
import './styles.css';
const QuillEditor = React.forwardRef(
  ({ comments, value, options, debounceTime, onDebounce, nonEditable }, ref) => {
    Quill.register(HighlightBlot);
    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);

    useEffect(() => {
      if (editorRef.current && !editor) {
        const quillInstance = new Quill(editorRef.current, options);

        quillInstance.root.style.fontFamily = '"IBM Plex Sans", sans-serif';
        quillInstance.root.style.fontSize = '18px';
        quillInstance.root.style.lineHeight = '32px';

        const delta = quillInstance.clipboard.convert(value);
        quillInstance.setContents(delta);
        setEditor(quillInstance);
      }
    }, [editor, editorRef, options, value]);

    useEffect(() => {
      if (editor) {
        removeAllHighlights(editor);
        comments.forEach((comment) => {
          
          if (comment.range) {
            addCommentHighlight(editor, comment)
          }
        });
      }
    }, [editor]);

    useEffect(() => {
      if (editor) {
        const debounce = (func, wait) => {
          let timeout;

          return function (...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
          };
        };

        const handleDebounce = () => {
          // Get the contents of the editor as a Delta object
          const delta = editor.getContents();
          // Filter out the highlight attributes from the Delta object
          const filteredOps = delta.ops.map((op) => {
            if (op.attributes && op.attributes.highlight) {
              const { background, highlight, ...newAttributes } = op.attributes;
              return { ...op, attributes: newAttributes };
            }
            return op;
          });

          const cfg = {
            multiLineParagraph: true, // Set this to true if you want to preserve multiline paragraphs
            multiLineCodeblock: true, // Set this to true if you want to preserve multiline code blocks
          };

          var converter = new QuillDeltaToHtmlConverter(filteredOps, cfg);

          var html = converter.convert();
          
          onDebounce(html,  getHighlights(editor));
        };

        if (debounceTime > 0) {
          const debouncedAction = debounce(handleDebounce, debounceTime);

          editor.on('text-change', (delta, oldContents, source) => {
            if (source === 'user') {
              debouncedAction();
            }
          });
        }
      }
    }, [editor]);
    useImperativeHandle(ref, () => ({
      getText() {
        return editor.getText();
      },
      addComment(comment) {
        addComment(editor, comment);
      },
      scrollToHighlight(commentId) {
        scrollToHighlight(commentId);
      },
      getAllHighlightsWithComments() {
        return getHighlights(editor);
      },
      selectRange(range) {
        editor.setSelection(range.index, range.length, 'silent');
        editor.focus();
      },
      redrawHighlights(comments) {
        if (editor) {
          removeAllHighlights(editor);
          comments.forEach((comment) => {
            if (comment.isHidden !== undefined && comment.isHidden !== null)
              highlightCommentRange(editor, comment);
          });
        }
      },
      delteComment(commentId) {
        if (editor) {
          const remainingComments = Object.entries(highlightsWithCommentsData)
          .filter(([commentId, _]) => commentId !== commentId)
          .map(([commentId, _]) => commentId);
        
          removeAllHighlights(editor);
          remainingComments.forEach((comment) => {
            if (comment.isHidden !== undefined && comment.isHidden !== null)
              highlightCommentRange(editor, comment);
          });
        }
      },
      unhighlight(from, to) {
        editor.removeFormat(from, to - from, 'silent');
        editor.removeFormat(from, to - from, 'silent');
      },
      highlightComment(comment) {
        highlightCommentRange(editor, comment);
      },
      

      getContents() {
        return editor.getContents();
      },
      getSelection() {
        const selection =  editor.getSelection();

        const selectedText = getSelectedText(editor, selection);
        return {
          range: editor.getSelection(),
          selectedText: selectedText,
        };
      },
      getSelectionWithText() {
        const selection = editor.getSelection();
        const selectedText = getSelectedText(editor, selection);
        return editor.getSelection();
      },
      getFormat(range) {
        return editor.getFormat(range);
      },
      setFormat(range, format) {
        return editor.format(range, format);
      },
      setLostFocusColor(range) {
        editor.formatText(
          range.index,
          range.length,
          {
            highlight: {
              commentIds: ['lostFocus'],
              background: '#C0C8D1',
              isVisible: true,
            },
          },
          'silent'
        );
      },
      getLeaf(index) {
        return editor.getLeaf(index);
      },
      getBounds(index, length) {
        return editor.getBounds(index, length);
      },
      container() {
        return editor.container;
      },
      focus() {
        return editor.focus();
      },
      disable() {
        return editor.enable(false);
      },
    }));

    return (
      <div className="quill-editor-container">
        <div ref={editorRef} style={nonEditable ? { height: 'auto' } : { minHeight: '750px' }}/>
      </div>
    );
  }
);

export default QuillEditor;

function highlightCommentRange(editor, comment) {
  addComment(editor, comment);
}

function getSelectedText(editor, selection) {
  if (selection) {
    return editor.getText(selection.index, selection.length);
  } else {
    return '';
  }
}
function scrollToHighlight(commentId) {
  ////FIX
  const highlightSpans = Array.from(document.querySelectorAll('span.quill-highlight'));
  const targetSpan = highlightSpans.find(span => {
      const commentIds = span.getAttribute('data-comment-ids');
      return commentIds && commentIds.split(',').includes(commentId);
  });
  if (targetSpan) {
    setTimeout(() => targetSpan.scrollIntoView(
      {
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
      }
    ), 100);
    // targetSpan.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'center',
    //   inline: 'nearest',
    // });
  } else {
    console.warn(`No highlight found for comment ID: ${commentId}`);
  }
}
function removeAllHighlights(editor) {
  const highlightElements = getHighlights(editor);
  flatMap(Object.entries(highlightElements), ([commentId, highlights]) => {
    return highlights.map((highlight) => {
      const { content, range } = highlight;
      removeOneBlot(editor, range.from, range.to - range.from, 'highlight');
      return { commentId, range };
    });
  });
}

function addNewHighlight(editor, comment) {
  getHighlights(editor);
}

function getHighlights(editor) {
  const quillContainer = editor.container;

  let highlightsWithComments = {};

  // Get all highlight elements in the Quill container
  const highlightElements = quillContainer.querySelectorAll('.quill-highlight');

  highlightElements.forEach((element) => {
    // Assuming the comment IDs are stored as a comma-separated string
    const commentIds = element.getAttribute('data-comment-ids').split(',');
    const content = element.textContent;
    const index = editor.getIndex(Quill.find(element));
    const length = content.length;

    // Process each comment ID associated with the highlight
    commentIds.forEach(commentId => {
      const highlightData = { content, index, length };

      // Group highlights with the same comment id together
      if (highlightsWithComments[commentId]) {
        highlightsWithComments[commentId].push(highlightData);
      } else {
        highlightsWithComments[commentId] = [highlightData];
      }
    });
  });

  const formattedHighlights = Object.entries(highlightsWithComments).reduce(
    (result, [commentId, highlights]) => {
      result[commentId] = highlights.map(({ content, index, length }) => {
        return {
          range: {
            from: index,
            to: index + length,
          },
        };
      });
      return result;
    },
    {}
  );

  return formattedHighlights;
}

function getHighlights2(editor) {
  const quillContainer = editor.container;
  let highlightsByRange = {};
  // Get all highlight elements in the Quill container
  const highlightElements = quillContainer.querySelectorAll('.quill-highlight');

  highlightElements.forEach((element) => {
    const commentIds = element.getAttribute('data-comment-ids').split(',');
    const commentColours = element.getAttribute('data-comment-colours').split(',');
    const index = editor.getIndex(Quill.find(element));
    const length = element.textContent.length;
    const rangeKey = `${index}-${index + length}`;

    // Initialize the array for this range if it doesn't exist
    if (!highlightsByRange[rangeKey]) {
      highlightsByRange[rangeKey] = [];
    }

    // Add comment IDs to the range
    commentIds.forEach(commentId => {
      if (!highlightsByRange[rangeKey].includes(commentId)) {
        highlightsByRange[rangeKey].push(commentId);
      }
    });
    commentIds.forEach((commentId, idx) => {
      const colour = commentColours[idx] || '#fff9c4';
      if (!highlightsByRange[rangeKey].some(entry => entry.commentId === commentId)) {
          highlightsByRange[rangeKey].push({ commentId, colour });
      }
    });
  });
  return highlightsByRange;
}


function addComment(editor, comment) {
  // updateQuillHighlights(editor, getHighlights(editor), comment.id, comment.range);
  addCommentHighlight(editor, comment);
}

function addCommentHighlight(editor, comment) {
  const highlightsByRange = getHighlights2(editor)
  const updatedHighlights = JSON.parse(JSON.stringify(highlightsByRange));

  let segmentsToAdd = [{ from: comment.range.from, to: comment.range.to }];

  Object.entries(highlightsByRange).forEach(([rangeKey, entries]) => {
    const commentIds = entries.map(entry => entry.commentId);
    const colours = entries.map(entry => entry.colour);  
    const [rangeStart, rangeEnd] = rangeKey.split('-').map(Number);

      segmentsToAdd = segmentsToAdd.flatMap(segment => {
          if (segment.from < rangeEnd && segment.to > rangeStart) {
              // Split the segment into non-overlapping parts
              const newSegments = [];
              if (segment.from < rangeStart) {
                  newSegments.push({ from: segment.from, to: rangeStart });
              }
              if (segment.to > rangeEnd) {
                  newSegments.push({ from: rangeEnd, to: segment.to });
              }
              return newSegments;
          }
          return [segment];
      });

      // Update existing overlapping highlights
      if (comment.range.from < rangeEnd && comment.range.to > rangeStart) {
          const overlapStart = Math.max(rangeStart, comment.range.from);
          const overlapEnd = Math.min(rangeEnd, comment.range.to);
          updatedHighlights[`${overlapStart}-${overlapEnd}`] = [...new Set([...commentIds, comment.id])];

          editor.formatText(
              overlapStart,
              overlapEnd - overlapStart,
              {
                  highlight: {
                      commentIds: updatedHighlights[`${overlapStart}-${overlapEnd}`],
                      colours: [...colours, createBackgroundColour(comment)],
                      background: createBackgroundColour(comment),
                      isVisible: !comment.isHidden,
                  },
              },
              'silent'
          );

          // Adjust the existing range if necessary
          if (rangeStart < overlapStart) {
              updatedHighlights[`${rangeStart}-${overlapStart}`] = commentIds;
          }
          if (overlapEnd < rangeEnd) {
              updatedHighlights[`${overlapEnd}-${rangeEnd}`] = commentIds;
          }

          // Remove the original range key
          delete updatedHighlights[rangeKey];
      }
  });

  // Add new highlights for each non-overlapping segment
  segmentsToAdd.forEach(segment => {
      const segmentKey = `${segment.from}-${segment.to}`;
      updatedHighlights[segmentKey] = [comment.id];

      editor.formatText(
          segment.from,
          segment.to - segment.from,
          {
              highlight: {
                  commentIds: [comment.id],
                  colours: [createBackgroundColour(comment)],
                  background: createBackgroundColour(comment),
                  isVisible: !comment.isHidden,
              },
          },
          'silent'
      );
  });

  // Return the updated highlights
  return updatedHighlights;
}

function removeOneBlot(quill, index, length, blotName) {
  let formats = quill.getFormat(index, length);

  Object.keys(formats).forEach((format) => {
    quill.removeFormat(index, length);
  });
  delete formats[blotName];
  delete formats['background'];

  for (const [formatName, format] of Object.entries(formats)) {
    quill.formatText(index, length, formatName, format, 'api');
    quill.formatLine(index, length, formatName, format, 'api');
  }
}
function createBackgroundColour(comment) {
  if (comment.color !== undefined && comment.color !== null) {
    return comment.color;
  }
  return '#fff9c4';
}