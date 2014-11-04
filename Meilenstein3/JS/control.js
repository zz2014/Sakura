function init(){
buildMusicTable();
buildFilmTable();
}

function switchtofilm(){
	document.getElementById('filmTable').style.display = "table";
	document.getElementById('musicTable').style.display = "none";
}
function switchtomusic(){
	document.getElementById('filmTable').style.display = "none";
	document.getElementById('musicTable').style.display = "table";
}
//append table heads and data to the table
function buildFilmTable(){
	var filmen = filmdata["Filmen"];
	var myTable = document.getElementById('filmTable');
	// get table element from html
	// add all the table heads first
	addTableHeads(filmen,myTable);
	// get all the keys
	var heads = getHeads(filmen);
	// loop through the list and add the value of keys
	for (var j=0;j<filmen.length;j++){
		var tr= document.createElement('tr').cloneNode(false);
		// loop through the keys
		for(var i = 0;	i<heads.length;i++){
			var td = document.createElement('td').cloneNode(false);
			// get the value of the key and add them
			td.appendChild(document.createTextNode(filmen[j][heads[i]]));
			tr.appendChild(td);
			}
		myTable.appendChild(tr);
	}
	myTable.style.display = "none";
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
	// heads is going to be returned as array
	var heads = new Array();
	// looke into one entity in albums and collect heads
	var item= data[0];
	for(var key in item){
		heads.push(key);
	}
	return heads;
}