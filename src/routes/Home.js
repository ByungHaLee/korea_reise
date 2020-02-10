import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home () {
    return (
        <div className="main">
            <h1>Willkommen in Südkorea!</h1>
            <section className="menus">

            <div className="menu m1"><Link to="/spot"><span>Spot</span></Link></div>
            <div className="menu m2"><Link to="/hotel"><span>Hotel</span></Link></div>
        </section>
        </div>
        
    
    ); 
       
}


export default Home;