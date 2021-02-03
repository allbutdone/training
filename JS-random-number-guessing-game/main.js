var UserNumber =10;
var counter=0;
var MaxTries=5;
var RandNum=Math.floor(Math.random()*UserNumber)+1;

var counter=0;
while(Attempts != RandNum){
    var Attempts=prompt("Please pick a number between 1 and " +UserNumber);
    counter += 1;

    if(counter>MaxTries){
       
        document.write("You have no more Tries left. Press F5 to Play again");
        break
    }
    if(Attempts== RandNum){
        document.write("Congratulate You have the correct number");
        document.write("<p>The random number was "+RandNum+ "</p>");
        document.write("<p>It took you "+counter+ " attempts</p>");
    }
}