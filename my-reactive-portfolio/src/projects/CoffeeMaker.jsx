// CoffeeMaker.jsx
function CoffeeMaker() {
    return (
        <div>
            <h3>CoffeeMaker</h3>

            <div className="demo-box">
                {/* Placeholder for a future video or image demo */}
            </div>

            <div className="description-box">
                <h4>Description</h4>
                <p>
                CoffeeMaker is a fullstack coffee order management web application developed in a collaborative team setting. The project enables users to create, modify, view, and delete coffee orders, manage recipes, and simulate day-to-day café operations. Designed to streamline the workflow of baristas and customers alike, CoffeeMaker features a user-friendly interface and robust backend logic.
                </p>
            </div>

            <div className="technologies-box">
                <h4>Technologies</h4>
                <p>
                Spring Boot, Java, Maven, AngularJS
                </p>
            </div>

            <div className="result-box">
                <h4>Results</h4>
                <p>
                Working as part of an agile team, we implemented comprehensive CRUD operations and built RESTful API endpoints for seamless interaction between the frontend and backend. This enabled reliable management of coffee orders and recipes, and brought a scalable, maintainable architecture to the project. The application provides real-time feedback and a streamlined ordering experience.
                </p>
            </div>

            <div className="learned-box">
                <h4>Lessons Learned</h4>
                <p>
                During this project, I strengthened my skills in fullstack development and deepened my understanding of REST API construction using Spring Boot. I also gained practical experience working with a team using version control (Git), code reviews, and agile methodologies. The project reinforced the value of clear communication, modular design, and best practices in developing production-ready web applications.
                </p>
            </div>

            <div className="repo-link-box">
                <h4>Repository Link</h4>

                <a
                className="verify-button"
                href="https://github.com/Jokocak/CoffeeMaker"
                target="_blank"
                rel="noopener noreferrer"
                >
                Go to Repository
                </a>
            </div>

            <div className="repo-link-box">
                <h4>Website Link</h4>

                <a
                className="verify-button"
                href="https://coffeemaker.up.railway.app/login"
                target="_blank"
                rel="noopener noreferrer"
                >
                Go to CoffeeMaker Simulation
                </a>
            </div>

            <div className="credentials-box">
                <h4>Website Manager and Staff Credentials</h4>
                <div className="credential-pair">
                    <span className="credential-label">Manager Username:</span>
                    <span className="credential-value">admin</span>
                </div>
                <div className="credential-pair">
                    <span className="credential-label">Manager Password:</span>
                    <span className="credential-value">password</span>
                </div>
                <div className="credential-pair">
                    <span className="credential-label">Staff Username:</span>
                    <span className="credential-value">staff</span>
                </div>
                <div className="credential-pair">
                    <span className="credential-label">Staff Password:</span>
                    <span className="credential-value">password</span>
                </div>
            </div>
        </div>
    );
}

export default CoffeeMaker;
