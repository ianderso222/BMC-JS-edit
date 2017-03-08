<?php
header('Content-Type: application/json');
$data = file_get_contents('store.json'); // In this file is our json object



if(isset($_GET['getAllLikes'])) {
    echo $data;
}

if(isset($_POST['imageId']))
{
    $jsonObj = json_decode($data);
    $likedImg = null;
    foreach($jsonObj->images as $v)
    {
        if($v->imageId == $_POST['imageId'])
        {
            $v->likes++;
            $likedImg = $v;
        }
    }

    file_put_contents('store.json', json_encode($jsonObj));
    echo json_encode($likedImg);
}
?>
