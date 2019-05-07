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
		//console.log(event.which);
		
		if(event.which >= 48 && event.which <= 57){ // if 48 tot 57
			console.log("1e: " + event.which);
			calc += event.which;
			$("div#total").html(calc);
		}else if(event.which >= 97 && event.which <= 105){ // if 97 105
			console.log("2e: " + event.which);
			calc += event.which;
			$("div#total").html(calc);
		}
	});

});
