<!doctype html>
<html>
  <head>
    <title>PHP Test</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dygraph/2.0.0/dygraph.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js" type="text/javascript"></script> 
    <link rel="stylesheet" src="https://cdnjs.cloudflare.com/ajax/libs/dygraph/2.0.0/dygraph.min.css" />
    <link rel="shortcut icon" href="favicon.ico">
    <style type="text/css">
    #drag {
      width:100px; height:100px; padding:1.0em; margin: 10px; border: 2px solid blue;
    }
    #drop {
       width:100px; height:100px; padding:1.0em; margin: 10px; border: 2px solid purple; position: relative; float: right;
    }
    </style>
  </head>
  <body>
    <div class="box">
      <!-- <span class="close">&times;</span> -->
      <p>Close this div</p>
    </div>
  <?php echo '<script src="myScript.js"></script>'?> 
  </body>
</html>
