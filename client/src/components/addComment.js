import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const AddComment = (props) => {
    return <div>
        <MDBInput label="Comments" icon="edit" />
        <MDBBtn color="primary">Primary</MDBBtn>
    </div>
}

export default AddComment;