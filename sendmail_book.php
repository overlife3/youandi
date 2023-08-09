<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('kew@mail.ru', 'Забронировать');
    //Кому отправить
    $mail->addAddress('youandi21@youandi21.ru');
    //Тема письма
    $mail->Subject = 'Забронировать';

    //Тело письма
    $body = '<h1>Забронировать человека</h1>';
    //повторная проверка введенных данных

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }

		if(trim(!empty($_POST['date']))){
			$body.='<p><strong>День:</strong> '.$_POST['date'].'</p>';
	  }

		if(trim(!empty($_POST['month']))){
				$body.='<p><strong>Месяц:</strong> '.$_POST['month'].'</p>';
		}

		if(trim(!empty($_POST['time']))){
			$body.='<p><strong>Время:</strong> '.$_POST['time'].'</p>';
	  }

		if(trim(!empty($_POST['place']))){
			$body.='<p><strong>Место:</strong> '.$_POST['place'].'</p>';
		}		

		if(trim(!empty($_POST['price']))){
			$body.='<p><strong>Цена:</strong> '.$_POST['price'].'</p>';
		}

    $mail->Body = $body;

    //отправляем
    if (!$mail->send()) {
        $message = 'error!';
    }   else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>