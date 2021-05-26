import './App.css';
import Header from './components/Header/Header.js';
import Projects from './components/Projects/Projects';
function b() {

  const list = []

  for (var i=0;i<100;++i) {
    list.push(<br/>)
  }

  return (
    <div>
      {list}
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      {b()}
    </div>
  );
}

export default App;
