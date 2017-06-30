// Sum of two numbers
// Time Complexity: 2N Linear Time
// Linear Solution

var getSum = function(a,b){
	var low = 0;
	var high = 0;
	var array = [];
	var sum = 0;

	if (arguments.length < 2){
		return "There must be two arguments to sum!"
	}

	if (typeof a !== 'number' || typeof b !== 'number' ) {
		return "You must enter a valid number!"
	}

	if (a > b){
		low = b;
		high = a;
	} else {
		low = a;
		high = b;
	}

	//Populate array with all numbers
	for (var i = low; i <= high; i++){
		array.push(i)
	}

	//Add up all the array values
	for (var j = 0; j < array.length; j++){
		sum = sum + array[j];
	}

	return sum;

}
