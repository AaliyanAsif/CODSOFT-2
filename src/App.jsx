import About from "./pages/About/About";
import Main from "./pages/Home/Main";
import Navbar from "./components/NavBar/NavBar";
import Projects from "./pages/Projects-Page/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
    </div>
  );
}

export default App;
