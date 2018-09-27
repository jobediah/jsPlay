

var data = [{
  z: [[5.625, 6.25, 8.125, 8.75, 9.333],
      [9.5, 10.5, 11.25, 12, 13.5],
      [10, 10.625, 12.5, 15.625, 20]],
  x: [2008, 2009, 2010, 2011, 2012],
  y: [5, 10, 15],
  type: 'contour',
//  contours: {
//    coloring: 'lines'
//  }
}];

var dygraphData = [[2008, 60], [2009, 62], [2010, 62], [2011, 63], [2012, 64]];

var layout = {
  title: 'Contour test',
  yaxis: {
    fixedrange: true
  }
};

var g1 = Plotly.newPlot('d3div', data, layout);


var g2 = new Dygraph(
    // containing div
    document.getElementById("dygraphdiv"),
      dygraphData,
      {labels: ["Date", "Temperatures"],
       drawCallback: function(g, is_initial) {
         console.log(g.xAxisRange());
         layout = {
           title: 'Contour test',
           xaxis: {range: g.xAxisRange()},
           yaxis: {
             fixedrange: true
           }
         }
         Plotly.newPlot('d3div', data, layout);
       }

      }
);

//var sync = Dygraph.synchronize(g1, g2);


console.log("dygraph test");
