import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../stylesheets/PHome.css'
import bg1 from '../Images/Entrance-Exam.png';
import bg2 from '../Images/ex.png';
import bg3 from '../Images/exbg1.png';
import bg4 from '../Images/back1.png';
import { Link } from 'react-router-dom';

const PHome = () => {

    return (
        <>
        <div>
            
            <Fade>
            <div className="each-slide">
                     <img src={bg4} alt='bg2'/>
                </div>

                <div className="each-slide">
                    <h1 style={{marginTop:"140px",marginLeft:"60px",fontSize:"50px",color:"lightblue"}}>Your Career
                        <br/><p style={{marginLeft:"20px",fontSize:"32px",color:"black"}}>Path Begins Here!!</p>
                        <Link to='/register'><button style={{cursor:'pointer',border:"none",fontWeight:"bold",fontSize:"16px",borderRadius:"5px",backgroundColor:"steelblue",marginLeft:"25px",height:"50px",width:"300px",alignItems:"center",color:"black"}}>Register Now</button></Link>
                    </h1>
                    
                    <img src={bg1} alt='bg1'/><br/>
                </div>

                <div className="each-slide">
                     <img src={bg2} alt='bg2'/>
                </div>

                <div className="each-slide">
                     <img src={bg3} alt='bg2'/>
                </div>
            </Fade>
            </div>
        </>
    );
};

export default PHome