import React from "react";
import SGID from '../assets/images/SGID.png';
import Cifar100 from '../assets/images/Cifar100.png';
import sequence_models from '../assets/images/sequence_models.png';
import machine_translation from '../assets/images/machine_translation.png';
import crewai_newsletter from '../assets/images/crewai_newsletter.png';
import cyclegan from '../assets/images/cyclegan.png';
import yolonas from '../assets/images/yolonas.png';
import chat_with_pdfs from '../assets/images/chat_with_pdfs.png';
import stock_market_analysis_peft from '../assets/images/stock_market_analysis_peft.png';
import q_learning from '../assets/images/q_learning.png';
import mock02 from '../assets/images/mock02.png';
import llm_scenario_generation from '../assets/images/LLM driven scenario generation.png';
import llm_rl_architecture from '../assets/images/llm and rl architecture.png';

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {/* LLM-powered air traffic scenario generation */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/Flight-Simulation.git" target="_blank" rel="noreferrer" className="project-image">
                        <img src={llm_scenario_generation} className="zoom" alt="LLM-driven scenario generation" width="100%" />
                    </a>
                    <h2>LLM-powered Air Traffic Scenario Generation</h2>
                    <p>
                        Built a chat-based framework that uses LLMs plus Graph RAG on Neo4j to ingest ATC scenario PDFs and generate new,
                        diverse scenarios. The system injects controlled conflict cases, stores them back in the graph for validation and reuse,
                        and supports structured JSON and XML exports for simulation workflows.
                    </p>
                </div>

                {/* LLM-augmented RL for aviation decision support */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/LLM-Enhanced-DRL-.git" target="_blank" rel="noreferrer" className="project-image">
                        <img src={llm_rl_architecture} className="zoom" alt="LLM and RL architecture" width="100%" />
                    </a>
                    <h2>LLM-augmented RL for Aviation Decision Support</h2>
                    <p>
                        Developed an LLM-guided PPO framework for aircraft conflict resolution and aviation decision support. Studied how LLM
                        guidance affects policy stability and reward convergence under complex operational dynamics.
                    </p>
                </div>

                {/* SGID - Semantic Guided Generative Image Augmentation */}
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer" className="project-image">
                        <img src={SGID} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Semantic Guided Image Augmentation (SGID)</h2>
                    <p>
                        Implemented a novel image augmentation method for diffusion models leveraging Stable Diffusion, BLIP, and CLIP. 
                        Developed an algorithm to maintain semantic consistency by generating captions and prompts, ensuring diversity 
                        and improving image classification performance. Applied Gaussian noise for controlled augmentation.
                    </p>
                </div>

                {/* Image Classification on CIFAR-100 Dataset */}
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer" className="project-image">
                        <img src={Cifar100} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Image Classification on CIFAR-100</h2>
                    <p>
                        Enhanced prediction accuracy on the CIFAR-100 dataset by applying advanced regularization techniques, including 
                        cosine annealing and weight decay. Employed data augmentation strategies to prevent overfitting and improve 
                        generalization in deep learning models.
                    </p>
                </div>

                {/* Sentiment Analysis Using Sequence Models */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/Generative-AI-and-NLP-Projects/blob/main/Sentiment%20Analysis%20with%20Sequence%20Models/readme.md" target="_blank" rel="noreferrer" className="project-image">
                        <img src={sequence_models} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Sentiment Analysis with Sequence Models</h2>
                    <p>
                        Conducted an in-depth study of neural network architectures for sentiment analysis, including feedforward 
                        networks, CNNs, LSTMs, and BiLSTMs. Evaluated performance using F1-score, precision, and recall, and analyzed 
                        the impact of pre-trained embeddings and various optimization strategies.
                    </p>
                </div>

                {/* Seq-to-Seq Models for Machine Translation */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/Generative-AI-and-NLP-Projects/blob/main/Seq-to-Seq%20Models%20for%20Machine%20Translation/readme.md" target="_blank" rel="noreferrer" className="project-image">
                        <img src={machine_translation} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Seq-to-Seq Models for Machine Translation</h2>
                    <p>
                        Implemented and compared Seq2Seq architectures, including LSTM, BiLSTM, and Transformer, for machine 
                        translation tasks. Fine-tuned hyperparameters and evaluated models using BLEU scores to optimize 
                        translation quality across languages.
                    </p>
                </div>

                {/* Newsletter Generator App Using CrewAI */}
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer" className="project-image">
                        <img src={crewai_newsletter} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Newsletter Generator with CrewAI</h2>
                    <p>
                        Developed an automated newsletter generation system using CrewAI. Designed an intuitive GUI for users to 
                        input topics and personal messages. Implemented autonomous AI agents to summarize and format content, delivering 
                        newsletters as downloadable HTML files.
                    </p>
                </div>

                {/* Image-Image Translation Using CycleGANs */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/Computer-Vision-Projects/blob/main/Image-Image-Translation%20Using%20CycleGANs/README.md" target="_blank" rel="noreferrer" className="project-image">
                        <img src={cyclegan} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Image-to-Image Translation with CycleGANs</h2>
                    <p>
                        Implemented CycleGANs for unpaired image-to-image translation, ensuring realistic domain adaptation 
                        using adversarial training and cycle consistency loss. Demonstrated successful translation between 
                        distinct image domains without paired data.
                    </p>
                </div>

                {/* Object Detection Using YOLO-NAS */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/Computer-Vision-Projects/blob/main/Object%20Detection%20Using%20YOLO-NAS/README.md" target="_blank" rel="noreferrer" className="project-image">
                        <img src={yolonas} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Object Detection with YOLO-NAS</h2>
                    <p>
                        Built a real-time object detection interface using YOLO-NAS. Developed a Streamlit-based application 
                        allowing users to upload images and videos and view detection results with high accuracy and efficiency.
                    </p>
                </div>

                {/* Chat with PDFs - LangChain and RAG */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/Generative-AI-and-NLP-Projects/blob/main/Chat%20with%20PDFs%20-%20Using%20LangChain%20and%20RAG/readme.md" target="_blank" rel="noreferrer" className="project-image">
                        <img src={chat_with_pdfs} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Chat with PDFs Using LangChain</h2>
                    <p>
                        Developed an application enabling users to query and retrieve content from PDFs using LangChain and RAG. 
                        Integrated LLMs for accurate and contextualized responses, enhancing document comprehension.
                    </p>
                </div>

                {/* Stock Market Analysis with PEFT and News Summarization */}
                <div className="project">
                    <a href="https://github.com/Dhruv-NNT/Generative-AI-and-NLP-Projects/blob/main/Stock%20Market%20Assistant/README.md" target="_blank" rel="noreferrer" className="project-image">
                        <img src={stock_market_analysis_peft} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Stock Market Analysis with PEFT</h2>
                    <p>
                        Automated financial analysis by integrating Parameter-Efficient Fine-Tuning (PEFT) and QLoRA for LLM optimization. 
                        Incorporated sentiment analysis and summarization to provide actionable insights for stock market trends.
                    </p>
                </div>

                {/* Q-Learning for Cliff Box Pushing Task */}
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer" className="project-image">
                        <img src={q_learning} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Q-Learning for Cliff Box Pushing Task</h2>
                    <p>
                        Implemented Q-learning to solve a customized grid-world problem where an agent navigates, pushes a box, 
                        and avoids cliffs to reach a goal. Designed and compared exploration strategies including Epsilon Decay, UCB, 
                        and Standard Q-learning, achieving a 100% success rate.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
