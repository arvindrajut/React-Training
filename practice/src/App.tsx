
import './App.css';
import Toolbar from './components/Toolbar';


function App() {

  return (
    <>
    <Toolbar onPlayMovie={() => alert("Playing Movie")} onPlayMusic={() => alert("Playing music")} />
    </>
    
  );
}

export default App;
