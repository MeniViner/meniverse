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


let availableDates = [];
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 7); //התחלה תמיד שובע מעשיו
availableDates.push(new Date(currentDate));

for (let i = 0; i < 4; i++) {
    currentDate.setDate(currentDate.getDate() + 1); //מעבר יום
    availableDates.push(new Date(currentDate));
}
const formattedDates = availableDates.map(date => date.toLocaleDateString('en-GB'));

let DatesToShow = document.getElementById('DatesToShow');
let datesHTML = "<ul>";
formattedDates.forEach(date => {
    datesHTML += `<li>${date}</li>`;
});
datesHTML += "</ul>";
DatesToShow.innerHTML = datesHTML;
 
