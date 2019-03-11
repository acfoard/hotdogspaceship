import React from 'react';
import * as $ from 'axios';

class Game extends React.Component {
  state = {
    gameStart: false,
    isPlayerTurn : false,
    playerInput : [],
    gameInput: [],
    score: 0
  }

  handleClick = (event) => {
    event.preventDefault();
    this.playSound(event)

    let playerInputLocal = this.state.playerInput.concat();
    if(!this.state.isPlayerTurn){
    } else if(this.state.isPlayerTurn){
        playerInputLocal.push(event.target.id);
        if(playerInputLocal.length === this.state.gameInput.length){
          console.log("they're the same length");
          if((playerInputLocal.toString()) == (this.state.gameInput.toString())){
            console.log("Continue!")
            this.setState({score: this.state.score +1})
            this.gameTurn();
          } else {
            console.log("nope, game over");
            $.ajax({
              type: 'post',
              beforeSend: function (req) {
                req.setRequestHeader('authorization', sessionStorage.getItem('authorization'))
              },
              url: '/api/scores'
            }).then((response) =>console.log(response.json))
            .catch((error) => {
              console.log(error.message)
            })
            this.gameRefresh();
          }
        }
        this.setState({
          playerInput: [...this.state.playerInput, event.target.id]
        })
        console.log(`Player Input: ${this.state.playerInput}`);
      }
    
  }

  startGame = (event) => {
    event.preventDefault();
    this.gameTurn();
  }

  newButtonPress = () => {
    this.setState({
      gameInput: [...this.state.gameInput, Math.floor((Math.random() * 4) + 1)]
    });
  }

  resolveTimeOut = (index, resolve) => {
    if(index === this.state.gameInput.length-1){
      console.log("you did a thing")
      resolve();
    }
  }

  computerPressButtons = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.state.gameInput.forEach((element, index) => {
          setTimeout(() => {
            document.getElementById(element).click();
            this.resolveTimeOut(index, resolve);
          }, 1000*index)
        })
      }, 50)
    })
  }

  gameRefresh = () => {
    this.setState({
      gameStart: false,
      playerInput: [],
      gameInput: [],
      score: 0
    })
  }
  

  gameTurn = (event) => {
    this.setState({gameStart: true})
    this.setState({isPlayerTurn: false})
    this.setState({gameStart: true})
    console.log(`Player Turn: ${this.state.isPlayerTurn}`)
    this.setState({isPlayerTurn: false})
    
    this.newButtonPress();
    this.computerPressButtons()
    .then(()=>{this.setState({isPlayerTurn: true, playerInput: []})})
    console.log(`GameInput: ${this.state.gameInput}`);
    console.log(`Player Turn: ${this.state.isPlayerTurn}`)
    console.log("After await");
    console.log(`Player Turn: ${this.state.isPlayerTurn}`)

  }



  playSound(event) {
    // console.log('sound should be played');
    // console.log(`${event.target.value}`)
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(`${event.target.value}`, audioContext.currentTime)
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  }

  render () {
    const gameOn = this.state.gameStart;
    return(
      <div>
        {!gameOn ? (
          <div>
            <h2>Would you like to play a game?</h2>
            <button onClick={this.startGame}>Yes</button>
          </div>
        ) : (
          <div className="container"> <h2 className="score">Score: {this.state.score}</h2><div className="buttons">
            <button onClick={this.handleClick} id="1" value="392" className="button red"> </button>
            <button onClick={this.handleClick} id="2" value="494" className="button blue"> </button>
            <button onClick={this.handleClick} id="3" value="587" className="button green"> </button>
            <button onClick={this.handleClick} id="4" value="659" className="button violet"> </button>
            </div>
          </div>) 
        }
        
        
       
      </div>
    )

  }
}

export default Game;