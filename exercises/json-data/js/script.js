
$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("./loadFiles/weekendDinner.json", function(data){


      let days = [];
        $.each( data.food[0], function( key, val ) {
        days.push( "<li id='" + key + "'>" + val + "</li>" );
      });

      // Create for loop to run through each object
 
      $( "<ul/>", {
        "class": "my-new-list",
        html: days.join( "" )
      }).appendTo( "body" );

      console.log(data.food);
    });
  });
});
