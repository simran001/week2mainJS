var output = document.querySelector("p");
output.textContent = 10;

/* STEP 1: Creating Strings */
var st1 = 'Hello! How are you?';
output.textContent = st1;

// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */
var st2 = 'IT\'s cold outside';
var st2 = "It's cold outside";
output.textContent = st2; 

/* STEP 3: Concatenation */
output.textContent = st1 + " " + st2 + 50;
output.textContent = 50 + 50 + "hello";
output.textContent = "hello"+ 50 + 50;
/* STEP 4: Numbers and Strings */

// numbers can be converted to strings
output.textContent = "50" + 50;

// strings can be converted to numbers, too
var final = "50";
output.textContent = 50 + final; // strings only
output.textContent = 50 + Number(final); // string to number

// and back again, if we want
var final = 50;
output.textContent = final.toString() + String(final);