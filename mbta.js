// Code here.
var startingLine,
		startingStation,
		endingLine,
		endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// Create a array for each line
var lines = {
  "green": ["haymarket", "government center", "park st", "boylston", "arlington", "copley"],
  "red": ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  "orange": ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

// This function finds the distance to or from park st

var distance_to_or_from_park_st = function (lines, line, station) {
	// get index of starting point
	var index_of_starting_or_ending_point = lines[line].indexOf(station);

	// get index of park st
	var index_of_park_st = lines[line].indexOf("park st");

	// subtract: absolute value of index minus index
	return Math.abs(index_of_starting_or_ending_point - index_of_park_st);
};

// This function finds the distance on a single line

var distance_on_one_line = function (lines, line, start_station, end_station) {
	// get index of starting point
	var index_of_starting_point = lines[line].indexOf(start_station);

	// get index of ending point
	var index_of_ending_point = lines[line].indexOf(end_station);

	// subtract: absolute value of index minus index
	return Math.abs(index_of_starting_point - index_of_ending_point);
};

// This function finds the total distance

var distance_to_park_st,
		distance_from_park_st,
		get_total_distance,
		total_distance;

// is it generally better to define vars outside of a function, or within the function itself?

get_total_distance = function (lines, startingLine, endingLine, startingStation, endingStation) {
	// if the journey is on a single line
	if (startingLine === endingLine) {
		return total_distance = distance_on_one_line(lines, startingLine, startingStation, endingStation);
	// if journey involves a transfer
	}else {
		distance_to_park_st = distance_to_or_from_park_st(lines, startingLine, startingStation);
		distance_from_park_st = distance_to_or_from_park_st(lines, endingLine, endingStation);
		return total_distance = distance_to_park_st + distance_from_park_st;
	}
};

// Calculate actual distance in this case

get_total_distance(lines, startingLine, endingLine, startingStation, endingStation);

// Output the result to the console

console.log("Starting at " + startingLine + ": " + startingStation);
console.log("Ending at " + endingLine + ": " + endingStation);
console.log("Total distance: " + total_distance);
