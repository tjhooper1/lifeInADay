document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from being submitted normally
  calculateTime();
});

function calculateTime() {
  const averageLifeSpan = 72; // In years
  const userAge = document.getElementById("age").value;
  const hoursPerYear = 24 / averageLifeSpan;
  const userAgeInHours = userAge * hoursPerYear;

  let hours = Math.floor(userAgeInHours);
  const minutes = Math.round((userAgeInHours - hours) * 60);

  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    // We also adjust the hours to 12-hour format
    hours = hours > 12 ? hours - 12 : hours;
  }
  const time = `${padNumber(hours)}:${padNumber(minutes)} ${period}`;

  document.getElementById("clock").innerText = time;
  shareToFacebook(time);
}

function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

function shareToFacebook(time) {
  FB.ui(
    {
      method: "share",
      href: "https://life-in-a-day.vercel.app/", // Put the link to your website here
      quote: `If my life was only 24 hours, it'd be ${time} right now. Find out what time it is for you.`,
    },
    function (response) {}
  );
}
