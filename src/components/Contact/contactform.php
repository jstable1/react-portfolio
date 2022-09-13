<?php
    $message_sent = false;
    if (isset($_POST['email']) && $_POST['email'] != ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){

            // submit the form
            $name = $_POST['name'];
            $subject = $_POST['subject'];
            $mailFrom = $_POST['mail'];
            $message = $_POST['message'];
        
            $mailTo = "jessica.stabler@icloud.com";
            $headers = "From: ".$mailFrom;
            $txt = "You have received an e-mail from ".$name.".\r\n".$message.;
        
            mail($mailTo, $subject, $txt, $headers);

            $message_sent = true;
        }
        else{
            $invalid_class_name="form-invalid";
        }
    }
?>

<?php
if ($message_sent)
?>

    <h3>Thanks, i'll be in touch</h3>

<?php
else:
?>
    <section class="contact">
      <h1>Contact Me</h1>
      <form class="contact-form" method="POST">
        <div class="inputBoxes">
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="subject" placeholder="Subject"></input>
          <input type="text" name="email" defaultValue={email} onBlur={handleChange} placeholder="Your Email"></input>
          <textarea type="text" name="message" defaultValue={message} onBlur={handleChange} placeholder="Message"></textarea>
        </div>
        <button type="submit" class="contactButton" name="submit">Submit</button>
      </form>
      <?php
endif;
?>
    </section>

