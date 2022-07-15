import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer(){
    return(
        <>
        <IconContext.Provider>
        <footer>
        <nav>
                <ul className="social-media">
                    <a href="https://facebook.com"><FaFacebook /></a> 
                        <br />
                    <a href="https://github.com/juanhdzx"><FaGithub color="black"/></a> 
                        <br />
                    <a href="https://twitter.com"><FaTwitter /></a> 
                </ul> 
           
        </nav>
       
        </footer>
        </IconContext.Provider>
        </>
    )
}

export default Footer;