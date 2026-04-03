import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/anne7076" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/hamet-anne-036924274/"
          target="_blank"
          rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a href="https://github.com/anne7076" target="_blank" rel="noreferrer">
          Anne Mahamadou
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
