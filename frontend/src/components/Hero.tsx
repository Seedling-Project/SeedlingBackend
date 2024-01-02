interface HeroProps {
  onButtonClick: () => void; // Function to call when the button is clicked
}
const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <div
      className="hero bg-base-200"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "8vh",
        paddingBottom: "4vh",
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/hero_upscaled.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Seedling Education</h1>
          <p className="py-6">
            Breaking Barriers: A Transformative STEM Journey with Enhanced
            Opportunities
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>Discover research opportunities, boost your GPA, and
            receive guidance on the essentials of community college and
            transfer.
          </p>
          <button className="btn btn-wide btn-success" onClick={onButtonClick}>
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;