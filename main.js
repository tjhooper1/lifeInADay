document.getElementById("ageForm").addEventListener('submit', function(event) {
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

    document.getElementById("clock").innerText = `${padNumber(hours)}:${padNumber(minutes)} ${period}`;
}

function padNumber(number) {
    return (number < 10) ? "0" + number : number;
}
