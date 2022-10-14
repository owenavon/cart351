// //:: fINaLgetJson:
// $.getJSON('loadFiles/weekendDinner.json',function(data) {
//   //success
//     //step 1: console.log the result
//     console.log(data[1].day);
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



$("button").click(function(){
  $.getJSON("./loadFiles/weekendDinner.json", function(result){
    

    for (var i=0; i<jsonData.counters.length; i++) {
      var counter = jsonData.counters[i];
      console.log(counter.counter_name);
  }


  });
});


// Woks but, not with array elements

// $(document).ready(function(){
//   $("button").click(function(){
//     $.getJSON("./loadFiles/weekendDinner.json", function(result){
//       $.each(result, function(i, field){
//         $("div").append(field + " ");
//       });
//     });
//   });
// });