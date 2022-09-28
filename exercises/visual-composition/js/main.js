// Started with main,js & cart351_triangle.js code structure

//empty array
let hourglassArray = [];
let NUM_HG = 1;

window.onload = function() {
  let canvas = document.getElementById("canvasArea"); // Assigns the canvasArea to canvas variable
  let context = canvas.getContext("2d"); // Get the context
  canvas.width = window.innerWidth; // Returns the interior width of the window in pixels
  canvas.height = window.innerHeight; // Returns the interior height of the window in pixels

  // OnLOAD...
  for (let i=0; i<20; i++) {
    hourglassArray.push (new HourglassShape(i,
      (Math.random()*canvas.height),
      (Math.random()*30)+100,context)
    );
  }

  // Draws Introduction text on the Canvas
  context.font = "100px Arial";
  context.textAlign = "center";
  context.fillText("Click anywhere", canvas.width/2, canvas.height/2);

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

  //ANYTHING OUTSIDE of animate function and not within another event handler WILL run only ONCE...

  function animate() {
  // Redraws the background between every animated movement
  context.clearRect(0,0,canvas.width,canvas.height);

  for (let i=0; i<NUM_HG; i++) {
    hourglassArray[i].update(); // Triangle array current index
    hourglassArray[i].checkBounds(canvas);
    hourglassArray[i].display();
  }
  requestAnimationFrame(animate); // JS function to tell browser to perform animation

  } //end animate

} //end load
