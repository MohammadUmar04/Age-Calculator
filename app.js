
var DOBString = prompt("Write your birthday (yyyy-mm-dd):");
var DOB = new Date(DOBString);
var now = new Date().getTime();
var ageInMilliseconds = now - DOB.getTime();
var ageinyears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
document.write("Your age is approximately: " + Math.floor(ageinyears) + " years");




