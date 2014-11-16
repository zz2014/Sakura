function validateMusicForm ()
{
if(isValidInterpreter() && isValidAlbumtitel()  && isValidErscheinungsdatum() && isValidSongs())
return true;
else
return false;
}
	
	
	function isValidInterpreter()
	{ //return true;
		var input = document.forms["musicForm"]["interpreter"];
		var x= input.value;
		
		
	if(x == null || x == ""){
	
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");

	
		input.focus();
		input.className ="error";
	return false;
	}
	
	var ausdruck1 = /\S+/;
	var ausdruck2 = /\W+/;
	var ergebnis = ausdruck1.exec(x);
	var ergebnis2 = ausdruck2.exec(ergebnis);
	if(ergebnis2 != null)
	{
		input.focus();
		input.className ="error";
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		return false;
	}
	
	var a3 = /_/;
	var e3 = a3.exec(ergebnis);
	if(e3 != null)
	{
		input.focus();
		input.className ="error";
		alert("_");
		return false;
	}
	
	var a4 = /\d+/;
	var e4 = a4.exec(ergebnis);
	if(e4 != null)
	{
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		input.focus();
		input.className ="error";
		return false;
	}
	return true;
	
	}
	
	
	
	function isValidAlbumtitel()
	{
	//return true;
		var y = document.forms["musicForm"]["albumtitel"].value;
	if(y == null || y == ""){
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		input.focus();
		input.className ="error";
		return false;
	}
	
	var reg1 = /\S+/;
	var reg2 = /\W+/;
	var erg = reg1.exec(y);
	var erg2 = reg2.exec(erg);
	if(erg2 != null)
	{
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		input.focus();
		input.className ="error";
		return false;
	}
	var reg3 = /_/;
	var erg3 = reg3.exec(erg);
	if(erg3 != null)
	{
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		input.focus();
		input.className ="error";
		return false;
	}
	

var Woerter = y.split(" ");




	var i=0;
	while(i < Woerter.length)
	{
	
	
		var ausd = /\d+/;

		var word = Woerter[i];

		var ergeb = ausd.exec(word);
		if(ergeb != null)
		{
			var ausd2 = /\D+/;
			document.write(word);
			ergeb = ausd2.exec(word);
			document.write(ergeb);
			if(ergeb!=null)
			{
				alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
				input.focus();
				input.className ="error";
				return false;
			}
		}
		i++;
		
	}
	return true;
	
	}
	
	
	function isValidErscheinungsdatum()
	{ //return true;
		var z = document.forms["musicForm"]["musicerscheinungsjahr"].value;
	if(z == null || z == ""){
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		input.focus();
		input.className ="error";
		return false;
	}
	
	a=/\D+/;
	e=a.exec(z);
	if(e != null)
	{
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		input.focus();
		input.className ="error";
		return false;
	}
	if(z>2014)
	{
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
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
			if(!form.test(tempString)){// check if the string has the right form
			alertError(input);
			return false;
		}
	}
	
	return true;
	
	}
	function alertError(input){
		alert("Einige Eingaben sind fehlerhaft. Bitte ��berpr��fen Sie ihre Eingaben��");
		input.focus();
		input.className ="error";
}
	function removeClass(that){
	that.className="";
}
	
	
	
	