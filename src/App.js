import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import { useState } from 'react';

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {

  //let count = 0;
  const [count, setCount] = useState(0);

  const increment = () =>{
     //count +=1;
    setCount(count+1);
  };
 

  const decrement = () =>{
    //count-+1;
    setCount(count-1);
  };
  
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

        <br/><br/><br/><br/>
      <div>
        <span className='title'>My Counter</span>
        <p className='subTitle'>The count is is {count}</p>
        <button className='btn' onClick={decrement}>-</button>
        <span>  or   </span>
        <button className='btn' onClick={increment}>+</button>
      </div>
      </div>
    </Router>

    
  );
  
}

export default App;
