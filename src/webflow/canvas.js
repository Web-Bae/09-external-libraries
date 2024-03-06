document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector("#canvas");

  // Adjust the canvas size
  function resizeCanvas() {}

  // Call resizeCanvas to set initial size and add event listener for any resize
  resizeCanvas();

  // Flag to track the painting state

  // Function called when the mouse button is pressed
  // Sets the painting flag to true and starts the drawing process
  function startPosition(e) {
    // Call the draw function immediately to allow dot-like drawings
  }

  // Function called when the mouse button is released
  // Resets the painting state and prepares the context for a new path
  function endPosition() {
    // Starts a new path by resetting the current path. This prevents lines from connecting to the next starting point.
  }

  // The main drawing function that reacts to mouse movements
  function draw(e) {
    // If we are not in painting mode, don't draw
    // Get the bounding rectangle of the canvas to consider any CSS styling
    // Calculate mouse position relative to the canvas.
    // This accounts for any element offset, ensuring the drawing position matches the mouse position.
    // Set the properties of the drawing line
    // Create a line to the new position from the last position
    // Render the line on the canvas
    // Begin a new path with a move to the current position
    // This prevents lines from being connected to the subsequent moveTo position
    // Moves the path to the new position without creating a line
  }

  // Event Listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);
});
