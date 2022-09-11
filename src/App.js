import './App.css';
import Handle from './components/Handle';
import Pokemons from './components/Pokemons';
import RickAndMorty from './components/RickAndMorty';
import ShowInfo from './components/Showinfo';

function App() {
  return (
    <div className="App">
      <Handle/>
      <ShowInfo/>
      <Pokemons/>
      <RickAndMorty/>
    </div>
  );
}

export default App;
