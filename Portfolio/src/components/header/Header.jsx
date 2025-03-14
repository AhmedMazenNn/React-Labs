const Header = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link btn btn-outline-primary me-3" href="#skills">Skills</a>
        <a class="nav-link btn btn-outline-primary me-3" href="#edu">Education</a>
        <a class="nav-link btn btn-outline-primary" href="#contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
      </>
    )
}

export default Header;