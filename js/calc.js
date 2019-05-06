$(function(){
	//var calc = "";
	var calc, input;
	var opperators = ['-', '+', '/', '*']

	//opperators.indexOf(this.value);

	$("input[type='button']").click(function(){
		
		if($.inArray(this.value, opperators) && input == this.value){
			console.log(input +" = "+ this.value);
		}
		//console.log($.inArray(this.value, opperators));
		//console.log(opperators[5]);
		// if(opperators.indexOf(this.value)){
		if($.inArray(this.value, opperators)){
			//console.log(this.value);
			
		}
		
		// back function

		if(this.value=="clear"){
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

});
