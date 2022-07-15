//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
//import Home from './Components/Home';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Drip from './Components/Drip'
import {
  BrowserRouter as Router,
  Routes,
  /*Switch,*/
  Route,
  /*Link,*/
  /*NavLink,*/
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';


function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <section id="mainSection">
        <Router>
          
            <article id="navStuff">
            <Header />
                <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Drip" element={<Drip />}/>
            <Route path="/Contact" element={<Contact />}/>
            </Routes>
            <Footer />
            </article>
            
        </Router>
        </section>
    </React.StrictMode>

    )
    // <div className="App">
    //   <Header></Header>
    //   {/* <Home /> */}
    //   <Footer></Footer>
    // </div>
  
}

export default App;
