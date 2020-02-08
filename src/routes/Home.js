import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Home.css';


class Home extends React.Component {
    render(){
       return (
        <Jumbotron fluid="false" className="title">
            <h1>Nach Südkorea</h1>
        </Jumbotron>
       ); 
       
    }
}


export default Home;