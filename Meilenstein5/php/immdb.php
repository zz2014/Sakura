
<?php

if($_SERVER["REQUEST_METHOD"]=="GET"){
$params = $_GET;
}
echo 'Deine Eingabe in Film ist: '."<br>";
if (isset($params["filmtitel"]))
{
 echo 'Filmtitel:'. $params["filmtitel"]."<br>";
}else{
  echo 'Filmtitel:'."<br>";
} 

if (isset($params["regie"]))
{
 echo "Regie: ", $params["regie"]."<br>";
}else{
  echo 'Regie:'."<br>";
} 

if (isset($params["drehbuch"]))
{
 echo "Drehbuch: ", $params["drehbuch"]."<br>";
}else{
  echo 'Drehbuch:'."<br>";
} 

if (isset($params["filmerscheinungsjahr"]))
{
 echo "Filmerscheinungsjahr: ", $params["filmerscheinungsjahr"]."<br>";
}else{
  echo 'Filmerscheinungsjahr:'."<br>";
} 

if (isset($params["schauspieler"]))
{
 echo "Schauspieler: ", $params["schauspieler"]."<br>";
}else{
  echo 'Schauspieler:'."<br>";
}

if (isset($params["filmgenre"]))
{
 echo "Filmgenre: ", $params["filmgenre"]."<br>";
}else{
  echo 'Filmgenre:'."<br>";
}

if (isset($params["filmfavorit"]))
{
 echo "Favorit: ", $params["filmfavorit"]."<br>";
}else{
  echo 'Favorit:'."<br>";
}


echo 'Deine Eingabe in Musik ist: '."<br>";
if (isset($params["interpreter"]))
{
 echo 'Interpreter:'. $params["interpreter"]."<br>";
}else{
  echo 'Interpreter:'."<br>";
}

if (isset($params["interpreter"]))
{
 echo "Albumtitel: ", $params["albumtitel"]."<br>";
}else{
  echo 'Albumtitel:'."<br>";
}

if (isset($params["musicerscheinungsjahr"]))
{
 echo "Erscheinungsjahr: ", $params["musicerscheinungsjahr"]."<br>";
}else{
  echo 'Erscheinungsjahr:'."<br>";
}

if (isset($params["musicgenre"]))
{
 echo "Genre: ", $params["musicgenre"]."<br>";
}else{
  echo 'Genre:'."<br>";
}

if (isset($params["musicfavorit"]))
{
 echo "Favorit: ", $params["musicfavorit"]."<br>";
}else{
  echo 'Favorit:'."<br>";
}
?>
