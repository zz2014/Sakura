<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "sakura";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// get name of table from client
$tableName = $_GET['t'];
// select the wanted attributes
if($tableName=='filme'){
$sql = "SELECT Filmtitel,Regie,Drehbuch,Filmerscheinungsjahr,Schauspieler,Filmgenre
 FROM ". $tableName." WHERE Favorit = 1";}
else{
$sql = "SELECT Interpreter,Albumtitel,Erscheinungsjahr,Songs,Genre FROM ". $tableName." WHERE Favorit = 1";}
// get result from executing query sentence
$result = $conn->query($sql);
// put result in an associative array
$tableData= array();
while($row = mysqli_fetch_assoc($result)) {
    $tableData[] = $row;
}
// construct json from the array
echo json_encode($tableData);

?>