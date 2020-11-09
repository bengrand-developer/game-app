import Axios from 'axios';
import React, { Component } from 'react';
import Game from './Game';

class ListGame extends Component {

    state={
        games: []
    }

    componentDidMount(){
        Axios.get("https://wild-games.herokuapp.com/api/v1")
            .then(response => response.data)
            .then(data=>this.setState({games: data}))
    }

    handleDeleteGame = (idGame) => {
        const { games } = this.state;
        const newGames= games.filter(game => game.id !== idGame)
        this.setState({ games: newGames });
        
        console.log(newGames)
    }

    render(){
        const { games } = this.state;

        return(

            <div>
                Liste
                {games.map((game, index) => <Game key={index} game={game} handleDeleteGame={this.handleDeleteGame} />)}
                
            </div>
        )
    }
}

export default ListGame;