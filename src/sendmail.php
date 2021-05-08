<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->Charset =" UTF-8";
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setForm('info@fls.guru','Hello');
//Кому отправить
$mail->setLanguage('edusolutions@mail.ru');
//Тема письма
$mail->setLanguage('Заявка Education solution');


//Тело письма
$body = '<h1>Theme of letter</h1>'
if(trim(!empty($_POST['name']))){
$body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>'
}
if(trim(!empty($_POST['email']))){
$body.='<p><strong>E=mail: </strong> '.$_POST['email'].'</p>'
}
if(trim(!empty($_POST['education']))){
 $body.='<p><strong>Уровень образвания: </strong> '.$_POST['education'].'</p>'
 }

$mail->Body =$body;

//Отправляем
if(!$mail->send()){
$message='Error';
}else{
$message='Данные отправлены!';
}
$response = ['message'=> $message];
header('Content-type: application/json');
echo json_encode($response);
?>
