import About from "./pages/About/About";
import Main from "./pages/Home/Main";
import Navbar from "./components/NavBar/NavBar";
import Projects from "./pages/Projects-Page/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
