var input = document.getElementById("value");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", async function (event) {
  console.log(event.key);
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});
