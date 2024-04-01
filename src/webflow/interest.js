const form = document.querySelector("#interest-form");

form.addEventListener("submit", function (e) {
  // Prevent default Webflow form submit
  e.preventDefault();
  e.stopPropagation();
  // Calculate Interest and generate chart
  calculateInterest();
});

function calculateInterest() {
  // Create FormData object from the form
  const formData = new FormData(form);
}
