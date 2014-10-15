/*
Write a program using JavaScript that prints the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and 
for the multiples of five print "Buzz". For numbers which are 
multiples of both three and five print "FizzBuzz".
*/
function printAll(from, to) {
	var f = parseInt(from, 10);
	var t = parseInt(to, 10);

	while (f <= t){
		var toP = f
		if(threeFive(f)){
			toP = "FizzBuzz"
		}
		else if(five(f)){
			toP = "Buzz"
		}
		else if(three(f)){
			toP = "Fizz"
		}
		process.stdout.write(toP.toString()+"\n");
		f += 1;
	}
}

function three(p) {
	if((p % 3) == 0) {
		return true;
	}
	else{
		return false;
	}
}

function five(p) {
	
	if((p % 5) == 0){
		return true;
	}
	else{
		return false;
	}         
}

function threeFive(p) {
	
	if(three(p) && five(p)) {
		return true;
	}
	else{
		return false;
	}
}

printAll("1", "100");
