import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Score = (props) => {
    return (
        <Jumbotron>           
            <h4>{props.game}</h4>
            <br></br>
            <h5>Score: {props.score}</h5>
            <br></br> 
            <p>{props.user} </p>          
        </Jumbotron>
    )
}

export default Score;