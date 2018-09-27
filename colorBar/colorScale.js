var svg = d3.select('body')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 400)

var data = d3.range(50);

var colors = d3.scaleLinear()
    .domain([0,10,20,30,40,50])
    .range(["red", "orange", "yellow", "green", "purple"])


/*var colors = d3.scaleQuantize()
  .domain([0, 50])
  .range(['lightblue', 'orange', 'lightgreen', 'pink']);
*/

/*var colors = d3.scaleQuantile()
  .domain([0, 10, 20, 30, 40, 50])
  .range(["red", "orange", "yellow", "green", "purple"])
*/

/*var myData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var colors = d3.scaleOrdinal()
  .domain(myData)
  .range(['#d73027',
          '#f46d43',
          '#fdae61',
          '#fee090',
          '#e0f3f8',
          '#abd9e9']);
*/

var svg = d3.select("svg");

var rects = svg.selectAll(".rects")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 10)
    .attr("height", 100)
    .attr("x", (d,i)=>10 + i*9)
    .attr("width", 6)
    .attr("fill", function (d,i) {
     console.log(d)
     console.log(colors(d))
     return colors(d)
    })//d=>colors(d))
    .attr("stroke", "gray");

