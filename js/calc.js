// $(document).ready(function(){
$(function(){
	var calc = "";

	$("input[type='button']").click(function(){
		// console.log(this.value);
		if(this.value=="clear"){
			calc ="";
			$("div#total").html(calc);
		}else{

			calc += this.value;
			$("div#total").html(calc);
		}
	});

	$('input[type="submit"]').click(function(){
		// console.log(eval(calc));
		// eval using
		
		//if(this.value=="="){
			calc = eval(calc);
			$("div#total").html(eval(calc));
		//}
	});

});
