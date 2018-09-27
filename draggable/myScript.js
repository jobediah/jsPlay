$( function() {
    $( "#drag" ).draggable();
    $( "#drop" ).droppable({
      drop: function( event, ui ) {
        $( "#drag" ).hide();
        $( this )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

console.log("drag and drop test");
