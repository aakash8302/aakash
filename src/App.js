import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import PageContruction from './components/PageContruction';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
          <main className="app-main">
            <Route path='/aakash' component={HomeScreen} exact />
            <Route path='/aakash/work' component={PageContruction} />
            <Route path='/aakash/about' component={PageContruction} />
            <Route path='/aakash/contact' component={PageContruction} />
          </main>
      <Footer />    
    </Router>
    </div>
  );
}

export default App;
