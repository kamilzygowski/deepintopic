import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
    render() {
        const navStyle = {
            color:'#d1ccc0',
            textDecoration:'none',
           
        };
        return (
            <nav className="navbar" id="/navbar">   
            <Link to="deepintopic/" style={navStyle}> 
               <img src="https://i.postimg.cc/bJBQG6Dy/dit-logo2.png" alt="logo" className="logo"/>
               </Link>
               <ul className="navLinks">
               <Link to="deepintopic/" style={navStyle}>
                   <li className="link"> Home </li>
                   </Link>
                   <Link to="deepintopic/about" style={navStyle}>
                   <li className="link"> About </li>
                   </Link>
                   <Link to="deepintopic/articles" style={navStyle}>
                   <li className="link"> Articles </li>
                   </Link>
                   <Link to="deepintopic/contact" style={navStyle}>
                   <li className="link"> Contact </li>
                   </Link>
                   <Link to="deepintopic/dictionary" style={navStyle}>
                   <li className="link"> Dictionary </li>
                   </Link>
               </ul>
            </nav>
        );
    }
}

export default NavBar;