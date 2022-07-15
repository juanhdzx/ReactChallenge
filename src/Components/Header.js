import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    /*Link*/
    NavLink
} from "react-router-dom";

import About from './About';
import Drip from './Drip.js';
import Contact from './Contact';
import Home from './Home';
import ReactDOM from 'react-dom/client'


function Header(){

    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <section id="mainSection">
        <Router>
            <article id="navStuff">
                <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Drip" element={<Drip />}/>
            <Route path="/Contact" element={<Contact />}/>
            </Routes>
            </article>
        </Router>
        </section>
    </React.StrictMode>

    )
    return(
        <>
        <header>
            <nav>
                <ul>
                    

                    <li><NavLink
                         to='/'
                        //  style={({ isActive }) => 
                        //     isActive ? activeStyle:undefined}
                            >Home</NavLink>
                    </li>
                    <li><NavLink
                         to='/About'
                        //  style={({ isActive }) => 
                        //     isActive ? activeStyle:undefined}
                            >About Us</NavLink>
                    </li>
                    <li><NavLink
                         to='/Drip'
                        //  style={({ isActive }) => 
                        //     isActive ? activeStyle:undefined}
                            >My Collection</NavLink>
                    </li>
                    <li><NavLink
                         to='/Contact'
                        //  style={({ isActive }) => 
                        //     isActive ? activeStyle:undefined}
                            >Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

        </>
    )
}

export default Header;