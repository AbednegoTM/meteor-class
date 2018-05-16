import { Meteor } from 'meteor/meteor';
import Posts from './collections.js';
import { check } from 'meteor/check'

Posts.allow({
    insert: () => false,
	update: () => false,
	remove: () => false
})

Meteor.methods({
    'posts.create': (post) =>{
        check(post, Object);
        Posts.insert(post);
    }
});

