// ASSIGNMENT TWO - PART TWO

// PART ONE - Math and Math Functions (5 points)
//Create a new web page and solve these JavaScript Math problems:

// STEP ONE Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
//
//var number = window.prompt("Pick a number, any number");
//window.console.log(Math.abs(number));

// STEP TWO Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
//
//var number = window.prompt("Pick a number, any number, but incude a decimal point. Then I will round it up.");
//window.console.log(Math.ceil(number));

// STEP THREE Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
//
//var number = window.prompt("Pick a number, any number, but incude a decimal point. Then I will round it down.");
//window.console.log(Math.floor(number));

// STEP FOUR Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
//
//var range = window.prompt("Choose a range of five numbers and list them with commas between. I will choose the high and low values amongst them.");
//var range = new Number();
//window.console.log(range);
//window.console.log(typeof range);
//window.console.log(Math.max(hilo));
//window.console.log(Math.min(hilo));

// STEP FIVE Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
//
//var number = window.prompt("Pick a number, any number, and I will compute it's square root");
//window.console.log(Math.sqrt(number));


// PART TWO - Date and Date Functions (6 points)
//Continue with the previously created web page and now solve these JavaScript Date problems:

// STEP ONE Create an application that gets the current date. Display that result within the console window.
//
//var today = new Date();
//window.console.log(today.toDateString());

//STEP TWO Create an application that gets the number of days in a month. Display that result within the console window.
//
//var month = new Date();
//switch (month.getMonth()) {
//case 0: case 2: case 4: case 6: case 7: case 9:
//    window.alert("This month has 31 days!");
//    break;
//case 1:
//    window.alert("This month has 28 days!");
//    break;
//case 3: case 5: case 8: case 10: case 12:
//    window.alert("This month has 30 days!");
//    break;        
//}

//STEP THREE Create an application that gets the month name from a particular date. Display that result within the console window.
//
//var month = new Date();
//switch (month.getMonth()) {
//case 0:
//    window.alert("This is the month of January!");
//    break;
//case 1:
//    window.alert("This is the month February!");
//    break;
//case 2:
//    window.alert("This month is March!");
//    break;        
//case 3:
//    window.alert("This month is April!");
//    break;        
//case 4:
//    window.alert("This month is May!");
//    break;        
//case 5:
//    window.alert("This month is June!");    
//    break;      
//case 6:
//    window.alert("This month is July!");
//    break;
//case 7:
//    window.alert("This month is August!");
//    break;
//case 8:
//    window.alert("This month is September!");
//    break;
//case 9:
//    window.alert("This month is October!");
//    break;
//case 10:
//    window.alert("This month is November!");
//    break;
//case 11:
//    window.alert("This month is December!");
//    break;
//}
        
// STEP FOUR Create an application that tests whether a date is a weekend. Display that result within the console window.
//
//var today = new Date();
//switch (today.getDay()) {
//case 0: case 5: case 6:
//    window.console.log("Party ON!!! It's the weekend!!!");
//    break;
//case 1: case 2: case 3: case 4:
//    window.console.log("Get back to work, drone!!!");
//    break;
//}

// STEP FIVE Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
//
//var today = new Date(-1);
//var yesterday = today.getDay();
//if (yesterday == 0) {
//    window.console.log("Today is Monday, but yesterday was Sunday.");
//} else if (yesterday == 1) {
//    window.console.log("Today is Tuesday, but yesterday was Monday.");
//} else if (yesterday == 2) {
//    window.console.log("Today is Wednesday, but yesterday was Tuesday.");
//} else if (yesterday == 3) {
//    window.console.log("Today is Thursday, but yesterday was Wednesday.");
//} else if (yesterday == 4) {
//    window.console.log("Today is Friday, but yesterday was Thursday.");
//} else if (yesterday == 5) {
//    window.console.log("Today is Saturday, but yesterday was Friday.");
//} else (yesterday == 6) {
//    window.console.log("Today is Sunday, but yesterday was Saturday.");
//}

// STEP SIX Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
//
//var d = new Date();
//var today = d.toDateString();
//window.console.log(today.slice(0, 1));


//PART THREE - Conditional Logic and Looping Operations (4 points)
//Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:

// STEP ONE Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
//
//var x = window.prompt("Pick an number.");
//var y = window.prompt("Pick another number.");
//if (x > y) {
//    window.console.log(x + ' is the higher number of the two');
//} else {
//    window.console.log(y + ' is the higher number of the two');
//}

// STEP TWO Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 

