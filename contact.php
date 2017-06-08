<!-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    INITIAL CODE
    <form>

    <label>Name</label>
    <input name="name" placeholder="Type Here">

    <label>Email</label>
    <input name="email" type="email" placeholder="Type Here">

    <label>Message</label>
    <textarea name="message" placeholder="Type Here"></textarea>

    <input id="submit" name="submit" type="submit" value="Submit">

    </form>

    INITIAL CODE END

    I NEED TO ADD THIS
    <form method="post" action="index.php">

    <label>Name</label>
    <input name="name" placeholder="Type Here">

    <label>Email</label>
    <input name="email" type="email" placeholder="Type Here">

    <label>Message</label>
    <textarea name="message" placeholder="Type Here"></textarea>

    <input id="submit" name="submit" type="submit" value="Submit">

    </form>


  </body>
</html> -->


<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: alexeygoro contact form';
    $to = 'goalexey@gmail.com';
    $subject = 'New Message from Contact Form';

    $host = "smtp.gmail.com";
    $port = "587";
    $username = "goalexey@gmail.com";
    $password = "Techknowsbest1812!";

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']){
      if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
      } else {
        echo '<p>Something went wrong, please try again!</p>';
      }
    }
?>
