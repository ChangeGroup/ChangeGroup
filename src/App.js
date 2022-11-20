import './App.css';
import Home from '../src/Components/Home/home.js';
import Navbar from './Components/Navbar/navbar';
import Services from './Components/Services/services';
import About from './Components/About/about';
import Counter from './Components/Counter/counter';
import Career from './Components/Career/career';
import Footer from './Components/Footer/footer';

function App() {   

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Counter />
      <Services />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
