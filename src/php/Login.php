<?php
    $userInfo = array('1' => '30901',
                      '2' => '30902',
                      '3' => '30903',
                      '4' => '30904',
                      '5' => '30905',
                      '6' => '30906',
                      '7' => '30907',
                      '8' => '30908',
                      '9' => '30909',
                      '10' => '30910',
                      '11' => '30911',
                      '12' => '30912',
                      '13' => '30913',
                      '14' => '30914',
                      '15' => '30915',
                      '16' => '30916',
                      '17' => '30917',
                      '18' => '30918',
                      '19' => '30919',
                      '20' => '30920',
					  '21' => '30921',
					  '22' => '30922',
                      '23' => '30923',
                      '24' => '30924',
					  '25' => '30925',
					  '26' => '30926',
					  '27' => '30927',
                      'Admin' => 'admin309'
					 ); // 27 명 로그인 다 만들기
    session_cache_expire(360);
 
    session_start();

    if ($_POST['code'] == 'login'){
        if ($_POST['pw'] === $userInfo[$_POST['user']]){
            
            $_SESSION['loginInfo'] = $_POST['user'];
            echo "valid";
        }
        else{
            echo "wrong";
        }
    }
    else if ($_POST['code'] == 'check'){
        // 로그인이 안됐으면
        if (empty($_SESSION['loginInfo'])){
            echo "none";
        }
        else{
            echo $_SESSION['loginInfo'];
        }
    }
?>