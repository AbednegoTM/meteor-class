import React, { Component } from 'react';

export default class MainHeader extends Component{

    render(){

        return(
            <div>
                 <nav>
                    <div className="nav-wrapper">
                    <a href="/">AMT</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="/contact" className ={`${this.props.contact}`} >contacts</a>
                        </li>
                        <li>
                            <a href="/about" className ={`${this.props.about}`}>About</a>
                        </li>
                        
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}