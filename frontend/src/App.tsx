import { useRef, useState, useEffect } from "react";
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
import axios from "axios";

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

interface DocumentData {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  body: string;
}

function App() {
  //new axios functionality, not completely set up but this is the form
  const [documents, setDocuments] = useState<DocumentData[]>([]); // For storing fetched documents
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
  console.log('Fetching data...');
  const fetchData = async () => {
    try {
      const response = await api.get('/document/'); 
      console.log(response.data);
      setDocuments(response.data);
      // add the documents to the end of the items array
      const itemsToAdd = response.data.map((doc: DocumentData, index: number) => (
        <Document
          key={index}
          title={doc.title}
          subtitle={doc.subtitle}
          author={doc.author}
          date={doc.date}
          body={doc.body}
        />
      ));
      setItems((prevItems) => [...prevItems, ...itemsToAdd]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }
  };

  fetchData();
}, []);

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
  const [items, setItems] = useState([
    <WideDocument
      key="1"
      title="Things that you should do immediately after you come to MJC"
      author="Kyle Zheng"
      date="Jan 8, 2024"
      body="
      - Consider now whether you want to transfer to CSU, UC, or private in addition to your major because it affects class choices.

      - Check out assist.org and schedule a meeting with a counselor regarding your educational plan for your transfer.
            There are guides in the blog section on how to navigate assist.org and schedule a counselor meeting.

      - There are guides for the activities list and essays for UCs and Privates in the Blog section.

      - Do you want to do research? Yes, first years are allowed to do it through REUs and Honors.
            This is discussed in greater detail in Research Opportunities above.

      - Do you want to participate in clubs or start a new organization at MJC? You can, it looks great on resumes.
            This is discussed in Miscellaneous Opportunities above.

      - Do you need additional help for calculus, physics, or some other difficult class? Check out the Curriculum section.
      "
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
    />
    // Add more items as you wish, even other components!
  ]);

  // when the documents are set, a
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
          subtitle="This is a subtitle as well"
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
          title="Document Title number 2"
          subtitle="This is a subtitle as well"
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
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    }
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

<div className="documents-container">
          {loading ? (
        <p>Loading documents...</p>
      ) : (
        documents.map((doc, index) => (
          <Document
            key={index}
            title={doc.title}
            subtitle={doc.subtitle}
            author={doc.author}
            date={doc.date}
            body={doc.body}
          />
        ))
      )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;