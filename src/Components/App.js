import wormie from '../images/wormie.png';
import '../App.css';
import Home from './Home'
function App() {
  return (
    <div className="App">
      <Home wormie={wormie} />
    </div>
  );
}

export default App;
