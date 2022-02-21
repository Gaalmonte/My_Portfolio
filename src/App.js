import './App.css';
import Intro from './Components/Introduction/intro';
import Knowledgeleft from './Components/Knowledge/knowledgeleft';
import Knowledgeright from './Components/Knowledge/knowledgeright';
import FixedBar from './Components/Navbar/navbar';
import Projects from './Components/Projects/projects';

function App() {
  return (
    <div >
      <FixedBar/>
      <Intro/>
      <Knowledgeleft/>
      <Knowledgeright/>
      <Projects/>
    </div>
  );
}

export default App;
