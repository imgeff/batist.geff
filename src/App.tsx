import './App.css';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Learnings } from './components/Learnings';
import { Projects } from './components/Projects';

function App () {
	return (
		<>
			<Header/>
      <Presentation />
      <About />
      <Certifications />
      <Learnings />
      <Projects />
		</>
	);
}

export default App;
