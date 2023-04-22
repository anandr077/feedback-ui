import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./styles.css";

const QuillEditor = React.forwardRef(
  ({ comments, value, options, debounceTime, onDebounce }, ref) => {
    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);
    useEffect(() => {
      if (editorRef.current) {
        const editor = new Quill(editorRef.current, options);
        editor.root.style.fontFamily = '"IBM Plex Sans", sans-serif';
        editor.root.style.fontSize = "16px";
        editor.root.innerHTML = value;

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
          onDebounce(editor.root.innerHTML);
        };
        if (debounceTime > 0) {
          const debouncedAction = debounce(handleDebounce, debounceTime);

          editor.on("text-change", () => {
            debouncedAction();
          });
        }

        comments.forEach((comment) => {
          if (comment.range) {
            const range = {
              index: comment.range.from,
              length: comment.range.to - comment.range.from,
            };
            

            const highlight = document.createElement('span');
            highlight.classList.add('quill-highlight');

            // Surround the selected text with the highlight element
            editor.formatText(range.index, range.length, {
              'custom-highlight': true.valueOf,
              'background': "#fff9c4",
            });

            // Get all the highlight elements and remove the class name
            const highlights = editor.root.querySelectorAll('.quill-highlight');
            for (let i = 0; i < highlights.length; i++) {
              highlights[i].classList.remove('quill-highlight');
            }
          }
        });
        setEditor(editor);
      }
    }, [comments, value, options, debounceTime, onDebounce]);

    useImperativeHandle(ref, () => ({
      selectRange(range) {
        editor.setSelection(range.index, range.length, "silent");
        editor.focus();
      },
      getContents() {
        return editor.root.innerHTML;
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
