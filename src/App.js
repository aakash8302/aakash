import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeScreen from './components/HomeScreen'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
          <main className="app-main">
            <HomeScreen />
          </main>
      <Footer />    
    </Router>
    </div>
  );
}

export default App;
