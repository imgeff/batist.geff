import './App.css';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Learnings } from './components/Learnings';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App () {
	return (
		<>
			<Header/>
      <Presentation />
      <About />
      <Certifications />
      <Learnings />
      <Projects />
      <Footer />
		</>
	);
}

export default App;
