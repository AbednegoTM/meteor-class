import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';
import Posts from '../api/blog/collections.js';
import MainHeader from './Header.jsx'

 class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            desc : 'value is',
            title : 'default Title',
            imgPath : '/imag.png'
        }
    }

    handleTitleChange = (e) => {
        this.setState(
            {
                title : e.target.value
            }
        );
    }

    handleDescChange = (e) => {
            this.setState({
                desc : e.target.value
            });
    }

    goToContacts = () => {
        route.go('contacts',{_id:this.state.imgPath},{});   
    }
    getAllPosts(){
        const mPosts = this.props.hkPosts;
        return mPosts.map((post) => {
            return ( 
            <div key ={post._id}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
            </div>
            )
        }
    );  
    }
    goToAbout = () => {
        route.go('/about'); 
    }
    handleSubmit = (e) =>{
        const post  = {
            title: this.state.title,
            desc : this.state.desc
        }
        Meteor.call('posts.create',post);
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <MainHeader home = "active"/>
                <h2>Our Home page</h2>
                <button onClick = {this.goToContacts}>Contact Us</button>
                <button onClick = {this.goToAbout}>About Us</button>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Title:
                        <input 
                        value = {this.state.title}
                        type="text" 
                        onChange = {this.handleTitleChange} />
                    </label>
                    <br/>
                    <label>
                        Description:
                    <textarea 
                            value={this.state.desc} 
                            onChange={this.handleDescChange} />
                    </label>
                    <br/>
                    <input type="submit" value="post" />
                </form>
                {this.getAllPosts()}
        </div>
        )
    }
}

export default withTracker(() => {
   Meteor.subscribe('posts');
    return {
        hkPosts : Posts.find().fetch(),
    };
})(Home);