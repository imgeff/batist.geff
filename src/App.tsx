import './App.css';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { About } from './components/About';
import { Certifications } from './components/Certifications';

function App () {
	return (
		<>
			<Header/>
      <Presentation />
      <About />
      <Certifications />
		</>
	);
}

export default App;
