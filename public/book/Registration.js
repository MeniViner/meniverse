$(document).ready(function() {
    const dayCost = 500;

    $('#success, .success-message, .cost').hide();

    $('#send').click(function(event) {
        event.preventDefault();

        const name = $('input[name="username"]').val();
        const email = $('input[name="email"]').val();
        const phone = $('input[name="phone"]').val();
        const checkin = new Date($('input[name="checkin"]').val());
        const checkout = new Date($('input[name="checkout"]').val());

        if (!name) {
            alert("Please fill in your full name.");
            return;
        } else if (!email) {
            alert("Please fill in your email address.");
            return;
        } else if (!phone) {
            alert("Please notice that we need your phone number to send you important messages.");
            return;
        } else if (!checkin.getTime() || !checkout.getTime()) {
            alert("Let us know when you will be checking in and checking out sates.");
            return;
        }

        if (checkout < checkin) {
            alert("please notice: The check-out date cannot be earlier than the check-in date.");
            return;
        }

        if (!validatePhoneNumber(phone)) {
            alert("Invalid phone number. Please enter a valid phone number.");
            return;
        }

        if (!isFullNameValid(name)) {
            alert("please notice: It is important that you enter a real valid name.");
            return;
        }

        const numberOfDays = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
        const totalCost = dayCost * numberOfDays;

        $('#total-cost').text("Total Cost: " + totalCost + "₪ (ILS)");
        $('#total-cost').show(); 

        $('.form').hide();
        $('#Your-info').hide();
        $('#success, .success-message, .cost').show();
    });

    function validatePhoneNumber(phone) {
        const regex = /^0[1-9]\d{8}$/;
        return regex.test(phone);
    }

    function isFullNameValid(name) {
        var regex = /^[A-Za-z\s]+$/;
        return regex.test(name) && name.includes(" ");
    }
});

function generateRoundedAvailableDates() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;

    var roundedDates = [5, 10, 15, 20, 25];
    var availableDates = [];

    roundedDates.forEach(function(day) {
        var dateString = currentYear + "-" + (currentMonth < 10 ? "0" : "") + currentMonth + "-" + (day < 10 ? "0" : "") + day;
        availableDates.push(dateString);
    });

    return availableDates;
}

function displayRoundedAvailableDates() {
    var availableDates = generateRoundedAvailableDates();
    var availableDatesElement = document.getElementById("available-dates");

    availableDatesElement.innerHTML = "";

    availableDates.forEach(function(date) {
        var formattedDate = date.split('-').reverse().join(' / '); 
        var dateElement = document.createElement("p");
        dateElement.textContent = "•  " + formattedDate;

        dateElement.addEventListener("click", function() {
            var selectedDate = new Date(date);
            var currentDate = new Date();
            var checkinDate = new Date($('input[name="checkin"]').val());

            if (selectedDate >= currentDate && selectedDate >= checkinDate) {
                $('input[name="checkout"]').val(date);
            } else {
                alert("You can't choose this date.");
            }
        });

        availableDatesElement.appendChild(dateElement);
    });
}

displayRoundedAvailableDates();
