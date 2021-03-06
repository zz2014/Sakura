
var filmselected = true;
var musicselected = false;

//two tables will be built when loading the page
function init(){
buildMusicTable();
buildFilmTable();
document.getElementById("rightbox").style.background="rgb(0,162,232)";
document.getElementById("rightbox").firstElementChild.style.color="black";
document.getElementById('filmTable').style.display = "table";
document.getElementById('musicTable').style.display = "none";
}

function unhover (that)
{
	var box;
	
	if(that.id == "leftbox" && musicselected == false)		//cancels hover effect of the left box
	{
		box = document.getElementById("leftbox");
		box.style.backgroundColor = "rgb(26,32,94)";
		box.firstElementChild.style.color = "white";
	}
	else{
		if(that.id == "rightbox" && filmselected == false)		//cancels hover effect of the right box
		{
			box = document.getElementById("rightbox");
			box.style.backgroundColor = "rgb(26,32,94)";
			box.firstElementChild.style.color = "white";
		}
	}
}

// changes the colors of the boxes
function hover(that)
{
	var box;
	
	if(that.id == "leftbox" && musicselected == false)
	{
		box = document.getElementById("leftbox");
		box.style.backgroundColor = "rgb(165, 169, 230)";
		box.firstElementChild.style.color = "black";
	}
	else{
		if(that.id == "rightbox" && filmselected == false)
		{
			box = document.getElementById("rightbox");
			box.style.backgroundColor = "rgb(165, 169, 230)";
			box.firstElementChild.style.color = "black";
		}
	}
}

//switches between music table and film table
function switchlist (that){
	var music = document.getElementById("leftbox");
	var film = document.getElementById("rightbox");
	
	if(that.id == "rightbox"){									//if right box is selected
		music.style.background="rgb(26,32,94)";
		film.style.background="rgb(0,162,232)";
		music.firstElementChild.style.color ="white";
		film.firstElementChild.style.color ="black";
		document.getElementById('filmTable').style.display = "table";
		document.getElementById('musicTable').style.display = "none";
		filmselected = true;
		musicselected = false;
	} else{  
		film.style.background="rgb(26,32,94)";
		music.style.background="rgb(0,162,232)";
		music.firstElementChild.style.color ="black";
		film.firstElementChild.style.color ="white";
		document.getElementById('filmTable').style.display = "none";
		document.getElementById('musicTable').style.display = "table";
		filmselected = false;
		musicselected = true;
	}
}

//append table heads and data to the table
function buildFilmTable(){
	var filme = filmdata["Filme"];
	var myTable = document.getElementById('filmTable');
	buildTable(filme, myTable);
}
	
//append table heads and data to the table
function buildMusicTable(){
	var alben = musicdata["Alben"];
	// get table element from html
	var myTable = document.getElementById('musicTable');
	buildTable(alben, myTable);
}

function buildTable(data, table){
	// add all the table heads first
	addTableHeads(data,table);
	// get all the keys
	var heads = getHeads(data);
	// loop through the list and add the value of keys
	for (var j=0;j<data.length;j++){
		var tr= document.createElement('tr').cloneNode(false);
		// loop through the keys
		for(var i = 0;	i<heads.length;i++){
			var td = document.createElement('td').cloneNode(false);
			// get the value of the key and add them
			td.appendChild(document.createTextNode(data[j][heads[i]]));
			tr.appendChild(td);
			}
		var children = tr.childNodes;
		children[1].className ="blue";
		table.appendChild(tr);
	}
	// filmtable should be invisible at first
}


// create the table heads and append them to the table 
function addTableHeads(data,table){
	var tr= document.createElement('tr').cloneNode(false);
	var heads = getHeads(data);
	for(var i = 0;	i<heads.length;i++){
		var th = document.createElement('th').cloneNode(false);
		th.appendChild(document.createTextNode(heads[i]));
		tr.appendChild(th);
	}
	table.appendChild(tr);
}

// get all the property keys from JSON data
function getHeads(data){
	// heads are going to be returned as array
	var heads = new Array();
	// look into one entity in data and collect heads
	var item= data[0];
	for(var key in item){
		heads.push(key);
	}
	return heads;
}

function validateForm(that){
	if(that.id=="filmform"){
		if(checkFilmForm()){
		/* 	window.onbeforeunload =function(){
			}; */
			window.location = "http://martinakraus.net/immdb.php";
			return true;
		} else{
			return false;
		}
		} 
/* 	else {
		if(checkMusicForm()){
			window.onbeforeunload =function(){
			};
			window.location = "http://martinakraus.net/immdb.php";
			return true;
		} else{
			return false;
		}
		} */
	
}

function checkFilmForm(){
	var input = document.forms["filmform"]["filmtitel"];
	var form = /[^a-zA-Z0-9]/;
	 if(form.test(input.value) ){ 
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
		input.focus();
		input.className = "error";
		return false;
		}esle{
		
		}
 	input = document.forms["filmform"]["regie"];
	var form = /[a-zA-Z]+\s+[a-zA-z]+/;
	 if(form.test(input.value)){
	 	alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben“");
		input.focus();
		return false;
	 } 
	return true;
}
/* function checkMusicForm(){

} */

