// Modified from https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos
// Modified from https://stackoverflow.com/questions/63440370/how-to-take-an-image-of-a-stream-and-download-it

(function () { // Immediately invoked function expression (function () {})();

  // Defines Variables
  const width = 1280; // Static width value
  let height = 0; // Height computed based on the input stream
  let streaming = false; // streaming indicates whether or not we're currently streaming. Set start video from camera to false

  // Defines variables, that are later setup in startup() function.
  let video = null;
  let canvas = null;
  let photo = null;
  let capturebutton = null;
  let downloadbutton = null;

  // STARTUP FUNCTION
  function startup() { // Connect variables that associate to HTML elements
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    capturebutton = document.getElementById('capture-button');
    downloadbutton = document.getElementById('download-button');

      navigator.mediaDevices.getUserMedia({
        video: true, // Collects video input
        audio: false // Not collecting audio input
      })
      .then((stream) => {
        video.srcObject = stream;
        video.play(); // Starts playing stream
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

      video.addEventListener('canplay', (ev) => { // canplay event is deliverd when video playback acutally begins
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth/width); // Sets streams width and height

          // Issue where the height can't be read from the video in Firefox - Sets static values.
          if (isNaN(height)) {
            height = width / (4/3);
            }
            // Sets the width and height of the video and canvas appropriately
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true; // Set to true so the stream does not accidentally restart
          }
      }, false);

      capturebutton.addEventListener('click', (ev) => { // Event listener that trigers taking the picture upon mouse click.
        takepicture(); // Calls takepicture function
        ev.preventDefault();
      }, false);

      clearphoto(); // Displays grey background if the image has not been taken
    }


    // CLEAR_PHOTO FUNCTION
    function clearphoto() {
      const context = canvas.getContext('2d');
      context.fillStyle = "#AAAAAA"; // Sets canvas background
      context.fillRect(0, 0, canvas.width, canvas.height);

      const data = canvas.toDataURL('image/png'); // Makes the image box capable of dislaying a png
      photo.setAttribute('src', data);
    }


    // TAKE_PICTURE FUNCTION
    function takepicture() {
        const context = canvas.getContext('2d'); // Get 2d drawing context to display video on canvas

          if (width && height) { // Sets width and height to match the captured frame
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height); // Captures the current frame of the video

            const data = canvas.toDataURL('image/png'); // Converts captured image to PNG
            photo.setAttribute('src', data); // Makes the captured box display the image
            downloadbutton.style.backgroundColor = '#006400'; // Indicates that the download button is now active by making it green

            downloadbutton.addEventListener('click', (ev) => {
            downloadpicture(); // Calls downloadpicture function
            ev.preventDefault();
        }, false);
    }
    else {
      clearphoto(); // Displays grey background if the image has not been taken
      }
    }


    // DOWNLOAD_PICTURE FUCNTION
    function downloadpicture() {
      let blob = canvas.toBlob(function (blob) { // Blob represents a an image contained in the canvas
      let anchor = document.createElement('a'); // 'a' creates a link
      anchor.style.display = 'none';
      document.body.appendChild(anchor); // Connects anchor to link

      let url = window.URL.createObjectURL(blob); // Static string containing URL which represents the data in the blob object.
      anchor.href = url;
      anchor.download = 'smile.png'; // Names the photo smile.png
      anchor.click();
      }, 'image/png');
    }
    window.addEventListener('load', startup, false); // Sets up the event listener to run the startup process once loading is complete.
})();
