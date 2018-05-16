import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';
import Posts from '../api/blog/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import MainHeader from './Header.jsx';
import FileUploadComponent from './upload.jsx';

import { Session } from 'meteor/session';

 class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            desc : 'value is',
            title : 'Session Title',
            imgPath : '/imag.png'
        }
    }
    showImages(){
        const mFiles = this.props.files;

        return mFiles.map((file) => {
            const link = UserFiles.findOne({_id:file._id}).link();
            return ( 
            <div key ={file._id}>
                <p>{file.name}</p>
                <img src={link} height="200" width="200"></img>
            </div>
            )
        }
    );  
    }

    UNSAFE_componentWillMount(){
        Session.set('initialSession',this.state.title); 
        Session.set('updating',this.state.title);
    }

    // componentDidMount(){
    //     Session.set('blogTitle',this.state.title); 
    // }

    componentDidUpdate(){
        Session.set('updating',this.state.title); 
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
                <FileUploadComponent fileName = {this.state.title}/>
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
                {/* {this.getAllPosts()} */}
                <div className="imagesContainer" >
                    {this.showImages()}                        
                </div>
        </div>
        )
    }
}

export default withTracker(() => {
   Meteor.subscribe('posts');
   Meteor.subscribe('files.all');
    return {
        hkPosts : Posts.find().fetch(),
        files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    };
})(Home);