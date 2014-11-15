function validateMusicForm ()
{
if(isValidInterpreter() && isValidAlbumtitel()  && isValidErscheinungsdatum() && isValidSongs())
return true;
else
return false;
}
	
	
	function isValidInterpreter()
	{ return true;
		var x = document.forms["musicForm"]["interpreter"].value;
		
		
	if(x == null || x == ""){
	alert("„Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
		return false;
	}
	
	var ausdruck1 = /\S+/;
	var ausdruck2 = /\W+/;
	var ergebnis = ausdruck1.exec(x);
	var ergebnis2 = ausdruck2.exec(ergebnis);
	if(ergebnis2 != null)
	{
		alert("„Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
		return false;
	}
	
	var a3 = /_/;
	var e3 = a3.exec(ergebnis);
	if(e3 != null)
	{
		alert("_");
		return false;
	}
	
	var a4 = /\d+/;
	var e4 = a4.exec(ergebnis);
	if(e4 != null)
	{
		alert("numbers");
		return false;
	}
	return true;
	
	}
	
	
	
	function isValidAlbumtitel()
	{
	return true;
		var y = document.forms["musicForm"]["albumtitel"].value;
	if(y == null || y == ""){
		alert("y");
		return false;
	}
	
	var reg1 = /\S+/;
	var reg2 = /\W+/;
	var erg = reg1.exec(y);
	var erg2 = reg2.exec(erg);
	if(erg2 != null)
	{
		alert("y sonderzeichen");
		return false;
	}
	var reg3 = /_/;
	var erg3 = reg3.exec(erg);
	if(erg3 != null)
	{
		alert("_");
		return false;
	}
	

var Woerter = y.split(" ");




	var i=0;
	while(i < Woerter.length)
	{
	
	
		var ausd = /\d+/;

		var word = Woerter[i];

		var ergeb = ausd.exec(word);
		document.write(ergeb);
		alert("nösc");
		if(ergeb != null)
		{
		alert("nös");
			var ausd2 = /\D+/;
			alert("nö");
			document.write(word);
			ergeb = ausd2.exec(word);
			document.write(ergeb);
			alert("n");
			if(ergeb!=null)
			{
				alert("y");

				return false;
			}
		}
		i++;
		
	}
	alert("nöscht");
	return true;
	
	}
	
	
	function isValidErscheinungsdatum()
	{ return true;
		var z = document.forms["musicForm"]["musicerscheinungsjahr"].value;
	if(z == null || z == ""){
		alert("z");
		return false;
	}
	
	a=/\D+/;
	e=a.exec(z);
	if(e != null)
	{
		alert("Pech");
		return false;
	}
	if(z>2014)
	{
		alert("too late");
		return false;
	}
	return true;
	
	}
	
	
	function isValidSongs()
	{
		alert("hmm");
		var z = document.getElementById("taSongs");
		document.write(z);
		z= z.value;
		document.write(z);
		alert("hmm");
	if(z == null || z == "")
	{
		alert("z");
		return false;
	}
	alert("nix");
	
	}
	
	
	
	
