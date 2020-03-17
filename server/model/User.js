class User {
    // Creates an empty user
    constructor() {
         // The username of the user
         this.username;
         // The password of the user
         this.password;
         // The email of the user
         this.email;
         // The number of chips the user has
         this.chips;
         // The number of hands the user has won
         this.hands;
         // The last time this entry was updated
         this.lastUpdatedDate;
         // The time this entry was created
         this.createdDate;
    }

    // Creates a user with all fields populated
    CreateNewUser(username, password, email) {
        // The username of the user
        this.username = username;
        // The password of the user
        this.password = password;
        // The email of the user
        this.email = email;
        // The number of chips the user has
        this.chips = 100;
        // The number of hands the user has won
        this.hands = 0;
        // The last time this entry was updated
        this.lastUpdatedDate = new Date();
        // The time this entry was created
        this.createdDate = new Date();
    }

    /**
     * Copies the values of a User object into this User object
     * @param {User} userToCopy The user that is being copied into this User object
     */
    CopyUser(userToCopy) {
         // The username of the user
         this.username = userToCopy.username;
         // The password of the user
         this.password = userToCopy.password;
         // The email of the user
         this.email = userToCopy.email;
         // The number of chips the user has
         this.chips = userToCopy.chips;
         // The number of hands the user has won
         this.hands = userToCopy.hands;
         // The last time this entry was updated
         this.lastUpdatedDate = userToCopy.lastUpdatedDate;
         // The time this entry was created
         this.createdDate = userToCopy.createdDate;
    }
}

module.exports = User;