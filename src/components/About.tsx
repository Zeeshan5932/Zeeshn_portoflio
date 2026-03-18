import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI/ML Engineer specializing in production-grade machine learning and LLM
          systems. I am currently pursuing a BS in Data Science and building scalable
          AI solutions across OCR, computer vision, NLP, and RAG architectures.
          Experienced with LangChain, LangGraph, MCP, FastAPI, Docker, and end-to-end
          deployment workflows for real-world applications.
        </p>
      </div>
    </div>
  );
};

export default About;
