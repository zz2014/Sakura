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
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById(tableId).innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","../php/getFavorites.php?t="+table,true);
  xmlhttp.send();
}

