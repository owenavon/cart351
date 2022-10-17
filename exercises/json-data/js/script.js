
$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("./loadFiles/weekendDinner.json", function(data){
      
      let days = [];

      // Create for loop to run through each object
      for (let i = 0; i < data.food.length; i++) {
        $.each( data.food[i], function( key, val ) {
          days.push( "<li id='" + key + "'>" + val + "</li>" );
        });
      }
      // console.log(data.food[i]);

      $( "<ul/>", {
        "class": "my-new-list",
        html: days.join( "" )
      }).appendTo( "body" );
      // console.log(data.food);

    });
  });
});



