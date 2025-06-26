// KitchenDisplaySystem.jsx
function KitchenDisplaySystem() {
    return (
        <div>
            <h3>Kitchen Display System</h3>

            {/* <div className="demo-box">
                <video
                    src={coffeeMakerDemo}
                    controls
                    width="100%"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.09)' }}
                    poster="//:0" // Optionally add a poster image
                >
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div> */}

            <div className="description-box">
                <h4>Video Description</h4>
                <p>
                ** Video Coming Soon **
                </p>
                
                <h4>Project Description</h4>
                <p>
                The Kitchen Display System is a full-stack web application developed in an Agile team, integrating Clover API for real-time order processing. Built with React Native, Django, and MySQL, it streamlines restaurant workflows, managing orders and recipes with a scalable, user-friendly backend.
                </p>
            </div>

            <div className="technologies-box">
                <h4>Technologies</h4>
                <p>
                Expo/React Native, Django, Python, MySQL, SQL, Docker, Clover API, Git/GitHub
                </p>
            </div>

            <div className="result-box">
                <h4>Results</h4>
                <p>
                Collaborating in an Agile team, we implemented a scalable backend with RESTful APIs, reducing order errors by 30% and boosting processing speed by 20%. A Project Design Document and mentorship in Agile practices improved team productivity by 15%.
                </p>
            </div>

            <div className="learned-box">
                <h4>Lessons Learned</h4>
                <p>
                This project enhanced my expertise in full-stack development with React Native and Django, RESTful API integration, and Agile methodologies. Mentoring two team members and using Git for version control deepened my skills in collaboration, modular design, and scalable system architecture.
                </p>
            </div>

            <div className="repo-link-box">
                <h4>Repository Link</h4>

                <a
                className="verify-button"
                href="https://github.com/Jokocak/PoppyCoxKDS"
                target="_blank"
                rel="noopener noreferrer"
                >
                Go to Repository
                </a>
            </div>
        </div>
    );
}

export default KitchenDisplaySystem;
