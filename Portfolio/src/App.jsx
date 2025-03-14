import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Edu from './components/education/Edu';
import Contact from './components/contact/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <>
      <Header />

      <section className="text-center py-5 bg-primary text-white">
        <h1>Ahmed Mazen's Portfolio</h1>
        <a href="./cv.pdf" download className="btn btn-light mt-3">
          Download CV
        </a>
      </section>

      <div className="container text-center my-5">
        <h2>About Me</h2>
        <p>I'm a passionate Full Stack Developer specializing in Python, Django, and React.</p>
      </div>
     <Skills />

      <Edu />

      <Contact />
      
      <Footer />
    </>
  );
}

export default App;
