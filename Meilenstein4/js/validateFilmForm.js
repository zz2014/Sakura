//to validate the input according to the id of the table
function validateForm(){
		if(checkFilmForm()){
		//redirect the window to php page
			window.location = "http://martinakraus.net/immdb.php";
			return true;
		} else{
		// stop redirecting
			return false;
		}
}

function checkFilmForm(){
	// check titel with regular expression
	//only number and alphabet are allowed
	var input = document.forms["filmform"]["filmtitel"];
	tempString = input.value;
	var formLetter = /^[a-zA-Z]+$/;
	var formNumber = /^[0-9]+$/;
	if (tempString.indexOf(' ') > -1) { 	// check if there is " " in the input
			titleParts = tempString.split(' ');		// if yes, split into strings
		for(var part of titleParts){			// check if every string has the right form
			if(!formLetter.test(part.trim())){//if the part string are made of letters
				if(!formNumber.test(part.trim()))// if the part string are only made of numbers
					{alertError(input);
					return false;}
			}
		}
	}else{// if there is no comma in string
			if(!formLetter.test(tempString.trim())){// check if the string has the right form
				if(!formNumber.test(tempString.trim()))
					{alertError(input);
					return false;}
		}
	}
		
	//check regie
	//two alphabet string separated from a space
 	input = document.forms["filmform"]["regie"];
	form = /^[a-zA-Z]+\s[a-zA-Z]+$/;
	 if(!form.test(input.value)){
	 	alertError(input);
		return false;
	 }
	 
	 //check drehbuch
	 //two alphabet string separated from a space
	 input = document.forms["filmform"]["drehbuch"];
	form = /^[a-zA-Z]+\s[a-zA-Z]+$/;
	 if(!form.test(input.value)){
	 	alertError(input);
		return false;
	 }
	 
	 //check erscheinungsjahr
	 //only 4 digit number, can't be larger than current year
	 input = document.forms["filmform"]["filmerscheinungsjahr"];
	 var currentYear = new Date().getFullYear();
	 form = /^\d{4}$/;
	 if(!form.test(input.value)){
	 	alertError(input);
		return false;
	 } 
	 if(input.value>currentYear){
		alertError(input);
		return false;
		}
	
	//check schauspieler
	input = document.forms["filmform"]["schauspieler"];
	form = /^[a-zA-Z]+\s[a-zA-Z]+$/;//name+space+name
	var tempString = input.value;
	var names;
	if (tempString.indexOf(',') > -1) { 	// check if there is comma in the input
		names = tempString.split(',');		// if yes, split into strings
		for(var name of names){			// check if every string has the right form
			if(!form.test(name.trim())){//remove leading space and trailing space
			alertError(input);
			return false;
			}
		}
	}else{// if there is no comma in string
			if(!form.test(tempString.trim())){// check if the string has the right form
			alertError(input);
			return false;
		}
	}
	
	return true;
}

function alertError(input){
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
		input.focus();
		input.className ="error";
}

function removeClass(that){
	that.className="";
}