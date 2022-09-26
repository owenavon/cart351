
  const TWO_FIVE_SIX = 256; // Used in visualizer as divisble value
  const player = document.getElementById('player'); // Assigns player id to player constant.
  const startButton = document.getElementById('start'); // Assigns start id to startButton constant.
  const stopButton = document.getElementById('stop'); // Assigns stop id to stopButton constant.
  const visualizerButton = document.getElementById('see-visualizer'); // Assigns see-visualizer id to visualizerButton constant.
  const downloadRaw = document.getElementById('download-raw'); // Assigns download-raw id to the downloadRaw constant.

  // Hide & Show Content at start
  function hideShowContentAtStart() {
    $(`#player`).hide(); // Hides the player id by default.
    $(`#download-raw`).hide(); // Hides the download-raw id by default.
    $(`#stop`).hide(); // Hides the stop button by default.
    $(`#done-edit`).hide(); // Hides the done-edit button by default.
    $(`#see-visualizer`).hide(); // Hides the see-visualizer button by default.
    $(`#visualizer`).hide(); // Hides the visualizer content upon starting the program.
    $(`#visual-content`).hide(); // Hides the visual content.
    $(`#volume-accordion`).hide(); // Hides the accordion by default.
    $(`#accordion`).hide(); // Hides the accordion by default.
    $(`#record-rectangle`).hide(); // Hides the record-rectangle by default.
    // Show content
    $(`#start-stop-button`).text(`Press the "Start" button to record your voice`); // Default displayed text
  }
  hideShowContentAtStart(); // Calls the hideContentFromStart function.


  const handleSuccess = function(stream) { // Assigns the stream function to the handleSuccess constant.
  const options = {
    mimeType: 'audio/webm' // Media input type.
  };
  const recordedChunks = []; // Creates an empty array called recorded chunks.
  const mediaRecorder = new MediaRecorder(stream, options); // Assigns the MediaRecorder class to the mediaRecorder constant.


  mediaRecorder.addEventListener('dataavailable', function(event) { // dataavailable fires when mediaRecorder delivers media.
    if (event.data.size > 0) recordedChunks.push(event.data); // If audio is inputed, it is saved in recordedChunks
  });

  // Event listener upon stop button
  mediaRecorder.addEventListener('stop', function() { // Defines actions that happen upon cliking on the stop button
    player.src = URL.createObjectURL(new Blob(recordedChunks)); // Assigns the recorded audio input src to player.
    downloadRaw.href = URL.createObjectURL(new Blob(recordedChunks)); // Gnerates audio download link.
    downloadRaw.download = 'Your_Recording.wav'; // Name the recording to testRecording.wav.

    stopRecorderFlash(); // Calls the stopRecorderFlash rectangle.
    showHideContentAtStop(); // Calls the show hide conent after stop function.
    volumeSlider(); // Calls the volumeSlider function.
  });


  // Start record button event listener
  startButton.addEventListener('click', function() { // Event listener that listens for button click.
    mediaRecorder.start(); // Starts audio input recording upon event listener button.
    showHideContentAtStart(); // Calls the showHideContentAtStart function.
    startRecorderFlash(); // Calls the startRecorderFlash function.
  });


  // Stop record button event listener
  stopButton.addEventListener('click', function() { // Event listener that listens for button click.
    mediaRecorder.stop(); // Stops audio input recording upon event listener button.
  });


  visualizerButton.addEventListener(`click`, function() { // Calls Visualizer dialog box
    $(`#visualizer`).dialog({
      modal: true, // Creates box.
      height: 750, // Sets static box height.
      width: 700, // Sets static box width.
      resizable: false, // Prevents the user from resizing the box.
      draggable: false, // Prevents the user from dragging the box.
      show: { // Applies the below methods upon displaying the box.
        effect: `fadeIn`, // Fades the box in...
        duration: 1000 // Over 1 second.
      },
      hide: {
        effect: `fadeOut`, // Fades the box out...
        duration: 1000 // Over 1 second.
      },
      buttons: { // Creates button(s) on the box.
        "Close": function() { // Anonymous function that...
          $(this).dialog(`close`); // Creates a close button for the dialog box.
        }
      }
    });
    $(`#visual-content`).show(); // Displays the html content that builds the visualizer.
    soundVisualizer(); // Calls the soundVisualizer function.
  });


  // Modified from https://codepen.io/nfj525/pen/rVBaab
  function soundVisualizer() { // Sound Visualizer
    let visualizerPlayer = document.getElementById(`visualizer-player`); // Assigns visualizerPlayer variable to visualizer-player id.
    let context = new AudioContext(); // Assigns an audio processing graph to the varibale context.
    let srcAudio = context.createMediaElementSource(visualizerPlayer); // Assigns srcAudio to visualizerPlayer for audio to playblack in audio player.
    let analyser = context.createAnalyser(); // Assigns analyser to  content to ensure content is of correct size.
    let canvas = document.getElementById(`canvas`); // Provides the visualizer with coordinates for viewport.
    let ctx = canvas.getContext("2d");

    visualizerPlayer.src = URL.createObjectURL(new Blob(recordedChunks)); // Assigns the recorded audio input src to visualizerPlayer.
    srcAudio.connect(analyser); // Appends srcAudio to analyser
    analyser.connect(context.destination);
    analyser.fftSize = TWO_FIVE_SIX; // Represnts window size in samples when getting data.

    let bufferLength = analyser.frequencyBinCount; // Assigns bufferLength to frequencyBinCount as a read only property for the analyser node. (128 bitrate)
    let dataArray = new Uint8Array(bufferLength); // Assigns dataArray to special array of 8-bit unsigned integers.
    let WIDTH = canvas.width; // Assigns width variable to canvas.
    let HEIGHT = canvas.height; // Assigns height varibale to canvas.
    let barWidth = (WIDTH / bufferLength) * 2.5; // Sets the visual bar length width based off of 256 units.
    let barHeight; // Sets barHeight as undefined.
    let x = 0; // Assigns x position to zero (0).


      function renderFrame() {
        requestAnimationFrame(renderFrame); // Tells the browser to perform an animation, and uses renderFrame function as the callback.
        x = 0; // Assigns x position to zero (0).

        analyser.getByteFrequencyData(dataArray); // Copies the current frequency data into the passed unsigned byte array. If the array has fewer elements than the frequencyBinCount, the excess elements will be dropped.

        ctx.fillStyle = `#f5f5f5`; // Sets the canvas background to light grey.
        ctx.fillRect(0, 0, WIDTH, HEIGHT); // Necssary for bars to not overlap.

        for (let i = 0; i < bufferLength; i++) { // for loop to call bars.
          barHeight = dataArray[i];
          let r = barHeight + (25 * (i/bufferLength)); // Sets r to barHeight for high frequnecies.
          let g = 250 * (i/bufferLength); // Sets g to mid frequnecies.
          let b = 50; // Sets b to low frequnecies.
          ctx.fillStyle = `rgb(` + r + `,` + g + `,` + b + `)`; // Assigns rgb dynamic values to rgb string.
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight); // Draws the bar widths and heights?
          x += barWidth + 1; // Allows the bar width to increase in size with added frequency.
        }
      }
      renderFrame(); // Plays animation
    }
  }; // Function Stream


  // Get user media via mediaStream API once media devices have been intialized.
  navigator.mediaDevices.getUserMedia({ // Prompts the user for permission to use media input.
    audio: true, // Access and collects user audio
    video: false // Declines video access
  }).then(handleSuccess); // Proccess the collected data


  function startRecorderFlash() { // Starts recording animation
    setInterval(function() { // Creates an interval on the anonymous function.
      $(`#record-rectangle`).fadeToggle(1000); // Simulates html blink tag by flashing every 1 second.
    });
  }


  function stopRecorderFlash() { // Stops recording animation
    setInterval(function() {
      $(`#record-rectangle`).remove(); // Removes the recording rectangle when the user press the stop button.
    });
  }


  function showHideContentAtStart() { // Hides & Shows button content upon record start button
    // Displays content
    $(`#stop`).show(); // Shows the stop button once the user has started the recording.
    // Text strings
    $(`#start-stop-record`).text(`Press the "Stop" button to terminate the recording`); // Dynamically changes the html text upon clicking the start button.
    // Hides buttons
    $(`#start`).hide(); // Hides the start button once the user has started the recording.
    $(`#start-stop-button`).hide(); // Hides the start-stop-button text.
  }


  function showHideContentAtStop() { // Show & Hides button content upon record stop button
    // Volume Accordion UI
    $(`#volume-accordion`).show(); // Shows the volume accordion.
    $(`#volume-accordion`).accordion({
      collapsible: true, // Allows the user to collapse the volume accordion options.
      active: false // Starts the volume accordion as completely collapsed.
    });
    // Displays content
    $(`#download-raw`).show(); // Shows the download-raw button once the recording has stopped.
    $(`#player`).show(); // Displays the player interface upon stopping the event listener.
    $(`#done-edit`).show(); // Displays the done-edit button.
    $(`#see-visualizer`).show(); // Displays the see-visualizer button.
    // Hides buttons
    $(`#start-stop-record`).hide(); // Hides the start-stop-record text.
    $(`#start-stop-button`).hide(); // Hides the player interface upon stopping the event listener.
    $(`#start-stop-record`).hide(); // Hides the player interface upon stopping the event listener.
    $(`#stop`).hide(); // Hides the player interface upon stopping the event listener.
    $(`#start`).hide(); // Hides the player interface upon stopping the event listener.
  }


  function volumeSlider() { // VOLUME SLIDER
    $(`#volume-slider`).on(`change`, function(event) { // Change method is applied to allow different values to display.
    let volumeInput = $(this).val(); // volumeInput ID is set to val method.
    $(`#volume-level`).text(`Volume is set to: ${volumeInput}`); // text method is assigned to volume-level ID, so volume-input is dsiplayed when user moves slider.
  });

  let volume = document.querySelector("#volume-slider"); // Assigns volume variable to volume-slider ID.
    volume.addEventListener("change", function(event) { // Change function is applied to allow for volume minpulation
    (player).volume = event.currentTarget.value / 100; // Assigns the player constant streamed data to the volume-slider ID.
    });
  }
