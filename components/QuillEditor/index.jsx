import { add, flatMap } from 'lodash';
import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useContext,
} from 'react';
import {
  Screen,
  Frame1329,
  OptionContainer,
  Option,
  Frame1406,
  SmartAnnotationsComponent,
  CommentContainer,
  Frame1326,
  TypeHere,
  ShortcutList,
  Frame1383,
  Frame13311,
  Crown,
  ExemplarComponent,
} from './style';
import { FeedbackContext } from '../FeedbacksComponents/FeedbacksRoot/FeedbackContext';
import Quill from 'quill';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import HighlightBlot from './HighlightBlot';
import './styles.css';
import CommentCard32 from '../FeedbacksComponents/CommentCard32';
import SmartAnotation from '../SmartAnnotations';
import { getUserRole } from '../../userLocalDetails';
import SubmitCommentFrameRoot from '../SubmitCommentFrameRoot';
import { Share } from '@mui/icons-material';
import Buttons4 from '../FeedbacksComponents/Buttons4';
import FocusAreasFrame from '../FeedbacksComponents/FocusAreasFrame';
import FocussedInput from '../FocussedInput';
import CommentIcon from '../../static/img/graysinglecomment.svg';
import AlphabetIcon from '../../static/img/24grayalphabet.svg';
import ShareIcon from '../../static/img/24grayshare.svg';
import ThumbsupIcon from '../../static/img/24thumbsuppurple.svg';

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
      updatedCommentPosition,
      methods,
      pageMode,
      submission,
      selectedRange,
    },
    ref
  ) => {
    Quill.register(HighlightBlot);
    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);
    const [selection, setSelection] = useState(null);
    const [groupedCommentsWithGap, setGroupedCommentsWithGap] = useState([]);
    const [commentHeights, setCommentHeights] = useState([]);
    const { setCountWords, showNewComment, newCommentSerialNumber } =
      useContext(FeedbackContext);
    const manipulatePastedHTML = (pastedHTML) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(pastedHTML, 'text/html');

      const removeStyles = (element) => {
        element.removeAttribute('style');
        element.style.backgroundColor = '';
      };

      const traverseAndRemoveStyles = (node) => {
        if (node.nodeType === 1) {
          removeStyles(node);
          for (let i = 0; i < node.children.length; i++) {
            traverseAndRemoveStyles(node.children[i]);
          }
        } else if (node.nodeType === 3) {
          // Do nothing with text nodes for this example
        }
      };

      traverseAndRemoveStyles(doc.body);

      const serializer = new XMLSerializer();
      const modifiedHTML = serializer.serializeToString(doc);

      return modifiedHTML;
    };

    console.log('the comments are', comments);

    const handlePaste = (event) => {
      event.preventDefault();

      const clipboardData = event.clipboardData || window.clipboardData;

      const pastedHTML = clipboardData.getData('text/html');

      const modifiedHTML = manipulatePastedHTML(pastedHTML);

      const cursorPosition = editor.getSelection(true);

      const currentText = editor.getText();

      editor.clipboard.dangerouslyPasteHTML(cursorPosition.index, modifiedHTML);

      const pastedLength = editor.getText().length - currentText.length;

      const newCursorPosition = cursorPosition.index + pastedLength;

      setTimeout(() => {
        editor.setSelection(newCursorPosition, 0, 'silent');
        editor.focus();
      }, 10);
    };

    useEffect(() => {
      if (editorRef.current && !editor) {
        const quillInstance = new Quill(editorRef.current, options);
        quillInstance.root.style.fontFamily = '"IBM Plex Sans", sans-serif';
        quillInstance.root.style.fontSize = '18px';
        quillInstance.root.style.lineHeight = '32px';

        const delta = quillInstance.clipboard.convert(value);
        quillInstance.setContents(delta);
        setEditor(quillInstance);

        quillInstance.on('selection-change', handleSelectionChange);

        const initialText = quillInstance.getText();
        const initialWordCount =
          initialText.trim().length > 0
            ? initialText.trim().split(/\s+/).length
            : 0;
        setCountWords(initialWordCount);
      }

      if (editor && editorFontSize !== null) {
        const fontSizePercentage = editorFontSize * 0.01;
        editor.root.style.fontSize = `${18 * fontSizePercentage}px`;
        const calculatedLineHeight = editorFontSize * 0.25;
        editor.root.style.lineHeight = `${calculatedLineHeight}px`;
      }

      if (editor) {
        editor.on('text-change', () => {
          const text = editor.getText();
          const wordCount =
            text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
          setCountWords(wordCount);
        });
      }
    }, [editor, editorRef, options, value, editorFontSize]);

    useEffect(() => {
      if (editor) {
        removeAllHighlights(editor);
        comments.forEach((comment) => {
          if (comment.range) {
            addCommentHighlight(editor, comment);
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
          handlePaste(event);
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

    useEffect(() => {
      const heights = comments.map(() => 0); // Initialize heights array with 0 values
      setCommentHeights(heights); // Set initial heights

      // Measure heights after rendering
      const measureHeights = () => {
        const newHeights = comments.map((_, index) => {
          const element = document.getElementById(`comment-${index}`);
          return element ? element.clientHeight : 0;
        });
        setCommentHeights(newHeights);
      };

      // Call measureHeights after each render
      measureHeights();

      // Re-measure heights when window is resized
      window.addEventListener('resize', measureHeights);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('resize', measureHeights);
      };
    }, [comments]);

    useEffect(() => {
      let lastCommentBottomPosition = 0;
      let accumulatedHeight = 0;

      const updatedCommentIndex = comments
        .sort((a, b) => a.range.from - b.range.from)
        .findIndex((comment) => comment.id === updatedCommentPosition?.id);

      const groupedComments = comments
        .sort((a, b) => a.range.from - b.range.from)
        .map((comment, index) => {
          if (!editorRef.current) return null;

          const length = comment.range.to - comment.range.from;
          let boundsIs;
          if (editor) {
            boundsIs = editor.getBounds(comment.range.from, length);
          }

          if (!boundsIs) {
            console.error('Bounds not found for comment:', comment);
            return null;
          }

          let topPosition = boundsIs.top;

          let updatedTopPosition = null;
          if (updatedCommentPosition) {
            let updatedLength =
              updatedCommentPosition?.range.to -
              updatedCommentPosition?.range.from;
            let updatedBounds;
            if (editor) {
              updatedBounds = editor.getBounds(
                updatedCommentPosition?.range.from,
                updatedLength
              );
            }
            updatedTopPosition = updatedBounds.top;
          }

          if (topPosition < lastCommentBottomPosition) {
            topPosition = lastCommentBottomPosition;
          }

          if (
            index === updatedCommentIndex &&
            updatedCommentPosition &&
            topPosition > updatedTopPosition
          ) {
            accumulatedHeight = 0;
            topPosition = updatedTopPosition;
          }

          if (index < updatedCommentIndex) {
            accumulatedHeight += commentHeights[index];
            topPosition -= accumulatedHeight;
          }

          //console.log('the comment height', commentHeights[index])

          //const newTopPosition = topPosition;

          lastCommentBottomPosition = topPosition + commentHeights[index];

          return { ...comment, topPosition: topPosition };
        })
        .filter((comment) => comment !== null);

      let groupedCommentsWithGap = [];
      let currentGroup = [];

      groupedComments.forEach((comment, index) => {
        // If currentGroup is empty, add the comment to it
        if (currentGroup.length === 0) {
          currentGroup.push(comment);
        } else {
          const lastComment = currentGroup[currentGroup.length - 1];
          const lastCommentBottomPosition =
            lastComment.topPosition + commentHeights[index];

          // Check if the current comment overlaps with the last comment in the group
          if (comment.topPosition < lastCommentBottomPosition) {
            // If overlap exists, finalize the current group
            groupedCommentsWithGap.push(currentGroup);
            currentGroup = [comment];
          } else {
            // If no overlap, add the comment to the current group
            currentGroup.push(comment);
          }
        }
      });

      if (currentGroup.length > 0) {
        groupedCommentsWithGap.push(currentGroup);
      }

      setGroupedCommentsWithGap(groupedCommentsWithGap);
      console.log('the group groupedComments', groupedCommentsWithGap);
    }, [editor, editorRef, updatedCommentPosition, comments, commentHeights]);

    let commentInputTopPosition;
    if (selectedRange) {
      const length = selectedRange.to - selectedRange.from;

      let boundsIs;
      if (editor) {
        boundsIs = editor.getBounds(selectedRange.from, length);
      }

      if (!boundsIs) {
        return null;
      }

      commentInputTopPosition = boundsIs.top;
    }

    console.log('the selected Range is', commentInputTopPosition);

    return (
      <div className="quill-editor-container" style={{ position: 'relative' }}>
        <div
          ref={editorRef}
          style={nonEditable ? { height: 'auto' } : { minHeight: '750px' }}
        ></div>
        {showNewComment ? (
          <div
            className="main-side-container"
            style={{ top: commentInputTopPosition, right: '-330px' }}
          >
            <Screen onClick={methods.hideNewCommentDiv}></Screen>
            {newCommentFrame(
              pageMode,
              submission,
              newCommentSerialNumber,
              methods
              // newCommentFrameRef,
              // share
            )}
          </div>
        ) : (
          <div className="main-side-container">
            <ul
              style={{
                height: '100%',
              }}
            >
              {groupedCommentsWithGap.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {newCommentFrame(
                    pageMode,
                    submission,
                    newCommentSerialNumber,
                    methods
                    // newCommentFrameRef,
                    // share
                  )}
                  {group.map((comment, index) => (
                    <div
                      key={index}
                      id={`comment-${index}`}
                      style={{
                        position: 'absolute',
                        top: `${comment.topPosition}px`,
                        left: '0',
                        minWidth: '300px',
                        height: 'auto',
                        overflow: 'hidden',
                        padding: '20px',
                      }}
                    >
                      <CommentCard32 comment={comment} />
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          </div>
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
  ////FIX
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
          inline: 'nearest',
        }),
      100
    );
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
    commentIds.forEach((commentId) => {
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
    const commentColours = element
      .getAttribute('data-comment-colours')
      .split(',');
    const index = editor.getIndex(Quill.find(element));
    const length = element.textContent.length;
    const rangeKey = `${index}-${index + length}`;

    // Initialize the array for this range if it doesn't exist
    if (!highlightsByRange[rangeKey]) {
      highlightsByRange[rangeKey] = [];
    }

    // Add comment IDs to the range
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
  // updateQuillHighlights(editor, getHighlights(editor), comment.id, comment.range);
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

const newCommentFrame = (
  pageMode,
  submission,
  newCommentSerialNumber,
  methods
  // newCommentFrameRef,
  // share
) => {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    return selectFocusArea(methods, submission, newCommentSerialNumber);
  }
  return reviewerNewComment(
    methods,
    // newCommentFrameRef,
    // share,
    pageMode
  );
};

function reviewerNewComment(
  methods,
  // newCommentFrameRef,
  // share,
  pageMode
) {
  const { smartAnnotations } = useContext(FeedbackContext);

  if (pageMode === 'CLOSED') return <></>;
  return (
    <>
      <Frame1329>
        <OptionContainer>
          <Option>
            <img src={CommentIcon} />
          </Option>
          <Option>
            <img src={AlphabetIcon} />
          </Option>
          <Option>
            <img src={ShareIcon} />
          </Option>
          <Option>
            <img src={ThumbsupIcon} />
          </Option>
        </OptionContainer>
        <Frame1406>
          <SmartAnnotationsComponent>
            <CommentContainer>
              <Frame1326>
                <TypeHere>
                  <FocussedInput
                    id="newCommentInput"
                    //ref={newCommentFrameRef}
                    placeholder="Comment here...."
                  ></FocussedInput>
                </TypeHere>
              </Frame1326>

              <SubmitCommentFrameRoot
                submitButtonOnClick={methods.handleAddComment}
                cancelButtonOnClick={methods.hideNewCommentDiv}
              />
            </CommentContainer>
            <ShortcutList>
              {shortcutList(methods, smartAnnotations)}
            </ShortcutList>
          </SmartAnnotationsComponent>
          <ExemplarComponent>
            {/* {shareWithClassFrame(methods, share)} */}
            {shareWithClassFrame(methods)}
          </ExemplarComponent>
        </Frame1406>
      </Frame1329>
    </>
  );
}

function shortcutList(methods, smartAnnotations) {
  return smartAnnotations.map((smartAnnotation, index) => (
    <SmartAnotation
      key={index}
      smartAnnotation={smartAnnotation}
      onSuggestionClick={methods.handleShortcutAddCommentSmartAnnotaion}
    />
  ));
}

function shareWithClassFrame(methods, share) {
  if (getUserRole() === 'STUDENT') return <></>;
  return (
    <>
      <Frame1383>
        <Frame13311>
          <Crown src="/icons/share.png" alt="crown" />
          <Share>Share</Share>
        </Frame13311>
        <Buttons4
          text={'Share with class'}
          onClickFn={methods.handleShareWithClass}
        />
      </Frame1383>
    </>
  );
}

function selectFocusArea(methods, submission, newCommentSerialNumber) {
  const allFocusAreas = flatMap(submission.assignment.questions, (question) =>
    question.focusAreas ? question.focusAreas : []
  );

  const focusAreas = uniqBy(
    allFocusAreas?.filter((fa) => {
      return submission.assignment.questions[
        newCommentSerialNumber - 1
      ]?.focusAreaIds?.includes(fa.id);
    }),
    'id'
  );
  const focusAreasFrame = (methods) => (
    <>
      <Frame1329>
        <Frame1406>
          <FocusAreasFrame
            focusAreas={focusAreas}
            handleAddFocusArea={methods.handleFocusAreaComment}
          />
        </Frame1406>
      </Frame1329>
    </>
  );

  return focusAreasFrame(methods);
}
