import React from 'react';
import * as $ from "axios";
import Profile from './ViewProfile';

class ProfilePage extends React.Component {
    state = {
        username: '',
        scores: []
    }

    ViewProfile = (event) => {
        event.preventDefault();
        $.get('/api/user/profile', {username: this.state.username, scores: this.state.scores})
        .then((data) => {
            this.setState({ username: '', scores: [] });
        })
        .catch((error) => {
            console.log(error)
        })
    }


    render() {
        return (    
            <div>
                <Profile ViewProfile={this.ViewProfile}/>
                <h3>{this.state.username}</h3>
                <ul>{this.state.scores.map((_scores, i) => (
                    <li key={i}>{this.state.scores}</li>
                ))}
                </ul>
            </div>
        )
    }
}

export default ProfilePage;
