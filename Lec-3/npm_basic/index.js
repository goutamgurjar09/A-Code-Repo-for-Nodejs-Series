const jokes = require('give-me-a-joke');
const figlet = require("figlet");
const colors = require('colors');

// jokes.getRandomDadJoke (function(joke) {
//     console.log(joke);
// });

figlet("Goutam", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
});

// PS C:\Users\HP\Desktop\node\Lec-3\npm_basic> node index.js  
//    ____             _
//   / ___| ___  _   _| |_ __ _ _ __ ___
//  | |  _ / _ \| | | | __/ _` | '_ ` _ \
//  | |_| | (_) | |_| | || (_| | | | | | |
//   \____|\___/ \__,_|\__\__,_|_| |_| |_|


