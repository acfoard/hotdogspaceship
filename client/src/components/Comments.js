import React from "react";
import AddComment from "./addComment"
import * as $ from "axios"

class Comments extends React.Component {
    state = {
        comments: [],
        newComment: ''
    }

    componentDidMount() {
        let config = {
            headers: {
              authorization: sessionStorage.getItem('authorization'),
            }
           }
           console.log(config)
        $.get('/api/comments', config).then((data) => {
            console.log(data)
            this.setState({comments: data})
        })
    }

    render() {
        return (
            <AddComment/>
        );
    }

}

export default Comments;