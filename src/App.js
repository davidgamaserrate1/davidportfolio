import { About } from "./Sections/About/About";
import { Projects } from "./Sections/Projects/Projects";
import { Skills } from "./Sections/Skills/Skills";
import { Divider } from "./components/Divider";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header/>
      <About/>
      <Divider/>
      <Skills />
      <Divider/>
      <Projects/>
    </>
  );
}

