import React from "react";

interface WideDocumentProps {
  title: string;
  subtitle?: string; // Subtitle is now optional
  author: string;
  date: string;
  body: string;
  // Background image is now optional
}

const WideDocument: React.FC<WideDocumentProps> = ({
  title,
  subtitle,
  author,
  date,
  body,
  // Added this prop to accept background image
}) => {
  return (
    <div
      className=" text-gray-800 w-full mx-auto my-8 p-8 rounded-lg shadow-lg"
      style={{
        maxWidth: "95%",

        backgroundSize: "cover", // Ensure it covers the entire div
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div
        className="border-2 border-gray-800 p-6 rounded"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        {" "}
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <h2 className="text-lg mb-2">{subtitle}</h2> {/* Added subtitle */}
          <p className="text-md mb-4">
            {author} - {date}
          </p>
        </div>
        <div className="text-left" style={{ whiteSpace: 'pre-wrap' }}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default WideDocument;