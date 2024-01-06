import { About } from "./Sections/About/About";
import { Skills } from "./Sections/Skills/Skills";
import { Divider } from "./components/Divider";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Divider/>
      <Skills />
    </div>
  );
}

