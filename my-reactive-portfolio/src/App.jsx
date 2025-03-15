import { useState } from 'react'
import './App.css'
import profilePic from './assets/jokocak@ncsu.edu-1.jpg'
import resumeFile from './assets/James_Kocak_Resume.pdf'

function App() {
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
                <div className="social-links">
                  <a href="https://github.com/Jokocak" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/james-kocak" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="mailto:jamkocak88@gmail.com">
                    Email
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
            {/* Add your personal information, bio, and introduction here */}
          </section>
          
          <section id="education" className="section">
            <h2>Education</h2>
            {/* Add your educational background here */}
          </section>

          <section id="skills" className="section">
            <h2>Skills</h2>
            {/* Add your technical and professional skills here */}
          </section>

          <section id="projects" className="section">
            <h2>Projects</h2>
            {/* Add your projects with descriptions, links, and images here */}
          </section>

          <section id="certifications" className="section">
            <h2>Certifications</h2>
            {/* Add your certifications and achievements here */}
          </section>

          <section id="contact-me" className="section">
            <h2>Contact Me</h2>
            {/* Add your certifications and achievements here */}
          </section>
        </div>
      </div>
    </>
  )
}

export default App
