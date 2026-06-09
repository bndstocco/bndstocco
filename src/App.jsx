import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Divider from './components/Divider';
import StackMarquee from './components/StackMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CustomCursor />
      <Nav />

      <Hero />
      <StackMarquee />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Certifications />
      <Divider />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
