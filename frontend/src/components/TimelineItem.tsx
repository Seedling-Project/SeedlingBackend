import React from "react";
import SlideOutWrapper from "./SlideOutWrapper";

interface TimelineItemProps {
  icon: string | React.ReactNode; // URL or React component
  content: React.ReactNode; // Content of the timeline item
  showConnectingLine?: boolean; // Flag to show connecting line
  colorStart?: string; // Start color for gradient
  colorEnd?: string; // End color for gradient
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  content,
  showConnectingLine = false,
  colorStart = "transparent", // Default colors for gradient
  colorEnd = "black",
}) => {
  const isIconUrl = typeof icon === "string";

  // Styles for the connecting line
  const lineStyle: React.CSSProperties = {
    background: `linear-gradient(${colorStart}, ${colorEnd}, ${colorStart})`,
    opacity: 0.75, // Adjust as needed
    width: "5px", // Thin line width
    position: "absolute",
    left: "50%", // Center under the icon
    top: "100%", // Start right below the icon
    bottom: "-1000%",
    transform: "translateX(-50%)", // Center it horizontally
  };

  return (
    <div className="flex mb-8 items-start">
      {/* Icon and connecting line container */}
      <div className="relative flex flex-col items-center mr-4">
        {" "}
        {/* This needs to be relative */}
        {/* Icon */}
        <div
          className={
            isIconUrl
              ? "rounded-full p-2 bg-primary text-white"
              : "icon-component"
          }
        >
          {isIconUrl ? (
            <img src={icon as string} alt="Timeline Icon" className="h-6 w-6" />
          ) : (
            icon
          )}
        </div>
        {/* Connecting Line */}
        {showConnectingLine && <div style={lineStyle}></div>}
      </div>
      {/* Content */}
      <SlideOutWrapper>
        <div className="flex-grow">{content}</div>
      </SlideOutWrapper>
    </div>
  );
};

export default TimelineItem;