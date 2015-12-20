(function () {
    "use strict";
    /*
     * 4a.js
     * @Author: Brenton O'Callaghan
     * @Date: 11th December 2015
     * @Description: Challenge 4a of the Advent of Code challenge
     */
    
    /*global console, require*/
    
    // We require js-md5 - installed through the command 'npm install js-md5'
    var md5 = require('js-md5'),
        secretKey = 'iwrupvqb',
        nextFullKey = '',
        counter = 0,
        answerFound = false,
        currentHash = '',
        rightAnswer = '00000';
    
    // We keep searching until we find a matching hash with 00000 at the start.
    while (!answerFound) {
        
        // Build the full secret key with the current iteration number.
        nextFullKey = secretKey + counter;
        
        // Hash the secret key.
        currentHash = md5(nextFullKey);
        
        // If the first characters match our answer we are looking for then we have our answer and can break out.
        if (currentHash.substring(0, rightAnswer.length) === rightAnswer) {
            answerFound = true;
            break;
        }
        
        // Otherwise - we try again.
        counter = counter + 1;
    }
    
    // Finally - we output the answer.
    console.log("The correct hash was found during iteration: " + counter);
    
}());