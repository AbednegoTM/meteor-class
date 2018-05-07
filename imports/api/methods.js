import { Meteor } from 'meteor/meteor';

// Meteor.methods({
//         'sayHello':() =>{
//             console.log("hello from a meteor method");
//             return "i am the return";
//         },

Meteor.methods({
    'printSomething':(arrItems) => {
        console.log(`The message is :  ${arrItems[0]} ${arrItems[1]} ${arrItems[2]}`);
        return arrItems;
    },
    'alertSomething' : () => {
        console.log("alerting to the client . . .");
    }
 });




