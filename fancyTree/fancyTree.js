    $(document).ready(function(){
      // Create the tree inside the <div id="tree"> element.
      $("#tree").fancytree({
        source: [
          {title: "Node 1", key: "1"},
          {title: "Folder 2", key: "2", folder: true, children: [
          {title: "Node 2.1", key: "3"},
          {title: "Node 2.2", key: "4"}
          ]}
        ],
        click: function (event, data) {
          console.log(event);
          console.log(data);
        },
      });

     
      var rootNode = $("#tree").fancytree("getRootNode");
      console.log(rootNode);
      rootNode.addChildren( 
          {title: "Folder 3", key: "5", folder: true}
      )
    });
