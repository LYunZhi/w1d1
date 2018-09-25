/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
function joinList (array) {
    var result = ''

    for (var i = 0; i < array.length; i++) {
        if (i != array.length - 1) {
            result += array[i] + ', '
        } else {
            result += array[i]
        }
    }
    
    return result
}

var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

