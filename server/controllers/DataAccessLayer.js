const fs = require('fs');
const lineReader = require('n-readlines');
const replace = require('replace-in-file');
let User = require("../model/User.js");

let cachedUsers = [];

/**
 * Returns the array of user objects that are stored in the local text file
 */
exports.ReadUsersFile = function() {
    // Create a new LineReader object
    let liner = new lineReader('data/Users.txt');
    // Declare an empty variable line
    let line;
    // While line.next() is not false, set line to line.next() and parse it
    while (line = liner.next()) {
        // Convert the buffer recieved to an ascii string
        let lineString = line.toString('ascii');
        // Split the string by a semicolon
        let splitLine = lineString.split(';');
        // Create a user object based upon the line read
        let user = new User();

        user.username = splitLine[0];
        user.password = splitLine[1];
        user.email = splitLine[2];
        user.chips = parseInt(splitLine[3]);
        user.hands = parseInt(splitLine[4]);
        user.lastUpdatedDate = new Date(splitLine[5]);
        user.createdDate = new Date(splitLine[6]);

        // Add the user object to the cachedUsers array
        cachedUsers.push(user);
    }
    // return cachedUsers
    return cachedUsers;
}

/**
 * Adds the newly created user to the local text file
 */
exports.AddUserToFile = function(user) {
    // Create a string to store in the text file as a user
    let userString = user.username + ";" + user.password + ";" + 
                     user.email + ";" + user.chips + ";" + 
                     user.hands + ";" + user.lastUpdatedDate.toISOString() + ";" 
                     + user.createdDate.toISOString() + ";\n";
    // Append the string to the text file
    fs.appendFileSync('data/Users.txt', userString);
}

/**
 * Updates the cache and local text file to update to represent all changes made to the User object passed in
 * @param {User} user The User object that has had values updated, cache and local file will update based on email and username
 */
exports.UpdateUser = function(user) {
    // Find the index in the cache for the original User object
    let index = cachedUsers.findIndex(x => x.username === user.username && x.email === user.email);
    // Get a pointer to the original User object
    let originalUser = cachedUsers[index];

    // Create a string that will be searched for within the text file
    let originalUserString = originalUser.username + ";" + originalUser.password + ";" + 
                             originalUser.email + ";" + originalUser.chips + ";" + 
                             originalUser.hands + ";" + originalUser.lastUpdatedDate.toISOString() + ";" 
                             + originalUser.createdDate.toISOString() + ";";

    // Create a new Date object to set the lastUpdatedDate's to
    let newLastUpdatedDate = new Date();

    // Create a new string to update the file to
    let newUserString = user.username + ";" + user.password + ";" + 
                        user.email + ";" + user.chips + ";" + 
                        user.hands + ";" + newLastUpdatedDate.toISOString() + ";" 
                        + user.createdDate.toISOString() + ";";

    // Create a regexp to find the correct contents to change
    const regex = new RegExp(originalUserString, "g");

    // Create an options object for the replace function
    let replaceOptions = {
        files: "data/Users.txt",
        from: regex,
        to: newUserString
    }

    // Replace the relevant contents of the text file (replace-in-file node package)
    replace(replaceOptions)
        .then(result => {
            // If no error occurred and the result states that the file was successfully changed
            if (result.hasChanged === true) {
                // Update the cache
                cachedUsers[index] = user;
                cachedUsers[index].lastUpdatedDate = newLastUpdatedDate;
            }
        })
        .catch(err => {
            // Log the error if the text file is not successfully updated
            console.log(err);
        });
        
}