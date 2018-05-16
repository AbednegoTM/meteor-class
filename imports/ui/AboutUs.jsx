import React, { Component } from 'react';
import MainHeader from './Header.jsx'
import { Session } from 'meteor/session';

export default class AboutUs extends Component{
    
    render(){
        return(
            <div>
                <MainHeader about = "active"/>
                <h2>Our About Us page</h2>
                <p>{Session.get('initialSession')}</p>
                <p>{Session.get('updating')}</p>
            </div>
        )
    }
}