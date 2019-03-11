import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBCardBody } from 'mdbreact';

const FormPage = (props) => {
    return (
      <MDBContainer className="Login">
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    Sign up
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput icon = "user" onChange ={props.changeHandler} name = "username" value={props.Uservalue}label="Enter Username" group type="text"/>
                <MDBInput
                  label="Enter password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={props.changeHandler}
                  value={props.Passvalue}
                  name= "password"
                  icon="lock"
                />
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    color="danger"
                    type="button"
                    className="btn-block z-depth-2"
                    onClick ={props.SignupButton}
                  >
                    Sign Up
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
  
  export default FormPage;