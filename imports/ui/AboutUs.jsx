import React, { Component } from 'react';
import MainHeader from './Header.jsx'

export default class AboutUs extends Component{
    
    render(){
        return(
            <div>
                <MainHeader about = "active"/>
                <h2>Our About Us page</h2>
            </div>
        )
    }
}