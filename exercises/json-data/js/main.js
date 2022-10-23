
let days = []; // Empty array that food objects get pushed to
let enterDays = []; // Empty array that typed food objects get pushed to

$(document).ready(function() {

$.getJSON('./loadFiles/weekendDinner.json',function(data) {
  console.log(data.food);

    $('#chosen-day').keyup(function(e) {
        if (e.keyCode == 13) {

          days = [];
          $('.food-list').fadeIn(5000); // NOT WORKING
          
          console.log($('#chosen-day').val());
          let searchCrit = $('#chosen-day').val()

          let filteredResults = data.food.filter(getDay);
          console.log(filteredResults);

          enterDays.push($('#chosen-day').val());
          for (let i = 0; i < data.food.length; i++) { // For loop to run through each object
            $.each (filteredResults[i], function(key, val) {
              days.push( "<li id='" + key + "'>" + val + "</li>" ); // Displays new items in array as list
            });

            if (enterDays.length > 0) {
              $("#result-container").empty(); // Clears Result container so only one object appears at once
            }
          }
    
          $("<ul/>", {
            "class": "food-list", html: days.join("") // Returns array as a string into the class, food-list
          }).appendTo("#result-container"); // Displays result inside specified ID
          
          responsiveVoice.speak(document.getElementById("result-container").textContent); // Reads results to user via Responsvive Voice API

          
        }
  
        function getDay(currentObj) {
          if (currentObj.day===$('#chosen-day').val()){
            return currentObj;
          }
        }
      });








    })
    .fail(function() {
        console.log( "error" );
    });
  
});











// if (enterDays.length === 0) {
            
          // }
          
          // for (let i = 0; i < enterDays.length; i++) {
          //   if (enterDays[i] !== $('#chosen-day').val()) {
          //     enterDays.push($('#chosen-day').val());
          //     console.log('test');
          //     console.log(enterDays);
  
          //     for (let i = 0; i < data.food.length; i++) { // For loop to run through each object
          //       $.each (filteredResults[i], function(key, val) {
          //         days.push( "<li id='" + key + "'>" + val + "</li>" );
          //       });
          //     }
          //   }
          // }