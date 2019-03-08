import React from 'react';

class Game extends React.Component {
  state = {
  
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('clicked');
    this.playSound(event)
    
  }

  playSound(event) {
    console.log('sound should be played');
    console.log(`${event.target.value}`)
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
        <button onClick={this.handleClick} value="392" className="red">Red</button>
        <button onClick={this.handleClick} value="494" className="blue">Blue</button>
        <button onClick={this.handleClick} value="587" className="green">Green</button>
        <button onClick={this.handleClick} value="659" className="violet">Violet</button>
      </div>
    )

  }
}

export default Game;