import { add, flatMap } from 'lodash';
import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useContext,
} from 'react';
import { FeedbackContext } from '../FeedbacksComponents/FeedbacksRoot/FeedbackContext';
import Quill from 'quill';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import HighlightBlot from './HighlightBlot';
import './styles.css';
import CommentBox from './CommentBox';
import ModalForSelectOption from '../../components2/Modals/ModalForSelectOption';
import FocusAreaSelection from '../../components2/FocusAreaSelection';

const QuillEditor = React.forwardRef(
  (
    {
      comments,
      value,
      options,
      debounceTime,
      onDebounce,
      nonEditable,
      editorFontSize,
      selectedComment,
      methods,
      pageMode,
      submission,
      selectedRange,
      newCommentFrameRef,
      share,
      question,
      isFeedback,
    },
    ref
  ) => {
    Quill.register(HighlightBlot);
    const editorRef = useRef(null);
    const commentHeightRefs = useRef(null);
    const [editor, setEditor] = useState(null);
    const [selection, setSelection] = useState(null);
    const {
      isTeacher,
      showFloatingDialogue,
      setShowFloatingDialogue,
    } = useContext(FeedbackContext);

    useEffect(() => {
      if (editorRef.current && !editor) {
        const quillInstance = new Quill(editorRef.current, options);
        quillInstance.root.style.fontFamily =
          'var(--font-family-ibm_plex_sans)';
        quillInstance.root.style.fontSize = '16px';
        quillInstance.root.style.lineHeight = '24px';
        quillInstance.root.style.fontWeight = '400';
        quillInstance.root.style.color = '#181718';

        const delta = quillInstance.clipboard.convert({html:value});
        quillInstance.setContents(delta);
        setEditor(quillInstance);

        quillInstance.on('selection-change', handleSelectionChange);
      }

      if (editor && editorFontSize !== null) {
        const fontSizePercentage = editorFontSize * 0.01;
        editor.root.style.fontSize = `${16 * fontSizePercentage}px`;
        const calculatedLineHeight = editorFontSize * 0.25;
        editor.root.style.lineHeight = `${calculatedLineHeight}px`;
      }
    }, [editor, editorRef, options, value, editorFontSize]);
    useEffect(() => {
      if (editor && Array.isArray(comments) && comments.length > 0) {
        removeAllHighlights(editor);
        comments?.forEach((comment) => {
          if (comment.range) {
            addCommentHighlight(editor, comment);
          }
        });
      }
    }, [editor, comments]);

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

          onDebounce(html, getHighlights(editor));
        };

        if (debounceTime > 0) {
          const debouncedAction = debounce(handleDebounce, debounceTime);

          editor.on('text-change', (delta, oldContents, source) => {
            if (source === 'user') {
              debouncedAction();
            }
          });
        }

        const debouncedAction = debounce(handleDebounce, debounceTime);
        editor.root.addEventListener('paste', (event) => {
          debouncedAction();
        });
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
      setSelection(from, to) {
        return editor.setSelection(null);
      },
      selectRange(range) {
        editor.setSelection(range.index, range.length, 'silent');
        editor.focus();
      },
      redrawHighlights(comments) {
        if (editor) {
          removeAllHighlights(editor);
          comments?.forEach((comment) => {
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
        const selection = editor.getSelection();

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

    const handleSelectionChange = (range, oldRange, source) => {
      if (range && range.length > 0 && source === 'user') {
        setSelection(range);
      } else {
        setSelection(null);
      }
    };

    let floatingBoxTopPosition;
    if (selectedRange) {
      const length = selectedRange.to - selectedRange.from;

      let boundsIs;
      if (editor) {
        boundsIs = editor.getBounds(selectedRange.from, length);
      }

      if (!boundsIs) {
        return null;
      }

      floatingBoxTopPosition = boundsIs.top;
    }


    const calculateTotalCommentHeight = () => {
      if (commentHeightRefs.current) {
        const children = commentHeightRefs.current.children;
        let calculatedHeight = 0;
        for (let i = 0; i < children.length; i++) {
          calculatedHeight += children[i].offsetHeight;
        }
        return calculatedHeight + editorRef?.current.offsetHeight;
      }
      return 0;
    };
   
    const totalCommentHeight = calculateTotalCommentHeight()

    return (
      <div className="quill-editor-container" style={{ position: 'relative' }}>
        <div
          ref={editorRef}
          style={nonEditable ? { height: 'auto' } : { minHeight: '750px' }}
        ></div>
        {showFloatingDialogue && (
          <div
            className="FloatingEditorDialogueBox"
            style={{
              top: floatingBoxTopPosition,
              width: '280px',
              height: `${totalCommentHeight}px`,
            }}
          >
            <div className="modalHeading">
              <h1>{isTeacher ? 'Comment Banks' : 'Self-assessment Areas'}</h1>
              <button
                className="closeButton"
                onClick={() => {
                  editor.setSelection(null);
                  setShowFloatingDialogue(false)
                }}
              >
                x
              </button>
            </div>
            <FocusAreaSelection 
              optionsToSelect={question?.focusAreas}
              onClickOption={methods.handleFocusAreaComment}
            />
          </div>
        )}

        {!showFloatingDialogue && (
          <CommentBox
            pageMode={pageMode}
            submission={submission}
            methods={methods}
            comments={comments.filter((comment) => !comment.isHidden)}
            editor={editor}
            selectedComment={selectedComment}
            selectedRange={selectedRange}
            newCommentFrameRef={newCommentFrameRef}
            share={share}
            floatingBoxTopPosition={floatingBoxTopPosition}
            isFeedback={isFeedback}
            commentHeightRefs={commentHeightRefs}
            commentBoxContainerHeight={totalCommentHeight}
          />
        )}
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
  const highlightSpans = Array.from(
    document.querySelectorAll('span.quill-highlight')
  );
  const targetSpan = highlightSpans.find((span) => {
    const commentIds = span.getAttribute('data-comment-ids');
    return commentIds && commentIds.split(',').includes(commentId);
  });
  if (targetSpan) {
    setTimeout(
      () =>
        targetSpan.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        }),
      100
    );
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


function getHighlights(editor) {
  const quillContainer = editor.container;

  let highlightsWithComments = {};

  const highlightElements = quillContainer.querySelectorAll('span.quill-highlight');

  highlightElements.forEach((element) => {

    const commentIds = element.getAttribute('data-comment-ids').split(',');
    const content = element.textContent;
    const index = editor.getIndex(Quill.find(element));
    const length = content.length;
    commentIds.forEach((commentId) => {
      const highlightData = { content, index, length };

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
  const highlightElements = quillContainer.querySelectorAll('span.quill-highlight');

  highlightElements.forEach((element) => {
    const commentIds = element.getAttribute('data-comment-ids').split(',');
    const commentColours = element
      .getAttribute('data-comment-colours')
      .split(',');
    const index = editor.getIndex(Quill.find(element));
    const length = element.textContent.length;
    const rangeKey = `${index}-${index + length}`;

    if (!highlightsByRange[rangeKey]) {
      highlightsByRange[rangeKey] = [];
    }
    commentIds.forEach((commentId) => {
      if (!highlightsByRange[rangeKey].includes(commentId)) {
        highlightsByRange[rangeKey].push(commentId);
      }
    });
    commentIds.forEach((commentId, idx) => {
      const colour = commentColours[idx] || '#fff9c4';
      if (
        !highlightsByRange[rangeKey].some(
          (entry) => entry.commentId === commentId
        )
      ) {
        highlightsByRange[rangeKey].push({ commentId, colour });
      }
    });
  });
  return highlightsByRange;
}

function addComment(editor, comment) {
  addCommentHighlight(editor, comment);
}

function addCommentHighlight(editor, comment) {
  const highlightsByRange = getHighlights2(editor);
  const updatedHighlights = JSON.parse(JSON.stringify(highlightsByRange));

  let segmentsToAdd = [{ from: comment.range.from, to: comment.range.to }];

  Object.entries(highlightsByRange).forEach(([rangeKey, entries]) => {
    const commentIds = entries.map((entry) => entry.commentId);
    const colours = entries.map((entry) => entry.colour);
    const [rangeStart, rangeEnd] = rangeKey.split('-').map(Number);

    segmentsToAdd = segmentsToAdd.flatMap((segment) => {
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
      updatedHighlights[`${overlapStart}-${overlapEnd}`] = [
        ...new Set([...commentIds, comment.id]),
      ];

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
  segmentsToAdd.forEach((segment) => {
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
