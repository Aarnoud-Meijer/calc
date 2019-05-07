$(function(){

	var calc ="", input = ""; // werkt ook
	var opperators = ['-', '+', '/', '*']

	$("input[type='button']").click(function(){

		if($.inArray(this.value, opperators) && this.value == input){
			console.log(input +" = "+ this.value);
		}

		if($.inArray(this.value, opperators)){
			//console.log(this.value);
		}

		// back function
		if(this.value=="back"){
			calc = calc.slice(0,calc.length-1);
			$("div#total").html(calc);
		}else if(this.value=="clear"){
			calc =""; // reset calc
			$("div#total").html(calc);
		}else{
			calc += this.value;
			$("div#total").html(calc);
		}

		input = this.value;
	});

	$('input[type="submit"]').click(function(){
			$("div#total").html(eval(calc));
	});

	// add keyboard dettection to calc
	document.addEventListener("keydown", function(event) {
		console.log(event.which);
		// if 48 tot 57
		
		// if 97 105
	});

});
