//two tables will be built when loading the page
function init(){
buildMusicTable();
buildFilmTable();
}

function switchtofilm(){
	document.getElementById("leftbox").style.background="rgb(26,32,94)";
	document.getElementById("rightbox").style.background="rgb(0,162,232)";
	document.getElementById('filmTable').style.display = "table";
	document.getElementById('musicTable').style.display = "none";
}
function switchtomusic(){
	document.getElementById("leftbox").style.background="rgb(0,162,232)";
	document.getElementById("rightbox").style.background="rgb(26,32,94)";
	document.getElementById('filmTable').style.display = "none";
	document.getElementById('musicTable').style.display = "table";
}
//append table heads and data to the table
function buildFilmTable(){

	var filme = filmdata["Filme"];
	var myTable = document.getElementById('filmTable');
	// add all the table heads first
	addTableHeads(filme,myTable);
	// get all the keys
	var heads = getHeads(filme);
	// loop through the list and add the value of keys
	for (var j=0;j<filme.length;j++){
		var tr= document.createElement('tr').cloneNode(false);
		// loop through the keys
		for(var i = 0;	i<heads.length;i++){
			var td = document.createElement('td').cloneNode(false);
			// get the value of the key and add them
			td.appendChild(document.createTextNode(filme[j][heads[i]]));
			tr.appendChild(td);
			}
		myTable.appendChild(tr);
	}	
}

//append table heads and data to the table
function buildMusicTable(){

	var alben = musicdata["Alben"];
	// get table element from html
	var myTable = document.getElementById('musicTable');
	// add all the table heads first
	addTableHeads(alben,myTable);
	// get all the keys
	var heads = getHeads(alben);
	// loop through the list and add the value of keys
	for (var j=0;j<alben.length;j++){
		var tr= document.createElement('tr').cloneNode(false);
		// loop through the keys
		for(var i = 0;	i<heads.length;i++){
			var td = document.createElement('td').cloneNode(false);
			// get the value of the key and add them
			td.appendChild(document.createTextNode(alben[j][heads[i]]));
			tr.appendChild(td);
			}
		myTable.appendChild(tr);
	}
	// musictable should be invisible at first
	myTable.style.display = "none";
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
