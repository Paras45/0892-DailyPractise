
import './App.css';
import Header from './Component/Header/header';


function App() {
  return (
    <div className="App">
      {/* <Header />
      <h1> h1 heading</h1>
      <h1>{name}</h1>
      <h1>{12+8}</h1>
      <h1>{x ? "yes" : "no"}</h1> */}
      <Header title={12}></Header>
    </div>
  );
}

export default App;