<?php
// echo "Hello World!.";
//$msg = 'Hello World!.';
$name = 'Bob Smith';
$msg1 = 'Hello  {$name}';
$msg2 = "Hello  {$name}";
$msg3 = 'Hello '.$name;

$name = 'Bob Smith';
$greeting = "Hello {$name}";
$count=5;
$price=6;
$total=($count*$price);
//Note the escape character before the dollar sign
$msg = "I see you have {$count} oranges, that will be \${$total}";
?>

<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Contact</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <h1><?php echo $greeting; ?></h1>
       <p><?php echo $msg;?></p>

       <h1><?php echo $msg1; ?></h1>
       <h2><?php echo $msg2; ?></h2>
       <h1><?php echo $msg3; ?></h1>
    </body>
</html>

