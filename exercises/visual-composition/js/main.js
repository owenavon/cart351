// Started with main,js & cart351_triangle.js code structure

// Empty array
let hourglassArray = [];
let NUM_HG = 1;

window.onload = function() {
  let canvas = document.getElementById("canvasArea"); // Assigns the canvasArea to canvas variable
  let context = canvas.getContext("2d"); // Get the context
  canvas.width = window.innerWidth; // Returns the interior width of the window in pixels
  canvas.height = window.innerHeight; // Returns the interior height of the window in pixels

  document.getElementById('inputText').addEventListener('change', readAndHandleTextFile); // Gets HTML content for file reader
  document.getElementById("outer").style.visibility = "hidden"; // Starts with the file browser hidden

  // Onload...
  for (let i=0; i<1; i++) {
    hourglassArray.push (new HourglassShape(i,(Math.random()*canvas.height),(Math.random()*30)+100,context) // 4 Items
    );
  }

  // Draws Introduction text on the Canvas
  context.font = "100px calibri";
  context.textAlign = "center";
  context.fillText("Click anywhere", canvas.width/2, canvas.height/2); // Positions text in centre

  // Allows the user to click anywhere on the canvas to start animation
  document.getElementById('canvasArea').addEventListener("click",mouseClickHandler);

  // Prevents the user from starting the animation more then once
  let clicked = false;
  function mouseClickHandler() {
    if (!clicked) {
      clicked = true;
      animate(); // Call the animate function
    }
  }

  function fileBrowserVisible() { // Makes the file browser visible
    document.getElementById("outer").style.visibility = "visible";
  }

  function readAndHandleTextFile() { // get the file list ...
  const selectedFileList = this.files;
  const file = selectedFileList[0];
    if (file.type.startsWith('text/')) {
      const pTag = document.createElement("p"); // Create a new image element
      const reader = new FileReader();
      //once is read
      reader.addEventListener("load", function () { // load = onRead
        console.log(reader.result);
        pTag.textContent = reader.result;
        // append to the document
        document.getElementById("textResult").appendChild(pTag);
      });
      // to read the file as text
      reader.readAsText(file); // Returns a string
    } // Ends if
  } // Ends event handler

  // Runs event handler infinity
  function animate() {
    context.clearRect(0,0,canvas.width,canvas.height); // Redraws the background between every animated movement

    for (let i=0; i < hourglassArray.length; i++) {
        if (hourglassArray[i].checkBounds(canvas) === true && hourglassArray[i].isActive === true) {
          let hourglass = new HourglassShape(0,0,(Math.random()*30)+100,context); // 4 items. Starts hourglass from top left corner
          hourglassArray.push(hourglass);

          hourglassArray[i].isActive = false // Immediately return as false, so that a new instance is not created while the hourglass is touching the canvas bounds
            setTimeout(() => {
              console.log('Touch'); // Each time the hourglass touches the canvas
              hourglassArray[i].isActive = true
            }, 1000) // 1 second delay
          } // close if

          else if (hourglassArray.length === 150) { // Prevents the browser from crashing
            fileBrowserVisible(); // Calls function to make File Browser Visisble
            break; // Stops the loop
          } // close else if

          hourglassArray[i].update();
          hourglassArray[i].display();
        }  // close for loop

        requestAnimationFrame(animate); // JS function to tell browser to perform animation
    } // End animation

  } // End load
