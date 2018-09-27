<!DOCTYPE html>
<meta charset="utf-8">
<html>
  <head>
    <title>PHP Test</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//d3js.org/d3.v4.js"></script>
    <link rel="shortcut icon" href="favicon.ico">
    <style type="text/css">
      .links line {
        stroke: #999;
        stroke-opacity: 0.6;
      }

      .nodes circle {
        stroke: #fff;
        stroke-width: 1.5px;
      }
    </style>
  </head>
  <body>
   <svg width="960" height="600"></svg>
   <?php echo '<script src="d3_code.js"></script>'?> 
  </body>
</html>
