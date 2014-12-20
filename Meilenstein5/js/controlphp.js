/* var filmselected = true;
var musicselected = false; */
//two tables will be built when loading the page
function init(){
showFavorites(document.getElementById("rightbox"));
}

function showFavorites(that) {
  var table;
  var tableId;
  var music = document.getElementById("leftbox");
  var film = document.getElementById("rightbox");
  if(that.id =="leftbox")
  {table = "alben";
  tableId ="musicTable";
  film.style.background="rgb(26,32,94)";
  music.style.background="rgb(0,162,232)";
	music.firstElementChild.style.color ="black";
	film.firstElementChild.style.color ="white";
  document.getElementById('filmTable').style.display = "none";
  document.getElementById('musicTable').style.display = "table";
  }
  else
  {table = "filme"
	tableId ="filmTable"
	music.style.background="rgb(26,32,94)";
	film.style.background="rgb(0,162,232)";
	music.firstElementChild.style.color ="white";
	film.firstElementChild.style.color ="black";
	document.getElementById('filmTable').style.display = "table";
    document.getElementById('musicTable').style.display = "none";
	
  }
  if (window.XMLHttpRequest) { 
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  ;
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var data = JSON.parse(xmlhttp.responseText);
	    buildTable(data,document.getElementById(tableId));
    }
  }
  xmlhttp.open("GET","../php/getFavorites.php?t="+table,true);
  xmlhttp.send();
}

/* function switchlist (that){
	var music = document.getElementById("leftbox");
	var film = document.getElementById("rightbox");
	if(that.id == "rightbox"){//falls rechte Box angeklickt
	music.style.background="rgb(26,32,94)";
	film.style.background="rgb(0,162,232)";
	music.firstElementChild.style.color ="white";
	film.firstElementChild.style.color ="black";
	document.getElementById('filmTable').style.display = "table";
	document.getElementById('musicTable').style.display = "none";
	/* filmselected = true;
	musicselected = false; 
	} else{  
	film.style.background="rgb(26,32,94)";
	music.style.background="rgb(0,162,232)";
	music.firstElementChild.style.color ="black";
	film.firstElementChild.style.color ="white";
	document.getElementById('filmTable').style.display = "none";
	document.getElementById('musicTable').style.display = "table";
	/* filmselected = false;
	musicselected = true; 
} }*/
	
//append table heads and data to the table
/* function buildFilmTable(){

	var filmen = filmdata["Filme"];
	var myTable = document.getElementById('filmTable');
	buildTable(filmen, myTable);

	}
	
	//append table heads and data to the table
function buildMusicTable(){
	var alben = musicdata["Alben"];
	// get table element from html
	var myTable = document.getElementById('musicTable');
	buildTable(alben, myTable);

} */

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
