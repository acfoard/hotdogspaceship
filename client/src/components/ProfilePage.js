import React from 'react';
import * as $ from "axios";
import { ListGroup } from 'mdbreact';

class ProfilePage extends React.Component {
    state = {
        username: '',
        scores: []
    }

    ViewProfile = (event) => {
        event.preventDefault();
        $.get('/api/users/user', {username: this.state.username, scores: this.state.scores})
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
                <h2>Your Profile</h2>
                <h3>{this.state.username}</h3>
                <ListGroup>{this.state.scores.map((_scores, i) => (
                    <ListGroup.item key={i}>{this.state.scores}</ListGroup.item>
                ))}
                </ListGroup>
            </div>
        )
    }
}

export default ProfilePage;