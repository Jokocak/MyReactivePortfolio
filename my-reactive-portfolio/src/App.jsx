// Imports
import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { emailConfig } from "./config/email-config";
import { FaDatabase } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import emailjs from '@emailjs/browser'

// Local Imports
import './App.css'
import profilePic from './assets/jamkocak88@gmail.com-0.jpg'
// import profilePic from './assets/PortfolioPhoto.JPG'
import resumeFile from './assets/James_Kocak_Resume.pdf'
import databricksLogo from './assets/databricks-logo-asset.png'
import microsoftLogo from './assets/microsoft-logo-asset.png'
import ncsuLogo from './assets/ncsu-logo-asset.png'
import MachineLearningPipeline from "./projects/MachineLearningPipeline";
import DataProductCatalog from "./projects/DataProductCatalog";
import SyntheaDataGeneration from "./projects/SyntheaDataGeneration";
import CoffeeMaker from "./projects/CoffeeMaker";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);


  const handleMoreClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        templateParams,
        emailConfig.PUBLIC_KEY
      );

      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Thank you! Your message has been sent.');
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

      // Add this line to see real-time updates
      console.log('Form Data:', {
        field: e.target.name,
        value: e.target.value,
        fullState: {...formData, [e.target.name]: e.target.value}
      });
  };

  // project Components
  const projectComponents = {
    1: <MachineLearningPipeline />,
    2: <DataProductCatalog />,
    3: <SyntheaDataGeneration />,
    4: <CoffeeMaker />,
  };

  // Data Science Projects
  const dataScienceProjects = [
    {
      id: 1,
      title: "Machine Learning Pipeline Exploration",
      description: "Developed a robust ML pipeline detailing dataset features and biases, defining a hypothetical use-case, applying preprocessing and feature selection, comparing logistic regression and decision trees, and integrating fairness and interpretability measures.",
      icon: <LuBrainCircuit />,
    },
    {
      id: 2,
      title: "Data Product Catalog",
      description: "Engineered a scalable PostgreSQL ingestion pipeline for millions of records, developed a sub-minute identification algorithm for optimal data product blueprint matches, and implemented full CRUD functionality to manage 10k+ data assets.",
      icon: <FaDatabase />,
    },
    // {
    //   id: 3,
    //   title: "Synthea Data Generation",
    //   description: "Leveraged Synthea to generate realistic healthcare datasets (10K+ patient records) for robust ML testing and disease detection, developed automated JSON data pipelines for flexible analytics ingestion, and boosted data quality testing coverage from 50% to 95% with integrated validation scripts.",
    //   icon: <FaGears />,
    // }
  ];

  // Software Engineering Projects
  const softwareProjects = [
    {
      id: 4,
      title: "CoffeeMaker",
      description: "Collaborated in a team to develop CoffeeMaker, a fullstack web application for coffee order management. Implemented robust CRUD operations and REST API endpoints using Spring Boot on the backend, and built a dynamic, user-friendly frontend. The project emphasized agile teamwork and best practices in software engineering.",
      icon: <FaCode />,
    }
  ];


  return (
    <>
      <div className="layout">
        {/* Navigation Sidebar */}
        <nav className="sidebar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#thank-you">Contact Me</a></li>
          </ul>
        </nav>

        <div className="portfolio-container">
          <section id="home" className="section">
            <div className="profile-container">
              <div className="profile-image">
                <img src={profilePic} alt="Profile Picture" />
              </div>
              
              <div className="profile-links">
                <h2>James Kocak</h2>
                <hr />
                <h2>Data Scientist | Data Engineer</h2>

                <div className="social-links">
                  <a href="https://github.com/Jokocak" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/james-kocak" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="#contact-me">
                    <MdEmail />
                  </a>
                </div>

                <div className="resume-preview">
                  <button
                    className="resume-button"
                    onClick={() => setShowResumeModal(true)}
                  >
                    Preview Resume
                  </button>
                </div>
                
                <div className="resume-download">
                  <a href={resumeFile} download className="resume-button">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <h2>About Me</h2>
            <hr />

            <div className="card">
              I'm a data scientist with experience in Python, machine learning, and data engineering. I've built predictive models, designed robust data pipelines, and delivered actionable insights from complex datasets.
            </div>
          </section>
          
          <section id="education" className="section">
            <h2>Education</h2>
            <hr />

            <div className="card education-card">
              <img 
                src={ncsuLogo} 
                alt="NC State Logo" 
                className="school-logo"
              />

              <div className="education-details">
                <h3>North Carolina State University</h3>
                <p>Bachelors in Computer Science</p>
                <p>May 2025</p>
                <p>GPA: 3.6 / 4.0</p>
              </div>
            </div>
          </section>

          <section id="skills" className="section">
            <h2>Skills</h2>
            <hr />
            
            <div className="skills-primary">
              <div className="skill-card card">
                <h3>Data Science</h3>
                <ul>
                  <li>Databricks</li>
                  <li>Data Visualization</li>
                  <li>Statistical Analysis</li>
                </ul>
              </div>

              <div className="card skill-card">
                <h3>Software Engineering</h3>
                <ul>
                  <li>Full-Stack Development</li>
                  <li>Object-Oriented Programming</li>
                  <li>Version Control with Git</li>
                </ul>
              </div>

              <div className="card skill-card">
                <h3>Cloud & Tools</h3>
                <ul>
                  <li>Microsoft Azure</li>
                  <li>Amazon Web Services</li>
                  <li>Docker</li>
                </ul>
              </div>

              <div className="card skill-card">
                <h3>Machine Learning</h3>
                <ul>
                  <li>Scikit-learn</li>
                  <li>Neural Networks</li>
                  <li>Deep Learning</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <h2>Data Science Projects</h2>
            <hr />
              <div className="certifications-grid">
                {dataScienceProjects.map((project) => (
                  <div key={project.id} className="card certification-card">
                    <div className="project-icon">
                      {project.icon}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-more">
                      <button 
                        className="verify-button"
                        onClick={() => handleMoreClick(project)}
                      >
                        More
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section id="software-projects" className="section">
            <h2>Software Engineering Projects</h2>
            <hr />
              <div className="projects-grid">
                {softwareProjects.map((project) => (
                  <div key={project.id} className="card project-card">
                    <div className="project-icon">
                      {project.icon}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-more">
                      <button 
                        className="verify-button"
                        onClick={() => handleMoreClick(project)}
                      >
                        More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
          </section>

          <section id="certifications" className="section">
            <h2>Certifications</h2>
            <hr />
            
            <div className="certifications-grid">
              <div className="card certification-card">
                <img src={databricksLogo} alt="Certification 1" className="certification-image" />
                <h3>Databricks Certified Data Engineer Associate</h3>

                <p>This certification shows proficiency in using the Databricks Lakehouse Platform for foundational data engineering tasks, including understanding its architecture, executing multi-hop ETL tasks with Apache Spark™ SQL and Python, processing data incrementally, deploying production pipelines and dashboards, and managing data governance.</p>

                <div className="certification-verify">
                  <a 
                    href="https://credentials.databricks.com/1e6ffc4a-ee0e-4e2b-9151-713b1e3d738f#acc.mi6sxoC8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="verify-button"
                  >
                    Verify Credential
                  </a>
                </div>
              </div>

              <div className="card certification-card">
                <img src={microsoftLogo} alt="Certification 2" className="certification-image" />
                <h3>Microsoft Azure AI Essentials Professional Certificate</h3>

                <p>This certification explores foundational AI and machine learning concepts on Azure, including generative AI, computer vision, natural language processing, responsible AI, and document intelligence, while covering best practices for managing diverse AI workloads.</p>

                <div className="certification-verify">
                  <a 
                    href="#" 
                    className="verify-button disabled"
                    onClick={(e) => e.preventDefault()}
                  >
                    Credential In Progress
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="thank-you" className="section">
            <h2>Thank you!</h2>
            <hr />
            
            <div className="card">
              Thank you for taking the time to read my portfolio!
              <br />
              <br />
              If you would like to chat about me joining your team, please feel free to email me using the form below!
            </div>
          </section>

          <section id="contact-me" className="section">
            <h2>Contact Me</h2>
            <hr />
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Your Message"
                    className="form-input message-input"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </section>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={handleCloseModal}>
            <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="project-modal-wrapper">
                <div className="project-modal-inner">
                  <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                    {projectComponents[selectedProject.id]}
                  </div>
                </div>
              </div>
              <button 
                className="project-modal-close" 
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}


        {/* Resume Modal */}
        {showResumeModal && (
          <div className="resume-modal-overlay" onClick={() => setShowResumeModal(false)}>
            <div className="resume-modal-container">
              <div className="resume-modal-wrapper">
                <div className="resume-modal-inner">
                  <div className="resume-modal-content">
                    <object 
                      data={resumeFile} 
                      type="application/pdf" 
                      className="pdf-preview"
                    >
                      Your browser does not support PDFs.
                    </object>
                  </div>
                </div>
              </div>
              <button 
                className="resume-modal-close" 
                onClick={() => setShowResumeModal(false)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
