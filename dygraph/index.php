<html>
  <head>
    <title>PHP Test</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/dygraph/2.1.0/dygraph.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" src="https://cdnjs.cloudflare.com/ajax/libs/dygraph/2.0.0/dygraph.min.css" />
    <link rel="shortcut icon" href="favicon.ico">
      <style type="text/css">
    #graphdiv .dygraph-label {
      /* This applies to the title, x-axis label and y-axis label */
      font-family: Arial, Helvetica, sans-serif;
    }
    #graphdiv .dygraph-title {
      /* This rule only applies to the chart title */
      font-size: 24px;
      text-shadow: gray 2px 2px 2px;  /* color, delta-x, delta-y, blur radius */
    }
    /*#graphdiv .dygraph-label.dygraph-ylabel {
      /* This rule only applies to the y-axis label */
      font-size: 18px;
      text-shadow: gray -2px 2px 2px;  /* (offsets are in a rotated frame) */
      //float:right;
      margin-left: 30px;
      text-align:center;
      transform: rotate(270deg);
    }*/
    #graphdiv .dygraph-label.dygraph-xlabel {
      /* This rule only applies to the xaxis label */
      color: red;
    }
    .chart {
      border: 1px dashed black;
      margin: 5px;
      padding: 2px;
    }
    .dygraph-legend {
      text-align: right;
      background: none;
    }
    </style>
  </head>
  <body>
    <div id="graphdiv"></div>
    <div id="label" style="width:200px; height:50px; font-size:0.8em; padding-top:5px; float:left;"></div>
   <?php echo '<script src="dygraph_shade.js"></script>'?> 
  </body>
</html>
