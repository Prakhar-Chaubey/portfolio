import {profile,skills} from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar profile = {profile} />
      <Hero profile = {profile} />
      <About skills = {skills} />
      <Skills skills = {skills}/>
    </>
  );
}
export default App;