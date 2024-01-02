// StickyNote.jsx
import React from "react";

interface StickyNoteProps {
  header: string;
  body: string;
  color?: string;
  angle?: number;
}
const StickyNote: React.FC<StickyNoteProps> = ({
  header,
  body,
  color = "bg-yellow-300", // Default color
  angle = 0, // Default angle
}) => {
  const rotateStyle = {
    transform: `rotate(${angle}deg)`,
  };

  return (
    <div
      className={`p-4 w-64 h-64 ${color} shadow-lg rounded-md`}
      style={rotateStyle}
    >
      <h3 className="text-lg font-bold border-b-2 mb-2 text-black">
        {header}
      </h3>
      <p className="text-black">{body}</p>
    </div>
  );
};

export default StickyNote;