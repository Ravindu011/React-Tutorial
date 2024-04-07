import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar1 from './Components/NavBar1';


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
      <NavBar1/>
      <div>
        <h1>React Bootstrap </h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Item 1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
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
