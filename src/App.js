import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import NavBar1 from './Components/NavBar1';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  
  return (
    <div>
      <NavBar1/>

      
      
   <Router>
    

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
     
    </Router>

    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>

    </Routes>
    </BrowserRouter> */}


    </div>
    
    

    
  );
  
}

export default App;
