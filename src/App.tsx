import "./App.css";
import { EditorMenuBar } from "./components/EditorMenuBar";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Editor } from "./components/Editor";

function App() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

  return (
    <div className="App">
      <EditorMenuBar editor={editor} />
      <Editor editor={editor} />
    </div>
  );
}

export default App;
