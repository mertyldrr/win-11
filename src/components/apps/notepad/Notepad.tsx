import { useState } from "react";

export const Notepad = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };
  return (
    <div className="w-full h-full">
      <textarea
        autoFocus
        className="w-full h-full outline-none text-xs p-1 resize-none"
        value={content}
        onChange={(e) => handleContentChange(e.target.value)}
      />
    </div>
  );
};
