

<?php

if($_SERVER["REQUEST_METHOD"]=="GET"){
$params = $_GET;
}

if (isset($params["filmtitel"]))
{
	$handle = fopen ( "film.txt", "r+" );
	echo "Abgeschickte Daten: "."<br>";
	echo "Filmtitel: " .$params["filmtitel"]."<br>";
	fwrite ( $handle, $params["filmtitel"]);
	fwrite ( $handle, ",");
	echo "Regie: " .$params["regie"]."<br>";
	fwrite ( $handle, $params["regie"]);
	fwrite ( $handle, ",");
	echo "Drehbuch: " .$params["drehbuch"]."<br>";
	fwrite ( $handle, $params["drehbuch"]);
	fwrite ( $handle, ",");
	echo "Filmerscheinungsjahr: ", $params["filmerscheinungsjahr"]."<br>";
	fwrite ( $handle, $params["filmerscheinungsjahr"]);
	fwrite ( $handle, ",");
	echo "Schauspieler: " .$params["schauspieler"]."<br>";
	fwrite ( $handle, $params["schauspieler"]);
	fwrite ( $handle, ",");
	echo "Filmgenre: " .$params["filmgenre"]."<br>";
	fwrite ( $handle, $params["filmgenre"]);
	fwrite ( $handle, ",");
	echo "Favorit: " .$params["filmfavorit"]."<br>";
	fwrite ( $handle, $params["filmfavorit"]);
	fclose ( $handle );
	exit;
	
}


if (isset($params["albumtitel"]))
{
	$handle = fopen ( "music.txt", "r+" );
	echo "Abgeschickte Daten: "."<br>";
	echo "Interpreter: " .$params["interpreter"]."<br>";
	fwrite ( $handle, $params["interpreter"]);
	fwrite ( $handle, ",");
	echo "Albumtitel: " .$params["albumtitel"]."<br>";
	fwrite ( $handle, $params["albumtitel"]);
	fwrite ( $handle, ",");
	echo "Erscheinungsjahr: ", $params["musicerscheinungsjahr"]."<br>";
	fwrite ( $handle, $params["musicerscheinungsjahr"]);
	fwrite ( $handle, ",");
	echo "Songs:" .$params["songs"]. "<br>";
	fwrite ( $handle, $params["songs"]);
	fwrite ( $handle, ",");
	echo "Genre: " .$params["musicgenre"]."<br>";
	fwrite ( $handle, $params["musicgenre"]);
	fwrite ( $handle, ",");
	echo "Favorit: " .$params["musicfavorit"]."<br>";
	fwrite ( $handle, $params["musicfavorit"]);
	fclose ( $handle );
	exit;
}


?>
