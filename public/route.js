const dayButtons = document.getElementsByClassName('day-button');

for (const button of dayButtons) {
    button.addEventListener('click', () => {
        const index = Array.from(dayButtons).indexOf(button);
        const daySchedule = document.getElementsByClassName('day-schedule')[index];

        if (daySchedule.style.display === 'none' || daySchedule.style.display === '') {
            daySchedule.style.display = 'block';
        } else {
            daySchedule.style.display = 'none';
        }
    });
}

var availableDates = [
    "2023-08-15",
    "2023-08-20",
    "2023-08-25",
    "2023-08-30",
    "2023-09-05"
];

var availableDatesElement = document.getElementById("available-dates");

availableDates.forEach(function(date) {
    var dateElement = document.createElement("p");
    dateElement.textContent = "• " + date;
    availableDatesElement.appendChild(dateElement);
});
