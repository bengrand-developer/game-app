import React, { Component } from 'react';
import "../styles/css/Game.css";

class Game extends Component {
    render(){
        const { game, handleDeleteGame } = this.props;
        console.log(game);
        return(
            <div className='Game' style={{backgroundImage: `url(${game.background_image})`}}>
                {game.name}
                {game.rating}
                <button onClick={() => handleDeleteGame(game.id)}>Delete</button>
            </div>
        )
    }
}

export default Game;

