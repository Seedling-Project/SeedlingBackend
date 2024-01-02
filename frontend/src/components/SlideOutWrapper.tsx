import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

interface SlideOutWrapperProps {
  children: React.ReactNode;
}

const SlideOutWrapper: React.FC<SlideOutWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const slideOutProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(50%,0,0)" : "translate3d(-5%,0,0)",
    config: { duration: 700 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Adjust the ratio to control when the animation should trigger
          setIsVisible(entry.isIntersecting);

          // Optional: Reset animation when element is not visible
          if (!entry.isIntersecting) {
            // Reset the animation so it can trigger again when visible
            setIsVisible(false);
          }
        });
      },
      {
        // Adjust rootMargin to control the vertical center alignment, e.g., '-50% 0px -50% 0px'
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.5, 1], // Multiple thresholds for entering and leaving the center
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <animated.div ref={ref} style={slideOutProps} className="content-slide">
      {children}
    </animated.div>
  );
};

export default SlideOutWrapper;