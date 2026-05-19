import { profile } from "../content/profile";
import { about } from "../content/about";
import { experience } from "../content/experience";
import { education } from "../content/education";
import { skills } from "../content/skills";
import { softwareProjects } from "../content/projects";
import { certifications } from "../content/certifications";

function ResumeBody() {
  return (
    <article className="resume-document">
      <header className="resume-header">
        <h1>{profile.name}</h1>
        <p className="resume-title">{profile.title}</p>
        <div className="resume-contacts">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      {about.length > 0 && (
        <section className="resume-section">
          <h2>Summary</h2>
          {about.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </section>
      )}

      {experience.length > 0 && (
        <section className="resume-section">
          <h2>Experience</h2>
          {experience.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="resume-entry"
            >
              <div className="resume-entry-header">
                <strong>{exp.role}</strong>
                <span>{exp.date}</span>
              </div>
              <div className="resume-entry-subheader">
                <em>{exp.company}</em>
                <span>{exp.location}</span>
              </div>
              {exp.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          ))}
        </section>
      )}

      <section className="resume-section">
        <h2>Projects</h2>
        {softwareProjects.map((proj) => (
          <div key={proj.id} className="resume-entry">
            <strong>{proj.title}</strong>
            <p>{proj.description}</p>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <dl className="resume-skills">
          {skills.map((skill) => (
            <div key={skill.title} className="resume-skill-group">
              <dt>{skill.title}</dt>
              <dd>{skill.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <strong>{education.school}</strong>
            <span>{education.date}</span>
          </div>
          <p>
            {education.degree}
            {education.gpa ? ` · GPA ${education.gpa}` : ""}
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        {certifications.map((cert) => (
          <div key={cert.title} className="resume-entry">
            <div className="resume-entry-header">
              <strong>{cert.title}</strong>
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify
                </a>
              ) : (
                <span className="resume-cert-status">In progress</span>
              )}
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default ResumeBody;
