import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';
import MainHeader from './Header.jsx';




export default class Login extends Component {

    constructor(props){
        super(props);

        this.state  = {
            email: '',
            password: '',
            err: ''
        }
    }


    handleEmail = (e)=>{
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
handleSubmit = (e)=>{
    const email = this.state.email;
    const password = this.state.password;

    Meteor.loginWithPassword(email,password,(err,res)=>{
        //check if fields are blank
        if(this.state.email === ''|| this.state.password === ''){
            this.setState({
                err: 'Fill all fields'
            })
        } else if(err){ //if fields are not blank check for errors 
            this.setState({
                err: err.reason
            })
        } else {
            route.go('/');
        }
        console.log(err, res);
    });
    e.preventDefault();
}
    render(){
        return (
                <div>
                    <MainHeader Login_Register = "active"/>
                <h4>LOGIN</h4>

                <p style ={{color: 'red'}}>{this.state.err}</p>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Email:
                        <input onChange={this.handleEmail} placeholder="Email" type="email" />
                    </label>
                    <br/>
                    <label>
                        password:
                        <input onChange={this.handlePassword}  placeholder="password" type="password" />
                    </label>
                    <br/>
                    <input className = "waves-effect waves-light btn" type="submit" value="Login" />
                </form>

                <p>Dont have account </p> <a href="/register">Register</a>

                </div>
            
        )
    }
}