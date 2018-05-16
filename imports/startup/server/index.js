import { Meteor } from 'meteor/meteor';
import moment from 'moment';
//imports from api
import '/imports/api/methods.js';
import '/imports/api/blog/methods.js';
import '/imports/api/blog/server/publications.js'
import '/imports/api/users/methods.js';
import '/imports/api/upload/collections.js';
import '/imports/api/upload/server/publications.js'






const date = moment(new Date()).format('DD-MM-YYYY');
console.log("this is the date : " + date);
