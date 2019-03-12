import React from "react";
import {  MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBCardBody } from 'mdbreact';
import { Link } from "react-router-dom";

const FormPage = (props) => {
    return (
     
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    Log in
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput icon = "user" onChange ={props.changeHandler} name = "username" value={props.Uservalue}label="Your username" group type="text"/>
                <MDBInput
                  label="Your password"
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
                    onClick = {props.LoginButton}
                
                  >
                    Log in
                  </MDBBtn>
                </div>
                <p className="font-small grey-text d-flex justify-content-center">
                  Don't have an account?
                  <Link
                    className="dark-grey-text font-weight-bold ml-1"
                    to={{
                        pathname: "/",
                        hash: "register"
                    }}
                  >
                    Sign up
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

    );
  };
  
  export default FormPage;