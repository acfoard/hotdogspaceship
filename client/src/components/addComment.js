import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const AddComment = (props) => {
    return <div>
        <MDBInput label="Comments" icon="edit" value={props.value} onChange={props.changeHandler} name="newComment"/>
        <MDBBtn onClick={props.submitComment} color="danger">Add Comment</MDBBtn>
    </div>
}

export default AddComment; 