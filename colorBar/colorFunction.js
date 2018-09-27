var domain = [0,10,20,30,40,50,60,70,80]
//var range = ["red", "orange", "yellow", "green", "purple"]
var range = ['#fee8c8',
'#fdd49e',
'#fdbb84',
'#fc8d59',
'#ef6548',
'#d7301f',
'#b30000',
'#7f0000']


var width = 200//domain.length*11 + 16
var height = 100;

box(domain.length)

colorScale(domain, range)

function box(numRects){
    $('.colorscale').css({'border-radius':'2px','background':'#dcdcdc','box-shadow':'2px 2px 1px grey', 'height':'20px', 'width':'108px'})
    $('.colorscale').draggable()
}


function colorScale(dom, ran) {

    var colors = d3.scaleLinear()
       .domain(dom)
       .range(ran)
    
    var svg = d3.select(".colorscale")
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    //var g = svg.append('g')   

    var rects = svg.selectAll(".rects")
        .data(dom)
        .enter()
        .append("rect")
        .attr("y", 5)
        .attr("height", 8)
        .attr("x", (d,i)=>5+i*10 + i*1)
        .attr("width", 10)
        .attr("fill", d=>colors(d))
        //.attr("stroke", "gray");

    var rectBox = [];

    svg.selectAll("rect").each(function(d, i) {
        rectBox[i] = this.getBBox();
    });

    console.log(rectBox)

    rectBox.forEach(function(value, index) {
        svg.append("text")
        .attr("x", value.x + value.width/2)
        .attr("y", value.y + value.height+4)
        .attr("text-anchor", "middle")
        .style("font-size", 5)
        .style("font", "bold")
        .text(function(d, i) { return domain[index]; });
     });

}
