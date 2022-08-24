import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
