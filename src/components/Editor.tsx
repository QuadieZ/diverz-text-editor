import { Heading } from "@chakra-ui/react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorMenuBar } from "./EditorMenuBar";

export const Editor = ({ editor }) => {
  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};
