import { Meteor } from 'meteor/meteor';
import Posts from './collections.js';

Meteor.methods({
    'posts.create': (post) =>{
        Posts.insert(post);
    }
});

