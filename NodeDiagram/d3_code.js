var locationData = [
      {"location": "Start", "state": "Ready", "group": 0},
      {"location": "1a", "state": "On", "group": 1},
      {"location": "1b", "state": "Off", "group": 1},
      {"location": "2", "state": "Waiting", "group": 2}
]

var transitions = [[0,1], [0,2], [1,3], [2,3]];    

var structure = [];

locationData.forEach(function(element) {
  structure[element.group] = structure[element.group] + 1 || 1;
});

var i = 0;
var x = 100;

structure.forEach(function(element) {
  switch(element) {
    case 1:
      locationData[i].x = x;
      locationData[i].y = 100;
      x += 200;
      i++;
      break;
    case 2:
      locationData[i].x = x;
      locationData[i].y = 50;
      i++;
      locationData[i].x = x;
      locationData[i].y = 150;
      x += 200;
      i++;
  }
});


var svg  = d3.select("svg");

svg.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
  .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 18)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

var g = svg.selectAll("g")
    .data(locationData)
    .enter().append("g");


g.append("circle")
    .attr("cx", function(d, i) { return d.x;})
    .attr("cy", function(d, i) { return d.y; })
    .attr("r", 30)
    .style("fill", "white")
    .style("stroke", "blue");

g.append("text")
    .attr("x", function(d, i) { return d.x - d.location.length*2; })
    .attr("y", function(d, i) { return d.y; })
    .attr("dy", ".35em")
    .text(function(d) { return d.location });

g.append("text")
    .attr("x", function(d, i) { return d.x - d.state.length*2; })
    .attr("y", function(d, i) { return d.y + 40; })
    .attr("dy", ".35em")
    .text(function(d) { return d.state });

    
g.append("line")
    .data(transitions)
    .attr("x1", function(d, i) { return locationData[d[0]].x + 30*Math.cos(0.2); })
    .attr("y1", function(d, i) { return locationData[d[0]].y + 30*Math.sin(0.2); })
    .attr("x2", function(d, i) { return locationData[d[1]].x - 30*Math.cos(0.2); })
    .attr("y2", function(d, i) { return locationData[d[1]].y - 30*Math.sin(0.2); })
    .style("stroke-width", 2)
    .style("stroke", "red")
    .attr("marker-end", "url(#end)");

