import { Meteor } from 'meteor/meteor';
import moment from 'moment';
//imports from api
import '/imports/api/methods.js';
import '/imports/api/blog/methods.js';






const date = moment(new Date()).format('DD-MM-YYYY');
console.log("this is the date : " + date);
