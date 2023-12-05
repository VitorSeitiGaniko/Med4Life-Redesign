<?php

if(isset($_POST['email']) && !empty($_POST['email'])){
$name = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$cellphone = addslashes($_POST['cellphone']);
$message = addslashes($_POST['message']);

$to = "contato@med4life.com.br";
$subject = "Contato - Med4Life";
$body = "Nome: ".$name. "\r\n".
        "Email: ".$email. "\r\n".
        "Celular: ".$cellphone. "\r\n".
        "Mensagem: ".$message;

$header = "From:cliente@med4life.com.br"."\r\n".    
            "Reply-To:".$email."\e\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
    
    echo "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-W3M8G6N');</script>
        <a href='/'><img src='./img/sucesso_email_enviado.jpg' style = 'width: 30%; display: block; margin: auto; margin-top: 17%;'></a>";

}else{

    echo("O email não pode ser enviado");

}

}




?>