import React from 'react';
import 'react-dom';
import '../stylesheets/Header.css';
import logo from '../Images/logo.png'
import prof from '../Images/profile.png';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <>
        <div className='logo'>
            <Link to="/"><img src={logo} alt="img" height="90px" width="290px"></img></Link> 
            <Link to="/adlogin"><img src={prof} alt="profile" height="50px" width="50px" style={{marginLeft:"1040px"}}></img></Link>
        
            
        </div>

        <div className='linavbar'>
                <div className='hlilist'>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/test">TEST</Link></li>
                        <li><Link to="/about">ABOUT US</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                        <li><Link to="/register">REGISTRATION</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;