import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./styles.css";
import HighlightBlot from "./HighlightBlot";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const QuillEditor = React.forwardRef(
  ({ comments, value, options, debounceTime, onDebounce }, ref) => {
    Quill.register(HighlightBlot);

    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);
    useEffect(() => {
      if (editorRef.current) {
        const editor = new Quill(editorRef.current, options);
        editor.root.style.fontFamily = '"IBM Plex Sans", sans-serif';
        editor.root.style.fontSize = "16px";

        editor.setContents(value ? JSON.parse(value) : []);


        const debounce = (func, wait) => {
          let timeout;
          
          return function (...args) {
            console.log(args)
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

  // Convert the filtered Delta object to JSON
  const jsonString = JSON.stringify(filteredDelta);

  onDebounce(jsonString);
        };

        const updateComments = (delta, oldContents) => {
          // onDebounce(editor.root.innerHTML);
        };

        if (debounceTime > 0) {
          const debouncedAction = debounce(handleDebounce, debounceTime);

          editor.on("text-change", (delta, oldContents, source) => {
            if (source === "user") {
              debouncedAction();
            }
          });
        }

        comments.forEach((comment) => {
          if (comment.range) {
            const range = {
              index: comment.range.from,
              length: comment.range.to - comment.range.from,
            };

            editor.formatText(range.index, range.length, {
              highlight: comment.id,
            });
          }
        });
        setEditor(editor);
        return () => {
          editor.off("text-change");
          editor.deleteText(0, editor.getLength()); // Clear the editor's content
          if (editorRef.current) {
            editorRef.current.innerHTML = ""; // Remove the editor's container content
          }
        };
      }
    }, [ options, debounceTime, onDebounce]);

    useImperativeHandle(ref, () => ({
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
    }));

    return (
      <div className="quill-editor-container">
        <div ref={editorRef} />
      </div>
    );
  }
);

export default QuillEditor;
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

  return Object.entries(highlightsWithComments).reduce((result, [commentId, highlights]) => {
    result[commentId] = highlights.map(({ content, index, length }) => {
      return {
        // content: content,
        range: {
          from: index,
          to: index + length,
        },
      };
    });
    return result;
  }, {});
}

