g = new Dygraph(

    // containing div
    document.getElementById("graphdiv"),

    // CSV or path to a CSV file.
    [ 
        [2008-05-07, [65,75,85]],
        [2008-05-08, [67,77,83]],
        [2008-05-09, null],
        [2008-05-10, [70,80,90]],
        [2008-05-11, [74,84,92]],
    ],
    //"temperatures_m.csv",
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
        connectSeparatedPoints:true,
    }
 
   
);


console.log("dygraph test");
