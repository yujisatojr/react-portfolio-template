import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "../assets/images/temp.jpeg";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/anne7076"
              target="_blank"
              rel="noreferrer">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/hamet-anne-036924274/"
              target="_blank"
              rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>ANNE Mahamadou</h1>
          <p>AI & Software Engineer</p>
          <div className="about-me-description">
            <p>
              Welcome to my personal portfolio! I am a passionate AI & Software
              Engineer specializing in building robust backend systems and
              innovative GenAI-enabled solutions. My experience ranges from
              developing e-commerce platforms to creating advanced RAG-based
              chatbots.
            </p>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/anne7076"
              target="_blank"
              rel="noreferrer">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/hamet-anne-036924274/"
              target="_blank"
              rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
