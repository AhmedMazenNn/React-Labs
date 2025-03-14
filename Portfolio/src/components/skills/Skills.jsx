const Skills = () => {
    return(
        <>
            <section id="skills" className="py-5 bg-light">
<div className="container">
  <h2 className="text-center mb-4">Skills</h2>
  <div className="row justify-content-center">
    {[
      ['HTML', 'bi-filetype-html'],
      ['CSS', 'bi-filetype-css'],
      ['Bootstrap', 'bi-bootstrap'],
      ['JavaScript', 'bi-filetype-js'],
      ['Bash', 'bi-terminal'],
      ['Linux', 'bi-ubuntu'],
      ['Django', 'bi-file-code'],
      ['Python', 'bi-filetype-py'],
      ['Git & GitHub', 'bi-git'],
    ].map(([name, icon], index) => (
      <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
        <div className="border-0 shadow-sm p-3 bg-white rounded d-flex flex-column align-items-center">
          <i className={`bi ${icon} display-4 text-primary`}></i>
          <h5 className="mt-2">{name}</h5>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

        </>
    )
}
export default Skills;