function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  const formattedTime = now.toLocaleTimeString('en-US');

  document.getElementById("datetime").innerHTML = `
    <p>Today is <strong>${formattedDate}</strong></p>
    <p>Current Time: <strong>${formattedTime}</strong></p>
  `;

  const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const link = `<a href="${day}.html">Go to ${day.charAt(0).toUpperCase() + day.slice(1)}'s Exercises →</a>`;
  document.getElementById("today-exercise-link").innerHTML = link;
}

setInterval(updateDateTime, 1000);
updateDateTime();
