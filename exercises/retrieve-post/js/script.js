$(document).ready(function(){

//     jQuery.get('../files/activeDates.txt', function(data) {
//         alert(data);
//         //process text file line by line
// //         $('#div').html(data.replace('n',`
// // `
// //      ));
//      });

    $("#15btn").click(function() {
        $("#modal15").modal('show');
    })

    let activeDates = [];
    
    $("#riddleOneOkay").click(function() {
        event.preventDefault();
        console.log("it's fine");
        
        $.ajax({
            type: "GET",
             url: "../actions/action-append-one.php",
             dataType: "text", /*response will be text */
             data: $.param({ key: "hello"}), // Data, encoded with param
             contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

             cache: false,
             processData: false,
             timeout: 600000,
             success: function (response) {
                //reponse is a STRING (not a JavaScript object -> so we need to convert)
                console.log("riddle success!");
                // let riddle1 = response;
                // console.log(riddle1);

                // let newP = $("<p>Riddle 1</p>");
                // newP.prependTo("#textDiv");
                // newP.innerHTML = "test";
                location.reload();

            },
            error:function(){
           console.log("error occurred");
         }
       });



        
        let myDate = $("#5btn").addClass('active');

        activeDates.push({"first": myDate[0].innerHTML});
        

        let formData = new FormData();
        for(let i = 0; i< activeDates.length; i++){
            formData.append(`e${i}`, JSON.stringify(activeDates[i]));
        }
        formData.append('lengthOfVals',JSON.stringify(activeDates.length));
        console.log(activeDates);
        console.log(formData);


        // ajax for the active class dates
        $.ajax({
            type: "POST",
            url: "../actions/action-append-date-class.php",
            processData: false,
            contentType: 'application/json; charset=UTF-8',
            data: formData, // Data, encoded with param
            // dataType: 'json',
            contentType: false, //contentType is the type of data you're sending,i.e.application/json; charset=utf-8
            cache: false,
            timeout: 600000,
            success: function (response) {
                //reponse is a STRING (not a JavaScript object -> so we need to convert)
                console.log("Success!");
                // let dates = JSON.parse(response);


                console.log(response);
                // console.log(dates);

                activeDates = [];

            // let newP = $("<p>Riddle 1</p>");
            // newP.prependTo("#textDiv");
            // newP.innerHTML = "test";

        },
        error:function(){
        console.log("error occurred");
     }
   });

    })





    
})