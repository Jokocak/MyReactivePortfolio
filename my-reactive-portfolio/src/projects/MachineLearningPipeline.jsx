// MachineLearningPipeline.jsx
function MachineLearningPipeline() {
  return (
    <div>
      <h3>Machine Learning Pipeline Exploration</h3>

      <div className="demo-box">
        {/* For a future video or image demonstration */}
      </div>

      <div className="description-box">
        <h4>Description</h4>
        <p>
          This project utilizes real-world direct marketing data from a Portuguese banking institution to predict whether clients will subscribe to a term deposit. By applying comprehensive data cleaning, preprocessing, and feature selection procedures, I built and evaluated multiple machine learning models. Libraries such as pandas and scikit-learn were used to facilitate model training, performance metrics, and insights.
        </p>
      </div>

      <div className="technologies-box">
        <h4>Technologies</h4>
        <p>
          Pandas, scikit-learn, Python, Google Colab, Matplotlib
        </p>
      </div>

      <div className="result-box">
        <h4>Results</h4>
        <p>
          The final model achieved an accuracy of 89.6%, successfully predicting client subscription outcomes based on demographic and historical data.
        </p>
      </div>

      <div className="learned-box">
        <h4>Lessons Learned</h4>
        <p>
          Through this project, I deepened my expertise in Python-based libraries such as scikit-learn, pandas, and Matplotlib. I also gained practical experience in end-to-end model development, from data ingestion and preparation to performance assessment and model refinement.
        </p>
      </div>

      <div className="repo-link-box">
        <h4>Repository Link</h4>

        <a
          className="verify-button"
          href="https://colab.research.google.com/drive/1H_vIDASK7Feo228yO1t9RJTxmY8zOugh?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Colab
        </a>
      </div>
    </div>
  );
}

export default MachineLearningPipeline;
