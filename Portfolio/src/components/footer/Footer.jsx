const Footer = () => {
    return (
      <footer className=" bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>Connect with Me</h5>
              <a href="https://www.linkedin.com/in/ahmedmazenm/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/AhmedMazenNn" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-github"></i> GitHub
              </a>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>Quick Links</h5>
              <a href="#projects" className="text-white d-block">Projects</a>
              <a href="#about" className="text-white d-block">About Me</a>
              <a href="#contact" className="text-white d-block">Contact</a>
            </div>
            <div className="col-md-4">
              <h5>Contact Me</h5>
              <p>Email: ahmed.mazen@example.com</p>
              <p>&copy; {new Date().getFullYear()} Ahmed Mazen. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  