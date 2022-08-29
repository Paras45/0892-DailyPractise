import logo from './logo.svg';
import './App.css';
import Header from './Component/header';

const name="Paras";
const x=true;
function App() {
  return (
    <div className="App">
      <Header />
      <h1> h1 heading</h1>
      <h1>{name}</h1>
      <h1>{12+8}</h1>
      <h1>{x ? "yes" : "no"}</h1>
    </div>
  );
}

export default App;
