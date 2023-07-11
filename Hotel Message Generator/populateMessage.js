const form = document.getElementById('messageForm');

// Add event listener for the "submit" event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // setting variables for the form data
  let hotel = form.elements.hotel.value;
  let user = form.elements.user.value;
  let message = form.elements.message.value;

  // Checking to make sure the data is here
  console.log('hotel:', hotel);
  console.log('user:', user);
  console.log('message type:', message);

  //Changing string data back to JSON
  let userParse = JSON.parse(user);
  let hotelParse = JSON.parse(hotel);
  let messageParse = JSON.parse(message);

 // setting variable for type of message to display
  let greetingType = messageParse.messageType;

  // setting the variables for time specific messages
  let checkInTime = userParse.reservation.startTimestamp;
  let checkOutTime = userParse.reservation.endTimestamp;
  let checkInHour = new Date(checkInTime * 1000);
  let checkOutHour = new Date(checkOutTime * 1000)
  let checkIn = checkInHour.getHours();
  let checkOut = checkOutHour.getHours();


// identifying which HTML element we want the message to display 
  let messageResult = document.getElementById
  ('messageResult');

// else if statement that takes in the message type, as well as the timestamp based on check in/check out and returns a message to display 
  if (greetingType === "Check In" && checkIn <= 12) { 
    messageResult.innerHTML = `Good Morning ${userParse.firstName}, and welcome to ${hotelParse.company}. Room ${userParse.reservation.roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything` ;
  } else {
    if (greetingType === "Check In" && checkIn > 12) {
        messageResult.innerHTML = `Good Afternoon ${userParse.firstName}, and welcome to ${hotelParse.company}. Room ${userParse.reservation.roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything` ;
   } else { 
    if (greetingType === "Check Out" && checkOut <= 12) {
        messageResult.innerHTML = `Good Morning ${userParse.firstName} ${userParse.lastName}, you have now been checked out of Room ${userParse.reservation.roomNumber} at the ${hotelParse.company}. Please come back soon!`;
    } else { 
        if (greetingType === "Check Out" && checkOut > 12) {
            messageResult.innerHTML = `Good Afternoon ${userParse.firstName} ${userParse.lastName}, you have now been checked out of Room ${userParse.reservation.roomNumber} at the ${hotelParse.company}. Please come back soon!`;
    } else {
    if (greetingType === "Room Service") { 
        messageResult.innerHTML = `Hello ${userParse.firstName} ${userParse.lastName}, your room service order at ${hotelParse.company} is out for delivery to room ${userParse.reservation.roomNumber}, listen for a knock at the door!`;
    } else {
      messageResult.innerHTML = "Please select A message Type";
  }}}}};  

});

