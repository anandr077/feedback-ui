import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import { filter, flatMap, includes, map, uniq } from "lodash";

import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./styles.css";
import HighlightedCommentBlot from "./HighlightedCommentBlot";
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { Map } from 'immutable';
import { groupBy, mapValues, filter } from 'lodash';
const QuillEditor = React.forwardRef(
  ({ comments, value, options, debounceTime, onDebounce }, ref) => {
    Quill.register(HighlightedCommentBlot);

    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);
    
    useEffect(() => {
      if (editorRef.current && !editor) {
        const quillInstance = new Quill(editorRef.current, options);
        quillInstance.root.style.fontFamily = '"IBM Plex Sans", sans-serif';
        quillInstance.root.style.fontSize = "16px";
        const delta = quillInstance.clipboard.convert(value);
        console.log("delta init", delta);
        quillInstance.setContents(delta);

        setEditor(quillInstance);
      }
    }, [editor, editorRef, options, value]);

    useEffect(() => {
      if (editor) {
        console.log("value", value)
        // 
        removeAllHighlights(editor)

        comments.forEach((comment) => {
          console.log("comment.id", comment.id)
          if (comment.range) {
            setCommentColor(editor, comment.id, comment.range, createBackground())
          }

          function createBackground() {
            if (comment.color !== undefined && comment.color !== null) {
              console.log("")
              return comment.color;
            }
            console.log("No color " + comment.id);
            return '#fff9c4';
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
        const filteredOps = removeHighlightBlots(delta)
        
        // Create a new Delta object with the filtered operations
        const filteredDelta = new Quill.imports.delta(filteredOps);
        console.log("filteredDelta", filteredDelta)
        console.log("delta", delta)
        console.log("diff", delta.diff(filteredDelta))
        // alert(jsonString)
        const cfg = {
          multiLineParagraph: true, // Set this to true if you want to preserve multiline paragraphs
          multiLineCodeblock: true  // Set this to true if you want to preserve multiline code blocks
        };

        var converter = new QuillDeltaToHtmlConverter(filteredOps, cfg);
        var html = converter.convert(); 
        console.log(html)
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
          console.log("applyBackgroundFormat")
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
      setCommentColor(commentId, range, color) {
        setCommentColor(editor, commentId, range, color)
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
function setCommentColor(editor, commentId, range, color) {
  console.log("setCommentColor range", range)
  console.log("setCommentColor color", color)
  editor.formatText(range.to - range.from, {
    highlight: color,
    commentId: commentId
  });}
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

function removeMetadataFromDelta(delta) {
  delta.ops.forEach(op => {
    if (op.attributes && op.attributes.commentId) {
      delete op.attributes.commentId;
    }
  });

  return delta;
}

function removeAllHighlights(editor) {

  const blotNodes = document.querySelectorAll('.ql-highlight');
  blotNodes.forEach((node) => {
    node.style.display = 'none';
  });
}

function getHighlights(editor) {
  const highlightNodes = editor.container.querySelectorAll('.ql-highlight');
  const highlights = [];

  highlightNodes.forEach((node) => {
    const commentId = node.getAttribute('data-comment-id');
    const content = node.textContent;
    const range = editor.getIndex(node);

    highlights.push({
      content,
      range: {
        index: range,
        length: content.length
      },
      commentId
    });
  });

  return highlights;
}


function removeHighlightBlots(delta) {
  const filteredOps = delta.ops.filter(op => {
    if (op.attributes && op.attributes.highlight) {
      return false;
    }
    return true;
  });

  return filteredOps;
}


