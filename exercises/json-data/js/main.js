
let days = []; // Array that JSON Data gets assigned to

$(document).ready(function() {
  $("button").one("click", function() { // Registers a one-shot handler that only runs once 
    displayJSON(); // Calls the displayJSON function
  });



//   //:: fINaLgetJson:
// $.getJSON('loadFiles/daysTest.json',function(data) {
//   //success
//     //step 1: console.log the result
//     console.log(data[0].day);
//     //2 :: wait for key up
//     $('#daySelect').keyup(function(e) {
//          //test if enter is pressed
//          if (e.keyCode == 13) {
//           console.log($('#daySelect').val());
//           let searchCrit = $('#daySelect').val()
   
//           let filteredResults = data.filter(getDayComp);
//           console.log(filteredResults);
//           //could now display those results :)
//          }
  
//          function getDayComp(currentObj) {
//           if(currentObj.day===$('#daySelect').val()){
//               return currentObj;
//           }
//         }
//       });
//   })
//   //fail
//   .fail(function() {
//       console.log( "error" );
//   });
  


  function displayJSON() {
    $.getJSON("./loadFiles/weekendDinner.json", function(data) {
      for (let i = 0; i < data.food.length; i++) { // For loop to run through each object

        // console.log(data.food[i]);
        $.each (data.food[i], function(key, val) {
          days.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        if (i >= 0) { // Creates break between objects
          console.log(data.food);
          days.push("<br>");
        }
      }

      $( "<ul/>", {
        "class": "food-list",
        html: days.join("")
      }).appendTo("#result-container"); // Displays result inside specified ID
    });
  }

});