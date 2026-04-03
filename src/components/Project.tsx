import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.avif";
import image5 from "../assets/images/image5.jpg";
import "../assets/styles/Project.scss";
import ProjectCard from "./ProjectCard";

interface ProjectProps {
  mode: string;
}

function Project({ mode }: ProjectProps) {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <ProjectCard
          imageSrc={image1}
          projectUrl="https://github.com/anne7076/Loan-Analysis"
          title="Loan Data Analysis"
          description="Conducted a comprehensive analysis of the loan dataset from Lending Club using Python, uncovering key features that influence loan approval and the interest rates."
          mode={mode}
        />
        <ProjectCard
          imageSrc={image2}
          projectUrl="https://yujisatojr.itch.io/highspeedchase"
          title="Moroccan Constitution Chatbot"
          description="Created a chatbot based on Retrieval-Augmented Generation (RAG) technology using Python. The chatbot is designed to answer questions and provide insights about the constitution's articles and provisions."
          mode={mode}
        />
        <ProjectCard
          imageSrc={image3}
          projectUrl="https://yujisatojr.itch.io/spacecraft"
          title="Client Aide Chatbot"
          description="Developed a chatbot using Retrieval-Augmented Generation (RAG) technology in Python to assist clients with inquiries about products, services, and company policies, providing accurate and timely responses."
          mode={mode}
        />
        <ProjectCard
          imageSrc={image4}
          projectUrl="https://www.datumlearn.com/"
          title="E-Commerce Platform"
          description="Designed and developed an e-commerce platform using React for the frontend and Spring-boot for the backend. The platform features user authentication, product listings, shopping cart functionality, and secure payment processing."
          mode={mode}
        />
        <ProjectCard
          imageSrc={image5}
          projectUrl="https://www.datumlearn.com/"
          title="Pharmacy Management System"
          description="Developed a comprehensive pharmacy management system using Java. The system includes features for inventory management, prescription handling, and patient records. It streamlines pharmacy operations and enhances efficiency in managing medications and patient information."
          mode={mode}
        />
      </div>
    </div>
  );
}

export default Project;
