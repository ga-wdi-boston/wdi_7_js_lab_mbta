// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;
/*
startingLine = prompt("Enter the Starting Line: ");
console.log(startingLine);
startingStation = prompt("Enter the Starting Station");
console.log(startingStation);
endingLine = prompt("Enter the Ending Line");
console.log(endingLine);
endingStation =  prompt("Enter the Ending Station");
console.log(endingStation);

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);
*/
// Create a array for each line
lines = {
  'green':{'haymarket':-2, 'government center':-1, 'park st':0, 'bolyston':1, 'arlington':2, 'copley':3},
  'red': {'south station':-1, 'park st':-0, 'kendall':1, 'central':2, 'harvard':3, 'porter':4, 'davis':5, 'alewife':6},
  'orange': {'north station':-2, 'haymarket':-1, 'park st':0, 'state':1, 'downtown crossing':2, 'chinatown':3, 'back bay':4, 'forest hills':5}
};


function tester(startingLine,startingStation,endingLine,endingStation){
  if (startingLine!==endingLine){
    lines[endingLine][endingStation] = -(Math.abs(lines[endingLine][endingStation]));
  }
  console.log(Math.abs(lines[startingLine][startingStation] - lines[endingLine][  endingStation]));
}

tester('red','alewife','green','haymarket');
tester('red','alewife','red','south station');
tester('red','alewife','green','copley');
tester('red','alewife','red','park st');
tester('red','alewife','orange','north station');
