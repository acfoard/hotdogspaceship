import React from 'react';
import * as $ from "axios";
import Score from"./Score";


class ProfilePage extends React.Component {
    state = {
        username: '',
        scores: []
    }

    viewProfile = () => {
        let config = {
            headers: {
                authorization: sessionStorage.getItem('authorization')
            }
        }
        $.get('/api/scores', config)
        .then((data) => {
            console.log(data)
            this.setState({ scores: data.data });
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.viewProfile();
    }


    render() {
        return (    
            <div>  
               {this.state.scores.map(score => (
                   <Score 
                   key={score.id}
                   score={score.score}
                   game={score.game.title}
                   user= {score.user.username}
                   />
               ))}
            </div>
        )
    }
}

export default ProfilePage;