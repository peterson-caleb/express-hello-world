//Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");

//create a date with Moment.js
let date = moment(document.getElementById("date-1").value);


document.getElementById("submit").addEventListener("click", () => {
  if (document.getElementById('date-1').value && document.getElementById('nights').value) {
    
    let dateString = document.getElementById("date-1").value
    let nights = document.getElementById('nights').value
    let checkIn = moment(dateString, "YYYY-MM-DD")
    console.log("Selected Date: " + checkIn.format('l'))
    let checkOut = checkIn.clone().add(nights, "days");
    console.log("Check Out: " + checkOut.format('l'))
    let reserveDate = checkOut.clone().subtract(14, "days")
    let reservationCheckIn = reserveDate.clone()
    console.log("Reserveable Check In: " + reservationCheckIn.format('l'))
    reserveDate.subtract(9, "months")
    console.log("Reserveable date: " + reserveDate.format('l'))
    
    document.getElementById('checkInOutput').innerHTML = `Dates:</span>`;
    document.getElementById('checkOutOutput').innerHTML = `Check Out Date:<span>${checkOut.format('l')}</span>`;
    document.getElementById('reservationCheckInOutput').innerHTML = `Reservation Check-In:<span>${reservationCheckIn.format('l')}</span>`;
    document.getElementById('reserveDateOutput').innerHTML = `Date reservation can be made:<span>${reserveDate.format('l')}</span>`;
  } else {
    document.getElementById('output').innerHTML = 'No date selected';
  }

});
