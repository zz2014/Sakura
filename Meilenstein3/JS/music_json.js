
var data= {
	"Alben":[
      {
        "Interpreter": "Farin Urlaub",
        "Albumtitel": "Faszination Weltraum",
        "Erscheinungsjahr": "2014",
        "Genre": "Punk"
      },
      {
        "Interpreter": "Die Äzte",
        "Albumtitel": "Planet Punk",
        "Erscheinungsjahr": "1995",
        "Genre": "Punk"
      },
	   {
        "Interpreter": "The Offspring",
        "Albumtitel": "Smash",
        "Erscheinungsjahr": "1994",
        "Genre": "Punk"
      }, 
	  {
        "Interpreter": "Blink 182",
        "Albumtitel": "Enema of the State",
        "Erscheinungsjahr": "1999",
        "Genre": "Punk"
      }, 
	  {
        "Interpreter": "Rise Against",
        "Albumtitel": "Siren Song of the Counter Culture",
        "Erscheinungsjahr": "2004",
        "Genre": "Punk"
      }, 
	  {
        "Interpreter": "Vampire Weekend",
        "Albumtitel": "Vampire Weekend",
        "Erscheinungsjahr": "2007",
        "Genre": "Punk"
      },
	   {
        "Interpreter": "Bouncing Souls",
        "Albumtitel": "How I spent my summer vacation",
        "Erscheinungsjahr": "2001",
        "Genre": "Punk"
      },
	   {
        "Interpreter": "Beatsteaks",
        "Albumtitel": "Living Targets",
        "Erscheinungsjahr": "2002",
        "Genre": "Punk"
      },
	   {
        "Interpreter": "Bloc Party",
        "Albumtitel": "Silent Alarm",
        "Erscheinungsjahr": "2005",
        "Genre": "Punk"
      },
	   {
        "Interpreter": "WIZO",
        "Albumtitel": "Anderster",
        "Erscheinungsjahr": "2004",
        "Genre": "Punk"
      }
	  ]
}
//append table heads and data to the table
function buildTable(){
	// get table element from html
	var myTable = document.getElementById('myTable');
	// add all the table heads first
	addTableHeads(myTable);
	// get all the keys
	var heads = getHeads();
	// loop through the list and add the value of keys
	for (var j=0;j<data.Alben.length;j++){
		var tr= document.createElement('tr').cloneNode(false);
		// loop through the keys
		for(var i = 0;	i<heads.length;i++){
			var td = document.createElement('td').cloneNode(false);
			// get the value of the key and add them
			td.appendChild(document.createTextNode(data.Alben[j][heads[i]]));
			tr.appendChild(td);
			}
		myTable.appendChild(tr);
	}
}
// create the table heads and append them to the table 
function addTableHeads(table){
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
function getHeads(){
	// heads is going to be returned as array
	var heads = new Array();
	// looke into one entity in albums and collect heads
	var album= data.Alben[0];
	for(var key in album){
		heads.push(key);
	}
	return heads;
}

