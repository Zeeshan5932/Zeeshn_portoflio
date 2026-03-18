import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>Seeker Institute (Remote)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Designed and deployed a production OCR document scanning system
              using OpenCV, improving digitization efficiency by 60%. Built
              end-to-end ML pipelines with pretrained CNN architectures and
              integrated optimized inference into scalable Python applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation Engineer</h4>
                <h5>eFAIDA Technologies (Punjab, Pakistan)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered AI automation systems combining LLMs, APIs, and n8n
              workflows, reducing manual operations by 50%. Developed and
              containerized FastAPI microservices and built data extraction
              pipelines from 20+ sources using Selenium and Beautiful Soup.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Data Scientist</h4>
                <h5>Oasis Infobyte (Remote)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a CNN-based Brain Tumor Detection system and performed
              complete ML workflows including EDA, feature engineering,
              hyperparameter tuning, and evaluation. Delivered model insights
              through interactive dashboards for stakeholder decisions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Kaggle Grandmaster</h4>
                <h5>Kaggle (Remote)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Ranked Top 152 globally by building high-performing ML
              solutions with advanced feature engineering, ensembling, and
              cross-validation. Published 30+ production notebooks and 10+
              curated datasets focused on reproducibility and scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
