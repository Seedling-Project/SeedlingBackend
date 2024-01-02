//can be used as a base component for the component for the blogs
//guides etc.
//make it seem like a piece of parchment paper

import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
interface DocumentProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  body: string;
}

const calc = (x: number, y: number, rect: DOMRect) => {
  // Normalize the cursor coordinates to be from -0.5 to 0.5
  const xRel = (x - (rect.left + rect.width / 2)) / rect.width; // -0.5 when cursor at left edge, 0.5 at right edge
  const yRel = (y - (rect.top + rect.height / 2)) / rect.height; // -0.5 when cursor at top edge, 0.5 at bottom edge
  const tiltMax = 15; // The maximum tilt angle

  // Inverting the signs for tiltX and tiltY to reverse the tilt direction
  const tiltY = -xRel * tiltMax; // Tilt on Y-axis changes with horizontal movement
  const tiltX = yRel * tiltMax; // Tilt on X-axis changes with vertical movement

  return {
    xys: [tiltX, tiltY, 1.07] as [number, number, number], // Adjust scale if necessary
  };
};

const Document: React.FC<DocumentProps> = ({
  title,
  subtitle,
  author,
  date,
  body,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useSpring(() => ({ value: 0 }));
  const [spotlightStyle, setSpotlightStyle] = useSpring(() => ({
    opacity: 0,
    background:
      "radial-gradient(circle at 0px 0px, rgba(116, 128, 255, 0.25), transparent 40%)",
    config: { duration: 1800 },
  }));
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 360, friction: 40 },
  }));
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setSpotlightStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${e.clientX - rect.left}px ${
          e.clientY - rect.top
        }px, rgba(116, 128, 255, 0.65), transparent 60%)`,
      });

      set(calc(e.clientX, e.clientY, rect));
    }
  };
  return (
    <animated.div
      ref={ref}
      className="bg-white text-gray-800 max-w-xl mx-auto my-8 p-8 rounded-lg shadow-lg"
      style={{
        transform: props.xys.interpolate(
          (x, y, s) =>
            `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
        zIndex: 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity({ value: 1 })}
      onMouseLeave={() => {
        set({ xys: [0, 0, 1] });
        setSpotlightStyle({ opacity: 0 });
      }}
    >
      <animated.div
        className="absolute top-0 left-0 right-0 bottom-0 rounded-lg pointer-events-none"
        style={spotlightStyle}
      />
      <div className="relative border-2 border-gray-800 p-6 rounded">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <h2 className="text-xl font-semibold">{subtitle}</h2>
          <p className="text-md mb-4">
            {author} - {date}
          </p>
        </div>
        <div className="text-left">
          <p>{body}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Document;