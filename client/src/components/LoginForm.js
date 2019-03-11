import React from 'react';

const Login = (props) => (
    <form className="container">
        <div className="form-group">
        <label htmlFor="exampleInputUsername">Username</label>
        <input className="form-control" value={props.Uservalue} name = "username" onChange={props.changeHandler} placeholder="Enter Username" />
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword">Password</label>
        <input type="password" className="form-control" value={props.Passvalue} name = "password" onChange={props.changeHandler} placeholder="Enter Password"/>
        </div>
        <button onClick={props.LoginButton}>Login</button>
    </form>
)

export default Login