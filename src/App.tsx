import './App.css';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { About } from './components/About';

function App () {
	return (
		<>
			<Header/>
      <Presentation />
      <About />
		</>
	);
}

export default App;
