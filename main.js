document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from being submitted normally
  calculateTime();
});
document.getElementById("fb-share").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from being submitted normally
  shareToFacebook();
});

function calculateTime() {
  const averageLifeSpan = 72; // In years
  const userAge = document.getElementById("age").value;
  const hoursPerYear = 24 / averageLifeSpan;
  let userAgeInHours = userAge * hoursPerYear;

  let hours = Math.floor(userAgeInHours);
  let minutes = Math.round((userAgeInHours - hours) * 60);

  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    // We also adjust the hours to 12-hour format
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (userAge === "72") {
    hours = 12;
    minutes = 0;
    period = "AM";
  }

  document.getElementById("clock").innerText = `${padNumber(hours)}:${padNumber(
    minutes
  )} ${period}`;
}

function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

function shareToFacebook() {
  FB.ui(
    {
      method: "share",
      href: "https://life-clock.vercel.app/", // Put the link to your website here
    },
    function (response) {}
  );
}
