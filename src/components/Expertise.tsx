import { faDocker, faJava, faPython } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";
import ExpertiseCard from "./ExpertiseCard";

const labelsFirst = [
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Python",
  "Java",
  "Spring Boot",
  "SQL",
  "Oracle",
  "MongoDB",
];

const labelsSecond = ["Git", "GitHub Actions", "Docker", "AWS", "Linux"];

const labelsThird = ["OpenAI", "LangChain", "Hugging Face", "Streamlit"];

interface ExpertiseProps {
  mode: string;
}

function Expertise({ mode }: ExpertiseProps) {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <ExpertiseCard
            icon={faJava}
            title="Backend Development"
            description="I have built robust and scalable backend systems using Java and Spring Boot, such as real-world e-commerce applications, ensuring efficient data management and seamless integration with frontend applications."
            labels={labelsFirst}
            mode={mode}
          />
          <ExpertiseCard
            icon={faDocker}
            title="DevOps & Automation"
            description="Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live."
            labels={labelsSecond}
            mode={mode}
          />
          <ExpertiseCard
            icon={faPython}
            title="GenAI & LLM"
            description="I have professional experience building enterprise grade GenAI-enabled solutions to enhance user experience and automate business processes. I have a strong proficiency in LLMs, vector databases, and GenAI frameworks."
            labels={labelsThird}
            mode={mode}
          />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
