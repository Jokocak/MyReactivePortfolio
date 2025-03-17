// Imports
import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { emailConfig } from "./config/email-config";

// Local Imports
import './App.css'
import profilePic from './assets/jokocak@ncsu.edu-1.jpg'
import resumeFile from './assets/James_Kocak_Resume.pdf'
import databricksLogo from './assets/databricks-logo-asset.png'
import microsoftLogo from './assets/microsoft-logo-asset.png'
import emailjs from '@emailjs/browser'

function App() {
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

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:jamkocak88@gmail.com?subject=Portfolio Contact";
    setTimeout(() => {
      alert("If your email client didn't open, you can either send an email to jamkocak88@gmail.com or use the Contact Me form at the bottom of the page.");
    }, 1000);
  };

  return (
    <>
      <div className="layout">
        {/* Navigation Sidebar */}
        <nav className="sidebar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
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
                <h2>Data Science | Data Engineer</h2>

                <div className="social-links">
                  <a href="https://github.com/Jokocak" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/james-kocak" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:jamkocak88@gmail.com?subject=Portfolio Contact" 
                     onClick={handleEmailClick}>
                    <MdEmail />
                  </a>
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

            <div className="about-description">
              Hi! I'm James Kocak, an aspiring Data Scientist.
              <br />
              <br />
              I harness my expertise in Python, SQL, machine learning, and data visualization to analyze complex datasets, build predictive models, and deliver actionable insights.
              <br />
              <br />
              I focus on integrating advanced analytics and scalable data solutions to empower organizations with clear, data-driven strategies and innovations.
              <br />
              <br />
              I have 3+ years of experience in transforming raw data into meaningful intelligence across diverse industries.
            </div>
          </section>
          
          <section id="education" className="section">
            <h2>Education</h2>
            <hr />
            {/* Add your educational background here */}

            
          </section>

          <section id="skills" className="section">
            <h2>Skills</h2>
            <hr />
            
            <div className="skills-primary">
              <div className="skill-card">
                <h3>Data Science</h3>
                <ul>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Statistical Analysis</li>
                  <li>Data Visualization</li>
                  <li>Google Colab</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>Data Engineering</h3>
                <ul>
                  <li>Databricks</li>
                  <li>Apache Spark</li>
                  <li>ETL Pipelines</li>
                  <li>Data Warehousing</li>
                  <li>Delta Lake</li>
                </ul>
              </div>
            </div>

            <div className="skills-secondary">
              <div className="skill-card">
                <h3>Programming</h3>
                <ul>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>PySpark</li>
                  <li>Java</li>
                  <li>Git</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>Cloud & Tools</h3>
                <ul>
                  <li>Microsoft Azure</li>
                  <li>Amazon Web Services</li>
                  <li>Google Cloud Platform</li>
                  <li>Docker</li>
                  <li>Jenkins</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>Machine Learning</h3>
                <ul>
                  <li>Scikit-learn</li>
                  <li>Azure Machine Learning</li>
                  <li>Neural Networks</li>
                  <li>Supervised Learning</li>
                  <li>Deep Learning</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <h2>Projects</h2>
            <hr />
            
            <div className="projects-grid">
              <div className="project-card">
                <img src="/path-to-project1-image.jpg" alt="Project 1" className="project-image" />
                <h3>Machine Learning Pipeline Exploration</h3>
                <p>Developed a robust ML pipeline detailing dataset features and biases, defining a hypothetical use-case, applying preprocessing and feature selection, comparing logistic regression and decision trees, and integrating fairness and interpretability measures.</p>
              </div>

              <div className="project-card">
                <img src="/path-to-project2-image.jpg" alt="Project 2" className="project-image" />
                <h3>Data Product Catalog</h3>
                <p>Engineered a scalable PostgreSQL ingestion pipeline for millions of records, developed a sub-minute identification algorithm for optimal data product blueprint matches, and implemented full CRUD functionality to manage over 10,000 data assets.</p>
              </div>

              <div className="project-card">
                <img src="/path-to-project3-image.jpg" alt="Project 3" className="project-image" />
                <h3>Project Title 3</h3>
                <p>Brief description of your third project, emphasizing the primary goal or technology stack.</p>
              </div>
            </div>
          </section>

          <section id="certifications" className="section">
            <h2>Certifications</h2>
            <hr />
            
            <div className="certifications-grid">
              <div className="certification-card">
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

              <div className="certification-card">
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
            
            <div className="about-description">
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
      </div>
    </>
  )
}

export default App
