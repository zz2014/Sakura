<?php
// get name of json from client
$tableName = $_GET['t'];
//the address of the json data
$content = '../js/'.$tableName.'.json';
// get content from the address
$json = file_get_contents($content);
// read json into php array
$tableData = json_decode($json,true);
$n = 0;
$m = 0;

echo '<table>';
$heads = $tableData[$n];
// draw the table heads
	echo '<tr>';
	 foreach($heads as $key=>$value)
		{
		echo '<th>'.$key.'</th>';
		}
	echo '</tr>';
	
// draw the table data
    foreach ($tableData as $item) {
	echo '<tr>';
	 foreach($item as $key=>$value)
		{if($m==1){
				echo '<td class ="blue">'.$tableData[$n][$key].'</td>';
		}else{
		echo '<td>'.$tableData[$n][$key].'</td>';}
		$m++;}
	echo '</tr>';
	$m=0;
    $n++; 
}
echo '</table>';
?>