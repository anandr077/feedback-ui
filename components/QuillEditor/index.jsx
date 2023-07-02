import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import { filter, flatMap, includes, map, uniq } from "lodash";

import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./styles.css";
import HighlightBlot from "./HighlightBlot";
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { Map } from 'immutable';
import { groupBy, mapValues, filter } from 'lodash';
const QuillEditor = React.forwardRef(
  ({ comments, value, options, debounceTime, onDebounce }, ref) => {
    Quill.register(HighlightBlot);
    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);

    useEffect(() => {
      if (editorRef.current && !editor) {
        const quillInstance = new Quill(editorRef.current, options);
        quillInstance.root.style.fontFamily = '"IBM Plex Sans", sans-serif';
        quillInstance.root.style.fontSize = "16px";

        const delta = quillInstance.clipboard.convert(value);
        quillInstance.setContents(delta);

        setEditor(quillInstance);
      }
    }, [editor, editorRef, options, value]);

    useEffect(() => {
      if (editor) {
        removeAllHighlights(editor)
        comments.forEach((comment) => {
          if (comment.range) {
            const range = {
              index: comment.range.from,
              length: comment.range.to - comment.range.from,
            };
            editor.formatText(range.index, range.length, {
              highlight: comment.id
            });
          }
        });
      }
    }, [comments, editor]);
    
    useEffect(() => {
      if(editor) {
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
            const newAttributes = { ...op.attributes };
            delete newAttributes.highlight;
            return { ...op, attributes: newAttributes };
          }
          return op;
        });

        // Create a new Delta object with the filtered operations
        const filteredDelta = new Quill.imports.delta(filteredOps);

        // alert(jsonString)
        const cfg = {
          multiLineParagraph: true, // Set this to true if you want to preserve multiline paragraphs
          multiLineCodeblock: true  // Set this to true if you want to preserve multiline code blocks
        };

        var converter = new QuillDeltaToHtmlConverter(filteredOps, cfg);

        var html = converter.convert(); 
        // alert(html)
        onDebounce(html);
      };

      if (debounceTime > 0) {
        const debouncedAction = debounce(handleDebounce, debounceTime);

        editor.on("text-change", (delta, oldContents, source) => {
          if (source === "user") {
            debouncedAction();
          }
        });
      }
      }
    }, [editor]);
    useImperativeHandle(ref, () => ({
      scrollToHighlight(commentId) {
        scrollToHighlight(commentId);
      },
      getAllHighlightsWithComments() {
        return getHighlights(editor);
      },
      selectRange(range) {
        editor.setSelection(range.index, range.length, "silent");
        editor.focus();
      },
      getContents() {
        return editor.getContents();
      },
      getSelection() {
        return editor.getSelection();
      },
      getFormat(range) {
        return editor.getFormat(range);
      },
      setFormat(range, format) {
        return editor.format(range, format);
      },
      applyBackgroundFormat(range, format) {
        if (format) {
          const formatKeys = Object.keys(format);
          if (formatKeys.includes("background")) {
            editor.formatText(range.from, range.to - range.from, 'background', format.background);
          } else {
            editor.formatText(range.from, range.to - range.from, 'background', false);
          }
        }
      },
      setLostFocusColor(range) {
        const initialFormat = editor.getFormat(range.from, range.to - range.from);
        editor.formatText(range, 'background', '#C0C8D1');
        return initialFormat
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
        <div ref={editorRef} />
      </div>
    );
  }
);

export default QuillEditor;

function scrollToHighlight(commentId) {
  const highlightSpan = document.querySelector(
    `span.quill-highlight[data-comment-id="${commentId}"]`
  );

  if (highlightSpan) {
    highlightSpan.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  } else {
    console.warn(`No highlight found for comment ID: ${commentId}`);
  }
}
function removeAllHighlights(editor) {
  const quillContainer = editor.container;

  // Get all highlight elements in the Quill container
  const highlightElements = getHighlights(editor);
  console.log("element " + JSON.stringify(highlightElements));
  const transformedData = flatMap(
    Object.entries(highlightElements),
    ([commentId, highlights]) => {
      return highlights.map((highlight) => {
        const { content, range } = highlight;
        editor.formatText(range.from, range.to - range.from, "highlight", false);
        console.log("e " + JSON.stringify(highlight));

        return { commentId, range };
      });
    }
  );
}

function getHighlights(editor) {
  const quillContainer = editor.container;

  let highlightsWithComments = {};

  // Get all highlight elements in the Quill container
  const highlightElements = quillContainer.querySelectorAll(".quill-highlight");

  highlightElements.forEach((element) => {
    const commentId = element.getAttribute("data-comment-id");
    const content = element.textContent;
    const index = editor.getIndex(Quill.find(element));
    const length = content.length;

    // Group highlights with the same comment id together
    if (highlightsWithComments[commentId]) {
      highlightsWithComments[commentId].push({ content, index, length });
    } else {
      highlightsWithComments[commentId] = [{ content, index, length }];
    }
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

