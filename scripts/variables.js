/* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning (called 'hoisting') */
    var myName ;
    var myAge ;


    /* STEP 2: Initialize variables
    Don't confuse a variable with no value with one that doesn't exist at all */
    myName= "Simran";
    console.log(myName + " - " + typeof(myName));
    myAge=19;
    console.log(myAge + " - " + typeof(myAge));

    /* STEP 3: Updating variables
	Once a variable has been declared, this can be done any time */
    myAge=80;
    myAge="eighty";

    // STEP 4: Variable types
    // Numbers
    var num1=1876;
    console.log(num1 + " - " + typeof(num1));
    var num2=19.999;
    console.log(num2 + " - " + typeof(num2));

    // Strings (use '' or "")
    var st1="How are you?";
    console.log(st1 + " - " + typeof(st1));
    var st2="I am fine.";
    console.log(st2 + " - " + typeof(st2));

    // Booleans
    var bool1= true;
    var bool2= false;
    console.log(bool1 + " - " + typeof(bool1));
    console.log(bool2 + " - " + typeof(bool2));

    // Arrays
    var numArray=[10,20,30];
    var colorArray=["red","blue","green",50];

    // Objects
    var movieObj={
        movieName: "Star Wars",
        runTime: 120,
        leadWriter:{
            writer: "ABC XYZ",
            Writer2: "MNO PQR"
        }
    }

    // STEP 5: Typing (JavaScript is a loosely-typed language)
   
