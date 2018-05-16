import React, { Component } from 'react';

export default class MainHeader extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemName : '',
            route: ''
        }
    }

    componentDidMount(){
        //determine item to show on mount wether logout or or login
        if(Meteor.userId.length !== 0){
            this.setState({
                itemName: 'Logout',
                route: '/'
            })
        } else{
            this.setState({
                itemName: 'Login',
                 route: '/login'
            })
        } 
    } 

    handleLR =(e)=>{
        if(Meteor.userId.length !== 0){
            const currentpath = route.current.path;
            this.setState({
                itemName: 'Logout',
                route: currentpath
            })
            Meteor.logout();
        } else{
            this.setState({
                itemName: 'Login',
                 route: '/login'
            })
        } 
    }
    componentDidUpdate(){
        
    }

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
                        <li>
                            <a href={this.state.route} onClick={this.handleLR} className ={`${this.props.Login_Register}`}>{this.state.itemName}</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}