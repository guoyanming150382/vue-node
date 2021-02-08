<?php
// 允许跨域
include "./com/cross.php";
// 获取文件对象
$fileObj = $_FILES["file"];

// 获得文件名对象
$fileNameObj = pathinfo($fileObj["name"]);
// 文件扩展名
$ext = $fileNameObj["extension"];
// 文件名，无扩展名
$fileName = $fileNameObj["filename"];
// 拼接新的文件名
$newFileName = "./upload/".$fileName."-".date("Ymd-His").".".$ext;

// 保存文件
move_uploaded_file($_FILES["file"]["tmp_name"], $newFileName);
// 结果对象
$r = array(
	"code"=>0,
	'data'=>array(
		'src'=>$newFileName
	)
);
echo json_encode($r);

?>

