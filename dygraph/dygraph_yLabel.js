g = new Dygraph(

    // containing div
    document.getElementById("graphdiv"),

    // CSV or path to a CSV file.
    [ 
        [2008-05-07, [65,75,85]],
        [2008-05-08, [60,70,80]],
        [2008-05-09, [70,80,90]],
    ],
    {
        Title: "Temperatures",
        labels:["Date", "Temperature"],
        customBars:true,
        ylabel: "Temperature",
        xlabel: "Date",
        axes: {
            y: {
                axisLabelWidth: 50,
               },
        },
        height: 300,
        width: 600,
    }
 
   
);

$(".dygraph-label.dygraph-ylabel").css({"text-align":"center","margin-left":"30px", "transform":"rotate(270deg)", "-ms-transform":"rotate(270deg)","-webkit-transform":"rotate(270deg)", "moz-transform":"rotate(270deg)", "-o-tranform":"rotate(270deg)"});

console.log("dygraph test");
