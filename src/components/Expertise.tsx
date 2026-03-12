import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBrain, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const dataScienceSkills = [
    "Python",
    "SQL",
    "Scikit-Learn",
    "Azure Databricks",
    "ETL Operations",
    "Azure Data Factory",
    "Power BI",
    "Predictive Analytics",
    "Pandas",
    "NumPy",
];

const machineLearningSkills = [
    "Clustering (K-Means, DBSCAN)",
    "Sentiment Analysis",
    "Topic Modeling (LDA)",
    "Image Segmentation",
    "Mask R-CNN",
    "CycleGAN",
    "Hyperparameter Tuning",
    "Deep Reinforcement Learning",
    "Q-Learning"
];

const generativeAISkills = [
    "Fine-tuning LLMs",
    "LangChain",
    "Hugging Face",
    "FAISS",
    "RAG (Retrieval-Augmented Generation)",
    "Sentence Transformers",
    "Groq",
    "Streamlit"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {/* Data Science & Analytics */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faChartLine} size="3x" />
                        <h3>Data Science & Analytics</h3>
                        <p>
                        I transform raw data into actionable insights through data pipelines, advanced analytics dashboards, 
                        and ETL workflows, enabling organizations to uncover patterns, automate processes, and make confident 
                        data-driven decisions. From building executive dashboards to extracting insights from complex datasets, 
                        I excel at turning data into strategic value.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Key skills:</span>
                            <br /> {/* This adds a line break */}
                            {dataScienceSkills.map((skill, index) => (
                                <Chip key={index} className="chip" label={skill} />
                            ))}
                        </div>
                    </div>

                    {/*Machine Learning & Computer Vision*/}
                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>Machine Learning & Computer Vision</h3>
                        <p>
                            I specialize in developing and deploying machine learning models to solve real-world problems, 
                            including clustering, sentiment analysis, and object detection. In computer vision, 
                            I’ve delivered solutions like advanced image segmentation and CycleGAN-based domain adaptation. 
                            By optimizing models and tuning hyperparameters, I ensure accuracy and scalability in every implementation.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Key skills:</span>
                            <br /> {/* This adds a line break */}
                            {machineLearningSkills.map((skill, index) => (
                                <Chip key={index} className="chip" label={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Generative AI & NLP Research */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCogs} size="3x" />
                        <h3>Generative AI & NLP Research</h3>
                        <p>
                            I leverage state-of-the-art AI technologies to fine-tune LLMs for enterprise challenges, design 
                            Retrieval-Augmented Generation (RAG) systems for intelligent data retrieval, and implement NLP solutions 
                            for extracting insights from unstructured text. Expertise with tools like LangChain and Hugging 
                            Face enables me to build scalable, production-ready systems that drive innovation and efficiency.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Key skills:</span>
                            <br /> {/* This adds a line break */}
                            {generativeAISkills.map((skill, index) => (
                                <Chip key={index} className="chip" label={skill}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
