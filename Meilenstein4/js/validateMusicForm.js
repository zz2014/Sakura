	function validateMusicForm ()
	{
		if(isValidInterpreter() && isValidAlbumtitel()  && isValidErscheinungsdatum() && isValidSongs())
			return true;
		else
			return false;
	}
	
	function isValidInterpreter()
	{
		var input = document.forms["musicForm"]["interpreter"];
		var form = /^[a-zA-ZäüöÄÜÖß]+(\s[a-zA-ZäöüÄÖÜß]+)*$/;
		if(!form.test(input.value)){
			alertError(input);
			return false;
		}
		return true;
	}

	function isValidAlbumtitel()
	{
		var input = document.forms["musicForm"]["albumtitel"];
		tempString = input.value;
		var formLetter = /^[a-zA-ZäöüÄÖÜß]+$/;
		var formNumber = /^[0-9]+$/;
		if (tempString.indexOf(' ') > -1) { 				// check if there is " " in the input
			titleParts = tempString.split(' ');				// if yes, split into strings
			for(var part of titleParts){					// check if every string has the right form
				if(!formLetter.test(part.trim())){			//if the part string are made of letters
					if(!formNumber.test(part.trim())){		// if the part string are only made of numbers
						alertError(input);
						return false;}
				}
			}
		}else{												// if there is no comma in string
			if(!formLetter.test(tempString.trim())){		// check if the string has the right form
				if(!formNumber.test(tempString.trim())){
					alertError(input);
					return false;
				}
			}
		}
		return true;
	}
	
	function isValidErscheinungsdatum()
	{ 
		var input = document.forms["musicForm"]["musicerscheinungsjahr"];
		var z = input.value;
		if(z == null || z == ""||!/^\d{4}$/.test(z)){
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
			input.focus();
			input.className ="error";
			return false;
		}
	
		a=/\D+/;
		e=a.exec(z);
		if(e != null)
		{
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
			input.focus();
			input.className ="error";
			return false;
		}
		if(z>2014)
		{
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
			input.focus();
			input.className ="error";
			return false;
		}
		return true;
	}
	
	function isValidSongs()
	{
		var input = document.forms["musicForm"]["songs"];
		var form = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/
		var tempString = input.value;
		var songs;
		if (tempString.indexOf(',') > -1) { 	// check if there is comma in the input
			songs = tempString.split(',');		// if yes, split into strings
			for(var song of songs){			// check if every string has the right form
				if(!form.test(song.trim())){//remove leading space and trailing space
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
	