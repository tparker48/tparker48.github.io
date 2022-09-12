import Home from './components/Home';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <div className='navbar'>
          <NavBar /> 
      </div>
      <div className='center'>
          <Home />
      </div>
    </div>
    
  );
}

export default App;
