import React from 'react';

const Score = (props) => {
    return (
        <div>
            <h3>{props.score}</h3>
            <p>{props.user} </p>
            <p>{props.game}</p>
        </div>
    )
}

export default Score;