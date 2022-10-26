
let days = []; // Empty array that food objects get pushed to
let enterDays = []; // Empty array that typed food objects get pushed to
let enterButton = document.getElementById('enter-button'); // Assigns enterButton click event listener

$(document).ready(function() {


// MANIPULATED JSON DATA
$.getJSON('./loadFiles/weekendDinner.json',function(data) {
  // console.log(data.food);
  enterButton.addEventListener("click", () => {
  days = []; // local instance of Array
            
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

    let typedDay = $('#chosen-day').val() // Assigns users typed input to typedDay variable
    switch(true) {
      case typedDay === data.food[0].day: // Checks if variable is equl to Friday
        mapOne();
      break;
      case typedDay === data.food[1].day: // Checks if variable is equl to Saturday
        mapTwo();
      break;
      case typedDay === data.food[2].day: // Checks if variable is equl to Sunday
        mapThree();
      break;
      case typedDay === data.food[3].day: // Checks if variable is equl to Monday
        mapFour();
      break;
      default:
        console.log("Invalid Day");
      }
    });


    // CONNECTS USER WRITTEN DATE TO GETDAY FUNCTION
    function getDay(currentObj) {
      if (currentObj.day===$('#chosen-day').val()){
        return currentObj;
      }
    }  
  })
  // GET JSON END


  // MAP ONE
  function mapOne() {
    let map1 = L.map('map1').setView([45.53124433563363, -73.61254931021352], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, 
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="blank_">OpenStreetMap</a>' 
    }).addTo(map1);
    let myMarker1 = L.marker([45.53124433563363, -73.61254931021352]).addTo(map1); // Marker
  }


  // MAP TWO
  function mapTwo() {     
    let map2 = L.map('map2').setView([45.316097185565, -76.05087267549783], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, // you cannot zoom in more than 19, if set to 20, the map turns gray
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="blank_">OpenStreetMap</a>' 
    }).addTo(map2); // add tile layer to map
    let myMarker2 = L.marker([45.316097185565, -76.05087267549783]).addTo(map2); // Marker
  }


  // MAP THREE
  function mapThree() {
    let map3 = L.map('map3').setView([45.524410680401154, -75.7535873901997], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, // you cannot zoom in more than 19, if set to 20, the map turns gray
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="blank_">OpenStreetMap</a>' 
    }).addTo(map3); // add tile layer to map
    let myMarker3 = L.marker([45.524410680401154, -75.7535873901997]).addTo(map3); // Marker
  }


  // MAP FOUR
    function mapFour() {
    let map4 = L.map('map4').setView([45.524410680401154, -75.7535873901997], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, // you cannot zoom in more than 19, if set to 20, the map turns gray
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="blank_">OpenStreetMap</a>' 
    }).addTo(map4); // add tile layer to map
    let myMarker4 = L.marker([45.524410680401154, -75.7535873901997]).addTo(map4); // Marker
  }
});