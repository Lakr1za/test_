<?php
$name = $_POST['name'];
$email = $_POST['email'];



$to = "addario_planet@mail.ru;
$subject ='Отправлена заявка с сайта НАЗВАНИЕ_САЙТА';
$message = "Заявка была отправлена пользоваталем $name с имейлом $email";
$headers = "From: $name <$email>" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Ваше сообщение успешно отправлено (ответ сервера)!';
} else {
	echo 'Возникла ошибка при отработке функции mail на сервере (ответ сервера)!';
}
