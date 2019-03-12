import React from "react";

const Game = (props) => {
    return <div>
        <h3>{props.title}</h3>
        <p><b>Type:</b> {props.type} <b>Description:</b> {props.description}</p>
        <button onClick={props.clickHandler} value={props.id}>Play This Game</button>
    </div>
}

export default Game;