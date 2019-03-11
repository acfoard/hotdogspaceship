import React from "react";
import * as $ from "axios";
import Game from './Games';

class GameList extends React.Component  {

    state = {
        games:[],
    }

    getGame = () => {
        $.get('/api/games').then((response) =>{
            console.log(response);
            this.setState({
                games: response.data
            })
        })
    }

    componentDidMount() {
        this.getGame();
    }

    gameClick = (e, gameTitle) => {
        e.preventDefault();
        gameTitle = e.target.value;
        window.location.href = `/${gameTitle}`;
    }

    render () {
        return(
            this.state.games.map(game =>(
                <Game 
                key={game.id}
                id={game.id}
                title={game.title}
                description={game.description}
                type={game.type}
                clickHandler = {this.gameClick}
            />
            ))
        );
}
}

export default GameList