let days = []; // Empty array that food objects get pushed to
let enterDays = []; // Empty array that typed food objects get pushed to
let enterButton = document.getElementById('enter-button');

$(document).ready(function() {

$.getJSON('./loadFiles/weekendDinner.json',function(data) {
  console.log(data.food);

        enterButton.addEventListener("click", () => {
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
            $(`#map1`).show(); // DOES NOT WORK
          });
      
          function getDay(currentObj) {
              if (currentObj.day===$('#chosen-day').val()){
                return currentObj;
              }
            }

          })
          .fail(function() {
              console.log( "error" );
          });


    

     $(`#map1`).hide();
      // We create a leaflet map, and in setView, we determine coordinates and zoom level
      let map1 = L.map('map1').setView([45.53124433563363, -73.61254931021352], 15);

      // Add a tile layer using a URL ({z} is for zoom level, {x} for x coordinate, and {y} for y coordinate)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19, // you cannot zoom in more than 19, if set to 20, the map turns gray
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="blank_">OpenStreetMap</a>' 
      }).addTo(map1); // add tile layer to map

      let myMarker = L.marker([45.53124433563363, -73.61254931021352]).addTo(map1); // Marker
    
    


  
});