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

  // Use FormData API to get form values
  const principal = Number(formData.get("principal"));
  const rate = Number(formData.get("rate"));
  const frequency = Number(formData.get("frequency"));
  const years = Number(formData.get("years"));

  // Calculating compound interest
  const amount =
    principal * Math.pow(1 + rate / 100 / frequency, frequency * years);

  // Preparing data for the chart
  const labels = Array.from({ length: parseInt(years) }, (_, i) => i + 1);
  const data = [];
  for (let year = 1; year <= years; year++) {
    const yearAmount =
      principal * Math.pow(1 + rate / 100 / frequency, frequency * year);
    data.push(yearAmount);
  }

  // Chart.js to render the chart
  const ctx = document.querySelector("#chart").getContext("2d");
  if (window.interestChart instanceof Chart) {
    window.interestChart.destroy(); // Destroy existing chart instance if exists
  }
  window.interestChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Investment Over Time",
          data: data,
          borderColor: "#5e75d2",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Amount ($)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Year",
          },
        },
      },
    },
  });
}
