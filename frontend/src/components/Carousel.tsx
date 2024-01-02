 import React, { useState, useEffect, useRef, ReactNode } from "react";

type CarouselProps = {
  items: ReactNode[]; // Accepts an array of ReactNode
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // State to control running/stopping the carousel
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const { width } = carouselRef.current.getBoundingClientRect();
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: "smooth", // Keeps the scroll behavior smooth
      });
    }
  };

  // Update active item at an interval
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % items.length);
      }, 5000); // Change time as required
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length, isRunning]); // Re-run the effect if isRunning changes

  // Scroll to the active item whenever it changes
  useEffect(() => {
    scrollToItem(activeIndex);
  }, [activeIndex]);

  // Toggle function for the carousel running state
  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: "0.5vh" }}>
      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box"
        style={{ paddingBottom: "7vh", width: "100%", overflowX: "scroll" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item flex justify-center items-center ${
              activeIndex === index ? "active" : ""
            }`}
            style={{ minWidth: "100%" }}
          >
            {item}
          </div>
        ))}
      </div>
      {/* Button to toggle running state */}
      <button
        onClick={toggleRunning}
        className="btn glass absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 10 }}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Carousel;