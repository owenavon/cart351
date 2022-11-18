$(document).ready(function(){

    // 5 Modals
    $("#15btn").click(function() {
        $("#modal15").modal('show');
    })

    $("#5btn").click(function() {
        if ($("#5btn").hasClass("active")) {
            $("#modal5").modal('show');
        }
    })

    $("#28btn").click(function() {
        if ($("#28btn").hasClass("active")) {
            $("#modal28").modal('show');
        }
    })

    $("#19btn").click(function() {
        if ($("#19btn").hasClass("active")) {
            $("#modal19").modal('show');
        }
    })

    $("#9btn").click(function() {
        if ($("#9btn").hasClass("active")) {
            $("#modal9").modal('show');
        }
    })


    // Download Poems upon poemFiveOkay click
    $("#poemFiveOkay").click(function(){
        $("#downloadTxtFile").append("Download Poems");
    });


    // for more than just one date
    let datesArray = [$("#15btn"), $("#5btn"), $("#28btn"), $("#19btn"), $("#9btn")];
    

    // Poems from https://www.poemhunter.com/
    // POEM 1
    $("#poemOneOkay").click(function() {
        event.preventDefault();
        // console.log("Click works");
        
        // Appends poem to log and adds the class of active to dates specified in the datesArray
        $.ajax({
            type: "GET",
            url: "../actions/action-append-one.php",
            dataType: "text", /*response will be text */
            data: $.param({ key: "There are some nights when sleep plays coy, aloof and disdainful. And all the wiles that I employ to win its service to my side are useless as wounded pride,and much more painful."}), // Data, encoded with param
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            cache: false,
            processData: false,
            timeout: 600000,
            success: function (response) {
                //reponse is a STRING (not a JavaScript object -> so we need to convert)
                console.log("Poem 1 Success!");

                $("#5btn").addClass("active");

                // console.log(response);
                let jsonResponse = JSON.parse(response);
                console.log(jsonResponse);

                $("#logText").html("");

                for(let i = 0; i < jsonResponse.length; i+=2){
                    $("#logText").append(jsonResponse[i]);
                    $("#logText").append(`<br>`);
                    $("#logText").append(jsonResponse[i+1]);
                    $("#logText").append(`<br>`);
                    // $("#logText").append(`<br>`);
                }
            },
            error:function(){
                console.log("Error Occurred - Poem 1");
            }
        });
    })

    // POEM 2
    $("#poemTwoOkay").click(function() {
        event.preventDefault();
        // console.log("Click works");
        
        // Appends poem to log and adds the class of active to dates specified in the datesArray
        $.ajax({
            type: "GET",
            url: "../actions/action-append-two.php",
            dataType: "text", /*response will be text */
            data: $.param({ key: "A voice said, Look me in the stars And tell me truly, men of earth, If all the soul-and-body scars Were not too much to pay for birth."}), // Data, encoded with param
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            cache: false,
            processData: false,
            timeout: 600000,
            success: function (response) {
                //reponse is a STRING (not a JavaScript object -> so we need to convert)
                console.log("Poem 2 Success");

                $("#28btn").addClass("active");

                // console.log(response);
                let jsonResponse = JSON.parse(response);
                console.log(jsonResponse);

                $("#logText").html("");

                for(let i = 0; i < jsonResponse.length; i+=2){
                    $("#logText").append(jsonResponse[i]);
                    $("#logText").append(`<br>`);
                    $("#logText").append(jsonResponse[i+1]);
                    $("#logText").append(`<br>`);
                    // $("#logText").append(`<br>`);
                }
            },
            error:function(){
                console.log("Error Occurred - Poem 2");
            }
        });
    })

    // POEM 3
    $("#poemThreeOkay").click(function() {
        event.preventDefault();
        // console.log("Click works");
        
        // Appends poem to log and adds the class of active to dates specified in the datesArray
        $.ajax({
            type: "GET",
            url: "../actions/action-append-three.php",
            dataType: "text", /*response will be text */
            data: $.param({ key: "Said Hamlet to Ophelia, I'll draw a sketch of thee, What kind of pencil shall I use? 2B or not 2B?"}), // Data, encoded with param
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            cache: false,
            processData: false,
            timeout: 600000,
            success: function (response) {
                //reponse is a STRING (not a JavaScript object -> so we need to convert)
                console.log("Poem 3 Success");

                $("#19btn").addClass("active");

                // console.log(response);
                let jsonResponse = JSON.parse(response);
                console.log(jsonResponse);

                $("#logText").html("");

                for(let i = 0; i < jsonResponse.length; i+=2){
                    $("#logText").append(jsonResponse[i]);
                    $("#logText").append(`<br>`);
                    $("#logText").append(jsonResponse[i+1]);
                    $("#logText").append(`<br>`);
                    // $("#logText").append(`<br>`);
                }
            },
            error:function(){
                console.log("Error Occurred - Poem 3");
            }
        });
    })

    // POEM 4
    $("#poemFourOkay").click(function() {
        event.preventDefault();
        // console.log("Click works");
        
        // Appends poem to log and adds the class of active to dates specified in the datesArray
        $.ajax({
            type: "GET",
            url: "../actions/action-append-four.php",
            dataType: "text", /*response will be text */
            data: $.param({ key: "Bring me all of your dreams, You dreamer, Bring me all your Heart melodies That I may wrap them In a blue cloud-cloth Away from the too-rough fingers Of the world."}), // Data, encoded with param
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            cache: false,
            processData: false,
            timeout: 600000,
            success: function (response) {
                //reponse is a STRING (not a JavaScript object -> so we need to convert)
                console.log("Poem 4 Success");

                $("#9btn").addClass("active");

                // console.log(response);
                let jsonResponse = JSON.parse(response);
                console.log(jsonResponse);

                $("#logText").html("");

                for(let i = 0; i < jsonResponse.length; i+=2){
                    $("#logText").append(jsonResponse[i]);
                    $("#logText").append(`<br>`);
                    $("#logText").append(jsonResponse[i+1]);
                    $("#logText").append(`<br>`);
                    // $("#logText").append(`<br>`);
                }
            },
            error:function(){
                console.log("Error Occurred - Poem 4");
            }
        });
    })

    // POEM 5
    $("#poemFiveOkay").click(function() {
        event.preventDefault();
        // console.log("Click works");
        
        // Appends poem to log and adds the class of active to dates specified in the datesArray
        $.ajax({
            type: "GET",
            url: "../actions/action-append-five.php",
            dataType: "text", /*response will be text */
            data: $.param({ key: "Nature's first green is gold, Her hardest hue to hold. Her early leaf's a flower; But only so an hour. Then leaf subsides to leaf, So Eden sank to grief, So dawn goes down to day Nothing gold can stay."}), // Data, encoded with param
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            cache: false,
            processData: false,
            timeout: 600000,
            success: function (response) {
                //reponse is a STRING (not a JavaScript object -> so we need to convert)
                console.log("Poem 5 Success");

                // console.log(response);
                let jsonResponse = JSON.parse(response);
                console.log(jsonResponse);

                $("#logText").html("");

                for(let i = 0; i < jsonResponse.length; i+=2){
                    $("#logText").append(jsonResponse[i]);
                    $("#logText").append(`<br>`);
                    $("#logText").append(jsonResponse[i+1]);
                    $("#logText").append(`<br>`);
                    // $("#logText").append(`<br>`);
                }
                console.log("Download Poems Link Appears");
            },
            error:function(){
                console.log("Error Occurred - Poem 5");
            }
        });
    })

})