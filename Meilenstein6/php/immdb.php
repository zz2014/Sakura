

<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "sakura";
/* methode 1 to connect 
mysql_connect($servername,$username,$password)
        or die ("Verbindung nicht möglich");
 
mysql_select_db($dbname)
        or die ("Datenbank existiert nicht"); */
		
/*method 2*/
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


		
if($_SERVER["REQUEST_METHOD"]=="GET"){
$params = $_GET;
}

if (isset($params["filmtitel"]))
{
	echo "Abgeschickte Daten: "."<br>";
	echo "Filmtitel: " .$params["filmtitel"]."<br>";
	
	echo "Regie: " .$params["regie"]."<br>";
	
	echo "Drehbuch: " .$params["drehbuch"]."<br>";
	
	echo "Filmerscheinungsjahr: ", $params["filmerscheinungsjahr"]."<br>";
	
	echo "Schauspieler: " .$params["schauspieler"]."<br>";
	
	echo "Filmgenre: " .$params["filmgenre"]."<br>";
	
	echo "Favorit: " .$params["filmfavorit"]."<br>";
	// boolean is realized through 0 and 1 in database
	if($params["filmfavorit"]){
	$fav = 1;
	}else{
	$fav = 0;}
	// write query statement
	$sql = "INSERT INTO filme (Filmtitel, Regie, Drehbuch,Filmerscheinungsjahr,Schauspieler,Filmgenre,Favorit)VALUES('".$params["filmtitel"]."','".$params["regie"]."','".$params["drehbuch"]."',".$params["filmerscheinungsjahr"].",'".$params["schauspieler"]."','".$params["filmgenre"]."',".$fav.")";
	// execute and check query statement
	if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
	} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

}
if (isset($params["albumtitel"]))
{
	echo "Abgeschickte Daten: "."<br>";
	
	echo "Interpreter: " .$params["interpreter"]."<br>";
	
	echo "Albumtitel: " .$params["albumtitel"]."<br>";
	
	echo "Erscheinungsjahr: ", $params["musicerscheinungsjahr"]."<br>";
	
	echo "Songs:" .$params["songs"]. "<br>";
	
	echo "Genre: " .$params["musicgenre"]."<br>";
	
	echo "Favorit: " .$params["musicfavorit"]."<br>";
	// boolean is realized through 0 and 1 in database
	if($params["musicfavorit"]){
	$fav = 1;
	}else{
	$fav = 0;}
	
		// write query statement
	$sql = "INSERT INTO alben (Interpreter, Albumtitel, Erscheinungsjahr,Songs,Genre,Favorit)VALUES('".$params["interpreter"]."','".$params["albumtitel"]."',".$params["musicerscheinungsjahr"].",'".$params["songs"]."','".$params["musicgenre"]."',".$fav.")";
		// execute and check query statement
	if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
	} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
//close connection
$conn->close();

?>
