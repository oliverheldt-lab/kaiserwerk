
<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
    // reCAPTCHA v3 Serverseitige Validierung
    $recaptcha_secret = "6Ld2sWUsAAAAADyjV5132lXd54C6_b7Q9XkmZxlp";
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $remote_ip = $_SERVER['REMOTE_ADDR'];

    $verify_url = 'https://www.google.com/recaptcha/api/siteverify';
    $post_data = http_build_query(array(
        'secret' => $recaptcha_secret,
        'response' => $recaptcha_response,
        'remoteip' => $remote_ip
    ));

    $opts = array('http' => array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $post_data
    ));
    $context  = stream_context_create($opts);
    $response_body = file_get_contents($verify_url, false, $context);
    $result = json_decode($response_body);

    // Falls Validierung fehlschlägt oder Score zu niedrig (Bot-Verdacht)
    if (!$result->success || $result->score < 0.5) {
        header('HTTP/1.1 403 Forbidden');
        die('Spam-Schutz: Anfrage abgelehnt. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.');
    }

	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Vor-/ Nachname', $_POST['imObjectForm_2_1'], '', false);
	$form->setField('E-Mail-Adresse', $_POST['imObjectForm_2_2'], '', false);
	$form->setField('Straße / Nr.', $_POST['imObjectForm_2_3'], '', false);
	$form->setField('Telefon', $_POST['imObjectForm_2_4'], '', false);
	$form->setField('PLZ / Ort', $_POST['imObjectForm_2_5'], '', false);
	$form->setField('Land', $_POST['imObjectForm_2_6'], '', false);
	$form->setField('Nachricht', $_POST['imObjectForm_2_7'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != 'jsactive' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner($_POST['imObjectForm_2_2'] != "" ? $_POST['imObjectForm_2_2'] : 'Haus@ingrid-ellmau.at', 'Haus@ingrid-ellmau.at', 'Buchungsanfrage an KAISERWERK in Scheffau am Wilden Kaiser', '', false);
		$form->mailToCustomer('Haus@ingrid-ellmau.at', $_POST['imObjectForm_2_2'], 'Bestätigungsemail Buchungsanfrage an KAISERWERK in Scheffau am Wilden Kaiser', 'Ihre Buchungsanfrage an KAISERWERK in Scheffau am Wilden Kaiser wurde erfolgreich versendet und wird zeitnah bearbeitet.

Wir kommen auf Sie zu,
herzliche Grüße

Team Kaiserwerk', true);
		@header('Location: ../index.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}
