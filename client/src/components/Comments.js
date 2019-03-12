import React from "react";
import AddComment from "./addComment"
import * as $ from "axios"
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from "mdbreact"

class Comments extends React.Component {
    state = {
        comments: [],
        newComment: ''
    }

    renderComments = (event) => {
        let config = {
            headers: {
                authorization: sessionStorage.getItem('authorization'),
            }
        }
        $.get('/api/comments', config).then((data) => {
            this.setState({
                comments: data.data
            })
        })
    }

    componentDidMount() {
        this.renderComments()
    }

    changeHandler = (event) => {

        return this.setState({ [event.target.name]: event.target.value })
    }

    submitComment = (event) => {
        let config = {
            headers: {
                authorization: sessionStorage.getItem('authorization'),
            }
        }
        $.post('/api/comments', { text: this.state.newComment, gameId: 1 }, config)
            .then((data) => {
                this.renderComments()
                this.setState({ newComment: "" })
            })
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => {
                    return <MDBRow key={i} className="comments">
                        <MDBCol>
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardBody className = "cardBody">
                                    <MDBCardTitle>{comment.user.username}</MDBCardTitle>
                                    <MDBCardText className="white-text">
                                        {comment.text}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                })}
                <AddComment changeHandler={this.changeHandler} value={this.state.newComment} submitComment={this.submitComment} />
            </div>

        );
    }

}

export default Comments;