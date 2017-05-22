// determine what variable type each one is!!!!! 

var testOne = "what kind of variable is this?";
// testOne is a strings variable 

var testTwo = 256 ;
// testTwo is a numbers variable 

var testThree = [ "what", "kind", "of", "variable", "am", "i?" ];
//var testThree is a arrays variable 

var testFour = false ;
//var testFour is a booleans variable 

var testFive = [1, 2, 5] ;
//var testFive is a arrays variable

var testSix = 128; 
//var testSix is a numbers variable 

var testSeven = "what am i?" ;
// var testSeven is a strings variable 

var testEight = true ;
//var testFour is a booleans variable 

var testNine = ["what kind of variable is this?" , 2, 5,19] ;
//var testNine is a arrays variable 




// #4 Concatenation (combining things in JavaScript)

//4.1 given these variables 
var string1 = "Hello "; 
var string2 = "my name is "; 
var string3 = "your name here"; 
var combinedStrings = string1 + string2 + string3;

// i expect the console message to be "hello my name is your name here"

//4.2 given these variables 
var num1 = 8; 
var num2 = 52; 
var num3 = 60; 
var combinedNumbers = num1 + num2 + num3;
//i expect the console message to be 120

//4.3 given these variables 
var mixedNum1 = 10; 
var mixedString1 = "ten"; 
var mixedNum2 = "10"; 
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
//i expect the console messgae to be 1010ten

//#5 if/else if/else - checking for true or false
	//5.1  given these variables 
	var num4 = 5;
	var num5 = 0;


	if (num4 > 1 ) {
		console.log("num4 is greater than 1");
	}	else {
		console.log("num4 is not greater than 1");
	};
	//what do you expect the console message to be 
	// "num4 is greater than 1"

	//5.2 given these variables 
	var num4 = 5;
	var num5 = 0;

	if (num4 < num5 || num4 === num5) { 
	console.log("If statement ran!"); 
	} else if (num5 === "0" || true) { 
	console.log("Else if statement ran"); 
	} else { 
	console.log("Else statement ran"); 
	};

	//what do you expect the console message to be?
	// "else if statement ran"

//#6 for loop-looking into arrays
	//6.1 given this variable 
	var array1 = ["this", "is", "an", "array", "of", "strings"];

	for (var i = 0; i < array1.length; i = i + 1 ) {
		console.log (i, array1[i]);
	};

	//what do expect the statement to be?
	//0 "this"
	//1 "is"
	//2 "an"
	//3 "array"
	//4 "of"
	//5 "strings"

	//6.2 given these variables 
	var array2 = [1, 3, 5, 7, 9];
	var total = 0;

	for (var i = 0; i < array2.lenght; i = i + 1){
		total = total + array2[i];
	};

	console.log(total);

	/* 
	 num4 is greater than 1
	 Else if statement ran
	 0 "this"
	 1 "is"
	 2 "an"
	 3 "array"
	 4 "of"
	 5 "strings"
	 0 
	 */

	//6.3 given this variable 
	var array3 = [11, 33, 55, 77, 99];

	for (var i = 0; i < array2.length; i = i + 1) { 
	if(array3[i] >= 55 || array3[i] <= 100){ 
	console.log(array3, array3[i]); 
	}; 
	};
	/* (5) [11, 33, 55, 77, 99] 11
	   (5) [11, 33, 55, 77, 99] 33
	   (5) [11, 33, 55, 77, 99] 55
	   (5) [11, 33, 55, 77, 99] 77
	   (5) [11, 33, 55, 77, 99] 99
	  */

//#7 functions- making things happen 
	
	// 7.1 given this function 

	function testStuff (a, b) { 
		if(a > 25 && b < 100){ 
	 		console.log(a + " is greater than 25 and " + b + "is less than 100"); 
		} else { 
		  console.log(a + " is NOT greater than 25 or " + b + "is NOT less than 100"); 
	}; 
	};

		testStuff(10, 101);
		// 10 is NOT greater than 25 or 101 is NOT less than 100

		testStuff(26, 99);
		// 26 is greater than 25 and 99 is less than 100  

		testStuff(100, 25);
		// 100 is greater than 25 and 25is less than 100

	// 7.2 given this function 

		function testStuff2(c, d) { 
			if(c == 25){ 
				console.log(c + " is equal to 25"); 
		} 	else if(d <= 100){ 
				console.log(d + " is less than or equal to 100"); 
		} 	else { 
				console.log("Neither if or else if statement ran"); 
		}; 
		};

		testStuff2(26, 101); 
		// Neither if or else if statement ran
		testStuff2(25, 99); 
		// 25 is equal to 25
		testStuff2(102, 24);
		// 24 is less than or equal to 100
				
		
		




