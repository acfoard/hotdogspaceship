import React from 'react';

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

    let playerInputLocal = [];
    if(!this.state.isPlayerTurn){
      console.log(`GameInput: ${this.state.gameInput}`);
    } else if(this.state.isPlayerTurn){
        playerInputLocal.push(event.target.id);
        console.log(`localArray: ${playerInputLocal}`);
        this.setState({
          playerInput: [...this.state.playerInput, event.target.id]
        })
        console.log(`Player Input: ${this.state.playerInput}`);
      }
    
  }

  startGame = (event) => {
    event.preventDefault();
    this.setState({gameStart: true})
    this.setState({isPlayerTurn: false})
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

  // setTimeout(() => {
  //   this.state.gameInput.forEach(function(element, index) {
  //     setTimeout(() => {
  //       document.getElementById(element).click();
  //     }, 1000*index)
  //   })
  // }, 50)

  gameRefresh = () => {
    this.setState({
      gameStart: false,
      playerInput: [],
      gameInput: [],
      score: 0
    })
  }
  

  gameTurn = async (event) => {
    console.log(`Player Turn: ${this.state.isPlayerTurn}`)
    this.setState({isPlayerTurn: false})
    this.setState({playerInput: []})
    this.newButtonPress();
    this.computerPressButtons()
    .then(()=>{this.setState({isPlayerTurn: true})})
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
    return(
      <div>
        <h2>Would you like to play a game?</h2>
        <button onClick={this.startGame}>Computer</button>
        <button onClick={this.playerTurn}>Player</button>
        <h2>Score: {this.state.score}</h2>
        <button onClick={this.handleClick} id="1" value="392" className="button red"> </button>
        <button onClick={this.handleClick} id="2" value="494" className="button blue"> </button>
        <button onClick={this.handleClick} id="3" value="587" className="button green"> </button>
        <button onClick={this.handleClick} id="4" value="659" className="button violet"> </button>
      </div>
    )

  }
}

export default Game;