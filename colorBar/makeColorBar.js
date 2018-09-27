start_color = set_start_color();
cb = set_feat_colors(start_color)

drawMapColorbar(cb['colors'], cb['bins'], start_color);

function set_start_color () {
         return '#9bc2cf';
     }

function set_feat_colors (start_color) {
        colors = ['gray', 'blue', 'black']
        bins = [1,2,3]

        cb = {'colors': colors, 'bins': bins}
        return cb;
}

function myRound(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}

function drawMapColorbar (colors, bins) {
        var palette = '', ticks = [], myScale, colorbar, i;
        for (i = 0; i < colors.length; i++) {
            palette += colors[i].replace(/#/g, '');
            if (i < colors.length - 1) {
                palette += ','
            }
            ticks.push(myRound(bins[i][0], 1));
        }
        ticks.push(myRound(bins[bins.length - 1][1], 1))
        myScale = d3.scale.quantize().range(colors).domain(d3.range(colors.length + 1));
        myScale.type = 'QUANTIZE';
        myScale.ticks = ticks;
        colorbar = Colorbar()
            .thickness(35)
            .barlength(800)
            .orient("horizontal")
            .scale(myScale);
        colorbarObject = d3.select("#colorbar").call(colorbar);
    }