//Student Name	Marks
//Ursula	80
//Paul	77
//Henry	88
//Tabitha	95
//Lucy	68
//
//The grades are computed as follows:
//
//Range	Grade
//<60	F
//<70	D
//<80	C
//<90	B
//<100	A

// STEP THREE Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
//
//var i = 0;
//do {
//    i += 1;
//    if (i % 2 === 0) {
//        window.console.log("even");
//    } else {
//        window.console.log("odd");
//    }
//} while (i < 15);


// STEP FOUR Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
//
//var i = 0;
//do {
//    i += 1;
//    if (i % 3 === 0 && i % 5 !== 0) {
//        window.console.log("Fizz");
//    } else if (i % 5 === 0 && i % 3 !== 0) {
//        window.console.log("Buzz");
//    } else if (i % 3 === 0 && i % 5 === 0) {
//        window.console.log("FizzBuzz");
//    } else {
//        window.console.log(i);
//    }
//} while (i < 100);


//PART FOUR  - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:

//STEP ONE Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
//
//window.confirm("Are you ready to save the galaxy?!?");
//if (true) {
//    window.alert("Awesome, our hero is waiting!");
//} else {
//    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}

// STEP TWO Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
//Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
//Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
//
//window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");
//switch (direction) {
//case "forward":
//    window.alert("You walk about 100 yards and safely make your way out of the cave.");
//    break;
//case "left":
//    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//    break;
//case "right":
//    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//    break;
//default:
//    window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}

// STEP THREE Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
//Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
//
//var rating = window.prompt("Thanks for playing. Please rate your experience to let me feel good about myself.");
//if (rating > 5 && rating <=10) {
//    window.alert("Thank you, we will continue to make improvements to the game!");
//} else if (rating < 6) {
//    window.alert("Whatever, you weren’t very good at this game anyway!");
//} else {
//    window.alert("In my book thats a 10. thanks for the Kudos");
//}

// PART FIVE - The “Coin Flip” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:

// STEP ONE Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
//Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
//If the result is heads and the user selects heads, display the following message within an alert: 
//The flip was heads and you chose heads...you win!
//If the result is heads and the user selects tails, display the following message within an alert: 
//The flip was heads but you chose tails...you lose!
//If the result is tails and the user selects heads, display the following message within an alert: 
//The flip was tails but you chose heads...you lose!
//If the result is tails and the user selects tails, display the following message within an alert: 
//The flip was tails and you chose tails...you win!
//Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.
//
//var choice = window.prompt("Heads or Tails").toLowerCase();
//var coinFlip = Math.random();
//window.console.log(coinFlip);
//var result = Math.round(coinFlip);
//window.console.log(result);
//var result = (1);
//        
//if (choice == "heads" && result == true) {
//    window.alert("The flip was heads and you chose heads ... you win!");
//} else if (choice == "heads" && result == false) {
//    window.alert("The flip was tails and you chose heads ... you lose!");
//} else if (choice == "tails" && result == false) {
//    window.alert("The flip was heads and you chose tails ... you lose!");
//} else {
//    window.alert("The flip was tails and you chose tails ... you win!");
//}

//PART SIX - The “Coin Flip” Game Redux (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
//Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//Create a for loop that loops 10 times.
//Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
//
//var coinFlip;
//var i = 0;
//do {
//    i += 1;
//    coinFlip = Math.random();
//    var result = Math.round(coinFlip);
//    if (result === 1) {
//        window.console.log("Tails");
//    } else {
//        window.console.log("Heads");
//    }
//} while (i < 10);


//Part SEVEN - The “Coin Flip Streak” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
//Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//Create a do while loop.
//Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
//Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
//
//var coinFlip;
//var i = 0;
//do {
//    i += 1;
//    coinFlip = Math.random();
//    var result = Math.round(coinFlip);
//    if (result === 1) {
//        window.console.log("Tails");
//    } else {
//        window.console.log("Heads");
//    }
//} while (result === 0);

//Part EIGHT – Looping a Triangle (5 points)
//Write a loop that displays the following triangle within a console window:
//#
//##
//###
//####
//#####
//######
//#######
//
//var hash = ["#", "##", "###", "####", "#####", "######", "#######"];
//for (var x in hash) {
//    window.console.log(hash[x]);
//}

//Part NINE – Odd or Even? (5 points)
//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//Sample Output:
//"0 is even" 
//"1 is odd" 
//"2 is even"
//
//var i = -1;
//do {
//    i += 1;
//    if (i % 2 === 0) {
//        window.console.log(i + " is even");
//    } else {
//        window.console.log(i + " is odd");
//    }
//} while (i < 15);


