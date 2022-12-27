import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
                  <Navbar/>
                  <ItemListContainer greeting="Tienda de accesorios"/>

    </div>
  );
}

export default App;
