	var counter = 0;
	
	function validateMusicForm ()
	{
		removeClass();
		var validInterpreter = isValidInterpreter();
		var validTitel = isValidAlbumtitel();
		var validDate = isValidErscheinungsdatum();
		var validSongs = isValidSongs();
		
		if(validInterpreter && validTitel  && validDate && validSongs)
		{
			
			counter = 0;
			return true;
		}
		else
		{
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
			counter = 0;
			return false;
		}
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
			alertError(input);
			return false;
		}
	
		a=/\D+/;
		e=a.exec(z);
		if(e != null)
		{
			alertError(input);
			return false;
		}
		if(z>2014)
		{
			alertError(input);
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
		if(counter <= 0)
		input.focus();
		
		input.className ="error";
		counter ++;
	}

	function removeClass(){
		document.forms["musicForm"]["interpreter"].className="";
		document.forms["musicForm"]["albumtitel"].className="";
		document.forms["musicForm"]["musicerscheinungsjahr"].className="";
		document.forms["musicForm"]["songs"].className="";
	}
	