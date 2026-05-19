// Imports
import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { emailConfig } from "./config/email-config";
import { FaDatabase } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import emailjs from '@emailjs/browser'

// Local Imports
import './App.css'
import DataProductCatalog from "./projects/DataProductCatalog";
import CoffeeMaker from "./projects/CoffeeMaker";
import Clarus from "./projects/Clarus";
import ResumeBody from "./components/ResumeBody";

// Content
import { profile } from "./content/profile";
import { about } from "./content/about";
import { education } from "./content/education";
import { experience } from "./content/experience";
import { skills } from "./content/skills";
import { softwareProjects } from "./content/projects";
import { certifications } from "./content/certifications";

const projectIconMap = {
  wallet: <FaWallet />,
  code: <FaCode />,
  database: <FaDatabase />,
};

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
    2: <DataProductCatalog />,
    4: <CoffeeMaker />,
    6: <Clarus />,
  };


  return (
    <>
      <div className="layout">
        {/* Navigation Sidebar */}
        <nav className="sidebar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#thank-you">Contact Me</a></li>
          </ul>
        </nav>

        <div className="portfolio-container">
          <section id="home" className="section">
            <div className="profile-container">
              <div className="profile-image">
                <img src={profile.photo} alt="Profile Picture" />
              </div>

              <div className="profile-links">
                <h2>{profile.name}</h2>
                <hr />
                <h2>{profile.title}</h2>

                <div className="social-links">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
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
                  <a href={profile.resume} download className="resume-button">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <h2>About Me</h2>
            <hr />

            <div className="card about-card">
              {about.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          <section id="experience" className="section">
            <h2>Experience</h2>
            <hr />

            {experience.map((exp) => (
              <div key={`${exp.company}-${exp.role}`} className="card experience-card">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.logoAlt}
                    className="company-logo"
                  />
                )}

                <div className="experience-details">
                  <h3>{exp.role}</h3>
                  <p><strong>{exp.company}</strong> · {exp.location}</p>
                  <p>{exp.date}</p>
                  {exp.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section id="skills" className="section">
            <h2>Skills</h2>
            <hr />

            <div className="skills-secondary">
              {skills.map((skill) => (
                <div key={skill.title} className="card skill-card">
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <h2>Projects</h2>
            <hr />
              <div className="certifications-grid">
                {softwareProjects.map((project) => (
                  <div key={project.id} className="card certification-card">
                    <div className="project-icon">
                      {projectIconMap[project.iconKey]}
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
              {certifications.map((cert) => (
                <div key={cert.title} className="card certification-card">
                  <img src={cert.logo} alt={cert.logoAlt} className="certification-image" />
                  <h3>{cert.title}</h3>

                  <p>{cert.description}</p>

                  <div className="certification-verify">
                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="verify-button"
                      >
                        {cert.buttonText}
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="verify-button disabled"
                        onClick={(e) => e.preventDefault()}
                      >
                        {cert.buttonText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="section">
            <h2>Education</h2>
            <hr />

            <div className="card education-card">
              <img
                src={education.logo}
                alt={education.logoAlt}
                className="school-logo"
              />

              <div className="education-details">
                <h3>{education.school}</h3>
                <p>{education.degree}</p>
                <p>{education.date}</p>
                <p>GPA: {education.gpa}</p>
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
                    <ResumeBody />
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
