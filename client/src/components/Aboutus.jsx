import React from 'react';
import '../stylesheets/Aboutus.css';
import img1 from '../Images/about.png';
const Aboutus = () => {
    return (
        <>
        <div className='about'>
            <div className='about-section'>
                <p className='a-text' style={{marginTop:"-200px"}}>About Us</p>
                
                <div className='right'>
                    <img className='a-pic' src={img1} alt=""/>
                </div>
            </div>
                
            <div className='intro'>

                <p className='about-left' style={{marginTop:"-200px",marginLeft:"80px"}}>Welcome to <b style={{fontSize:"28px"}}>Score More</b> Application, your trusted online <br/> exam platform designed to streamline and enhance the <br/>examination process. Our mission is to provide a secure,<br/>efficient, and user-friendly platform for students to <br/>conduct and give the exam. </p><br/>
                <p className='about-left-1' style={{marginLeft:"80px"}}>Our Platform is built to support a different type of exam.</p><br/>
            <br/>
            </div> 

        </div>
        </>
    )
}

export default Aboutus