
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';  
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home /> 
      <About />
      <Contact/>
      
    </div>
  );
}


export default App;
