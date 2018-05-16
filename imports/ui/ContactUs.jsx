import React, { Component } from 'react';
import MainHeader from './Header.jsx';
import { Session } from 'meteor/session';
export default class ContactUs extends Component{

    render(){

        return(
            <div>
                <MainHeader contact = "active"/>
                <h2>Our Contacts ContactUs page</h2>
                <img src={this.props._id} alt="This shoild be an image"/>
                <p>{Session.get('initialSession')}</p>
                <p>{Session.get('updating')}</p>
                
                
            </div>
        )
    }
}