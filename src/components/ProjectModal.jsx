import logo from "../assets/img/logo.jpg";

const ProjectModal = () => {
  return (
    <div className="modal-overlay" id="projectModal">
      <div className="modal-content glass-card">
        <button className="modal-close" id="modalClose" aria-label="Close modal">×</button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={logo} alt="Project Image" />
          </div>
          <h2 className="modal-title">Project Title</h2>
          <div className="modal-tags"></div>
          <p className="modal-description">Detailed project description...</p>
          <div className="modal-links">
            <a href="#" className="cta-button cta-primary">[View Demo]</a>
            <a href="#" className="cta-button cta-secondary">[GitHub Repo]</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;