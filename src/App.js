import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route path="/About">
            <About/>
          </Route>

          <Route path="/Contact"> 
            <Contact/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
