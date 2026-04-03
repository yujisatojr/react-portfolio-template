import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg"
            alt="Avatar"
          />
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
