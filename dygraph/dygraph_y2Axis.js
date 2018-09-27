g = new Dygraph(

    // containing div
    document.getElementById("graphdiv"),

    // CSV or path to a CSV file.
    [     
        [new Date("2017/01/01"), 45, 1.02],
        [new Date("2017/02/01"), 52, 1.02],
        [new Date("2017/03/01"), 57, 0.75],
        [new Date("2017/04/01"), 64, 0.47],
        [new Date("2017/05/01"), 73, 0.47],
        [new Date("2017/06/01"), 83, 0.51],
        [new Date("2017/07/01"), 91, 0.2],
        [new Date("2017/08/01"), 90, 0.24],
        [new Date("2017/09/01"), 82, 0.35],
        [new Date("2017/10/01"), 70, 0.51],
        [new Date("2017/11/01"), 55, 0.83],
        [new Date("2017/12/01"), 46, 1.02],
    ],
    {
        Title: "Temperatures",
        labels:["Date", "Avg High", "Precipitation"],
        series: {
            "Precipitation": { axis:"y2"},  
        },
        ylabel: "Avg High",
        y2label: "Precipitation",
        xlabel: "Date",
        axes: {
            y: {
                valueRange: [40,100],
                axisLabelWidth: 40,
               },
        },
        drawPoints: true,
        height: 300,
        width: 600,
    }
 
   
);

$(".dygraph-label.dygraph-ylabel").css({"text-align":"center","margin-left":"30px", "transform":"rotate(270deg)", "-ms-transform":"rotate(270deg)","-webkit-transform":"rotate(270deg)", "moz-transform":"rotate(270deg)", "-o-tranform":"rotate(270deg)"});

$(".dygraph-label.dygraph-y2label").css({"text-align":"center","margin-right":"30px", "transform":"rotate(270deg)", "-ms-transform":"rotate(270deg)","-webkit-transform":"rotate(270deg)", "moz-transform":"rotate(270deg)", "-o-tranform":"rotate(270deg)"});

console.log("dygraph test");
