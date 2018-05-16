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
            passwordConfirm: '',
            err: ''
        }
    }

    handleEmail=(e) =>{
        this.setState({
            email: e.target.value
        })
    }
    handlePassword=(e)=>{
        this.setState({
            password: e.target.value
        })
    }
    handleConfirmPassword=(e)=>{
        this.setState({
            passwordConfirm: e.target.value
        })
    }
    handleSubmit =(e)=>{
        const email = this.state.email;
        const password = this.state.password;
        const passwordConfirm = this.state.passwordConfirm;
    
        //check if fields are blank
        if(this.state.email === ''|| this.state.password === ''){
            this.setState({
                err: 'Fill all fields'
            })
        } else if(password !== passwordConfirm){
            this.setState({
                err: 'password mismatch'
            })
        }
        Meteor.call('user.register', email, password, (err, result) => {
            console.log(err, result)
        });
        e.preventDefault();
    }
    render(){
        return (
            <div>
                {/* <MainHeader Login_Register = "active"/> */}
                <h4>REGISTER</h4>
                <p style ={{color: 'red'}}>{this.state.err}</p>

                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Email:
                        <input 
                            placeholder = "Email"
                            type="email" 
                            onChange = {this.handleEmail} />
                    </label>
                    <label>
                        password:
                        <input 
                            placeholder = "password"
                            type="password" 
                            onChange = {this.handlePassword} />
                    </label>
                    <label>
                        confirm password:
                        <input 
                            placeholder = "confirm password"
                            type="password" 
                            onChange = {this.handleConfirmPassword} />
                    </label>
                    <br/>
                    <input className = "waves-effect waves-light btn" type="submit" value="post" />
                </form>


            </div>
        )
    }
}