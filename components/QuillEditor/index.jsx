import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./styles.css";

const QuillEditor = React.forwardRef(
  ({ comments, value, options }, ref) => {
    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);
    useEffect(() => {
      if (editorRef.current) {
        const editor = new Quill(editorRef.current, options);
        editor.root.style.fontFamily = '"IBM Plex Sans", sans-serif';
        editor.root.style.fontSize = "16px";
        editor.root.innerHTML = value;

        

        
        comments.forEach((comment) => {
          if (comment.range) {
            const range = {
              index: comment.range.from,
              length: comment.range.to - comment.range.from,
            };
            console.log(editor);
            console.log("range " + JSON.stringify(range));
            const result = editor.formatText(range.index, range.length, {
              background: "#fff9c4",
            });
            console.log("result " + JSON.stringify(result));
          }
        });
        setEditor(editor);
      }
    }, [value, options]);

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
    }));

    return (
      <div className="quill-editor-container">
        <div ref={editorRef} />
      </div>
    );
  }
);

export default QuillEditor;
