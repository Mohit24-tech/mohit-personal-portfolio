import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science Engineering</h4>
                <h5>Parul University, Vadodara</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p className="career-content">
              • React.js based web development
              <br />
              • Responsive UI & modern design
              <br />• Active in projects & learning
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons & Competitions</h4>
                <h5>Multiple Events</h5>
              </div>
            </div>
            <p className="career-content">
              Participated in multiple hackathons including{" "}
              <b>Vadodara Hackathon 6.0</b>, <b>Bhartiya Antariksh Hackathon</b>,
              and <b>PU Code Hackathon 3.0</b>. Completed{" "}
              <b>Tata Forage (Generative AI)</b> and actively building projects
              to enhance my development skills.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self Learning & Academic Projects</h4>
                <h5>Web Development</h5>
              </div>
            </div>
            <p className="career-content">
              Building <b>responsive React.js applications</b> with strong
              skills in <b>HTML, CSS, and JavaScript</b>. Actively improving through
              <b> projects and hackathons</b>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
