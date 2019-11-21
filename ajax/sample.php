<?php
// JSONにする
header(('Content-Type: application/json; charset=UTF-8'));

$response = [];

// 仮にPOSTの値が何もなければ不正リクエストとして返却
if (empty($_POST)) {
    $response[] = ['error' => '不正リクエストです', 'status' => 405];
    echo json_encode($response, JSON_UNESCAPED_SLASHES |JSON_UNESCAPED_UNICODE);
    exit();
}

// もらった値をそのままかえす
$response[] = ['id' => $_POST['userid']];
echo json_encode($response, JSON_UNESCAPED_SLASHES |JSON_UNESCAPED_UNICODE);
exit();