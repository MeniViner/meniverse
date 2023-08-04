const dateInput = document.getElementById('selectedDate');
const availableDates = [
    '2023-08-01', '2023-08-02', '2023-08-03', '2023-08-04', '2023-08-05',
    '2023-08-11', '2023-08-12', '2023-08-13', '2023-08-14', '2023-08-15',
    '2023-08-24', '2023-08-25', '2023-08-26', '2023-08-27', '2023-08-28'
];
dateInput.addEventListener('input', () => {
    const selectedDate = new Date(dateInput.value);
    const formattedSelectedDate = dateInput.value;
    
    if (!availableDates.includes(formattedSelectedDate)) {
        alert("This date is not available. Please choose another date.");
        dateInput.value = ""; // Clear the selected date if it's not available.
    }
});

const dateCheckin = document.getElementById('checkin'); 

                







// const dateInput = document.getElementById('selectedDate');
//         const availableDates = ['2023-08-01', '2023-08-02', '2023-08-05', '2023-08-09', '2023-08-15'];

//         // Disable all the dates in the date picker
//         const allDates = [];
//         const minDate = new Date(dateInput.min);
//         const maxDate = new Date(dateInput.max);
//         const currentDate = new Date(minDate);

//         while (currentDate <= maxDate) {
//             allDates.push(new Date(currentDate));
//             currentDate.setDate(currentDate.getDate() + 1);
//         }

//         allDates.forEach(date => {
//             const dateElement = document.querySelector(`input[type="date"][value="${date.toISOString().slice(0, 10)}"]`);
//             if (dateElement) {
//                 dateElement.disabled = true;
//             }
//         });

//         // Enable the available dates in the date picker
//         availableDates.forEach(date => {
//             const dateElement = document.querySelector(`input[type="date"][value="${date}"]`);
//             if (dateElement) {
//                 dateElement.disabled = false;
//             }
//         });