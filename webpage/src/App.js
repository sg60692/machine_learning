import './App.css';
import Header from './components/Header/Header.js';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
