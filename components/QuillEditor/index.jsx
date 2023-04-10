import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

const QuillEditor = React.forwardRef(
  ({ comments, value, onX, options }, ref) => {
    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);
    useEffect(() => {
      if (editorRef.current) {
        const editor = new Quill(editorRef.current, options);
        editor.root.innerHTML = value;

        editor.on("selection-change", (range1, range2) => {
          console.log("range  selected 1" + JSON.stringify(range1));
          console.log("range  selected 2" + JSON.stringify(range2));
          if (range1 && range1.length > 0) {
            onX(range1);
          }
        });

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
    }, [value, options, onX]);

    useImperativeHandle(ref, () => ({
      selectRange(range) {
        console.log("silecntly");
        editor.setSelection(range.index, range.length, "silent");
        editor.focus();
      },
    }));

    return <div ref={editorRef} />;
  }
);

export default QuillEditor;
