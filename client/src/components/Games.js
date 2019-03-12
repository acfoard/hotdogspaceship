import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Game = (props) => {
    return (
        <MDBCol>
          <MDBCard addclass='cardMargin' style={{ width: "Auto" }}>
            <MDBCardBody>
              <MDBCardTitle>{props.title}</MDBCardTitle>
              <MDBCardText>
              <b>Type:</b> {props.type} 
              </MDBCardText>
              <MDBCardText>
              <b>Description:</b> {props.description}
              </MDBCardText>
               <MDBBtn addclass='playButton' href={props.id}>Play This Game</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      )
}

export default Game;