import { useRef } from "react";
import "daisyui/dist/full.css";
import "./App.css";
import "./index.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StickyNote from "./components/StickyNotes";
import Document from "./components/Document";
import WideDocument from "./components/WideDocument";
import Timeline from "./components/Timeline";
import TimelineItem from "./components/TimelineItem";
import Carousel from "./components/Carousel";

function App() {
  // Initialize an array of image URLs
  const timelineRef = useRef<HTMLDivElement>(null); // Create a ref for the Timeline component

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      const top = timelineRef.current.offsetTop; // Get the top position of the timeline component
      const offset = 100; // Adjust this value to whatever works for your layout
      window.scrollTo({
        top: top - offset, // Subtract the offset from the top position
        behavior: "smooth",
      });
    }
  };

  const items = [
    <WideDocument
      key="1"
      title="Document Title"
      author="John Doe"
      date="Jan 1, 2023"
      body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
    />,
    <WideDocument
      key="2"
      title="SECOND Document Title"
      author="John Doe"
      date="Jan 1, 2023"
      body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
    />,
    <Document
      key="3"
      title="THIRD Document Title"
      subtitle="This is a subtitle"
      author="John Doe"
      date="Jan 1, 2023"
      body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
    />,
    // Add more items as you wish, even other components!
  ];
  const timelineDetails = [
    {
      icon: "/team_image.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    // ... Add more items as needed
    {
      icon: "/additional-logo.png",
      content: <div>Your second content component or text here</div>,
    },
    {
      icon: "/additional-logo.png",
      content: <div>Your second content component or text here</div>,
    },
    {
      icon: "/team_image.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: "/team_image.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <Hero onButtonClick={scrollToTimeline} />
      <Carousel items={items} />
      <div className="p-5"></div>
      <Timeline ref={timelineRef}>
        {timelineDetails.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            content={item.content}
            showConnectingLine={index < timelineDetails.length - 1} // Show connecting line except for the last item
          />
        ))}
      </Timeline>

      {/* ... other components or content */}

      <div className="sticky-notes-container">
        {/* Sticky Notes here */}
        <StickyNote
          header="Note 1"
          body="This is the first note"
          color="bg-red-300"
          angle={-2}
        />
        <StickyNote
          header="Note 2"
          body="This is the second note"
          color="bg-blue-300"
          angle={1}
        />
        {/* ... more notes */}
      </div>
      <Footer />
    </>
  );
}
export default App;
