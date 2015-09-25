// ASSIGNMENT TWO - PART ONE

// STEP ONE           Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
//
//var name = window.prompt("What is your first name?");
//window.alert("There are " + name.length + " letters in your first name");


// STEP TWO Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
//
//var name = window.prompt("What is your first name?");
//var number = window.prompt("Pick a number between 1 and " + name.length);
//if (number <= name.length && number > 0) {
//    window.alert("The letter corresponding to the number " + number + " is " + name.charAt(number - 1));
//} else {
//    window.alert("That number is too high. Refresh and pick a number between 1 and " + name.length);
//}


// STEP THREE Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
//
//var name = window.prompt("What is your first name?");
//var surname = window.prompt("What is your last name?");
//    window.alert("Your name is " + name + " " + surname);


// STEP FOUR Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
//
//var phrase = ("The quick brown fox jumps over the lazy dog.");
//window.alert(phrase.indexOf("fox"));


// STEP FIVE Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
//
//var phrase = ("The quick brown fox jumps over the lazy fox.");
//window.alert(phrase.lastIndexOf("fox"));


// STEP SIX Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
//
//var phrase = ("The quick brown fox jumped over the lazy dog.");
//var name = window.prompt("What is your first name?");
//var surname = window.prompt("What is your last name?");
//window.alert(phrase.replace("the lazy dog", "lazy " + name + " " + surname));


// STEP SEVEN Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
//
//var phrase = ("The quick brown fox jumped over the lazy dog.");
//var choice = window.prompt('Choose a word from the phrase "The quick brown fox jumped over the lazy dog."');
//var valid = phrase.search(choice);
//window.console.log(valid);
//if (0 <= valid) { 
//    window.alert(choice + ". " + "An excellent choice.");
//} else {
//    window.alert("The word " + choice + " is not part of the phrase. Refresh and try again.");


// STEP EIGHT Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
//
//var old_string = ("The quick brown fox jumped over the lazy dog.");
//var begin = old_string.lastIndexOf("the");
//var new_string = (old_string.slice(begin, 0));
//window.alert(new_string);


// STEP NINE Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.the quick brown fox jumps over the lazy dog
//
//var phrase = ("           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "););
//var new_phrase = (phrase.trim());
//window.alert(new_phrase.toLowerCase());


// STEP TEN Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
//
//var phrase = ("the quick brown fox jumps over the lazy dog");
//window.alert(phrase.replace("the", "The"));

