import './App.css';
import Home from './pages/Home/home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />  {/* Displays ONCE at the top */}
      <Home />    {/* Displays your page content */}
      <Footer />  {/* Displays ONCE at the bottom */}
    </div>
  );
}

export default App;