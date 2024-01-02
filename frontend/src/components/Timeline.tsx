// Timeline.tsx
import React, { forwardRef } from "react";

interface TimelineProps {
  children: React.ReactNode[];
}

// Modify the component to accept a ref argument
const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ children }, ref) => {
    return (
      // Attach the ref to the div that should be scrolled into view
      <div ref={ref} className="timeline-container">
        {children.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </div>
    );
  }
);

export default Timeline;