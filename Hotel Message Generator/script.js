"use strict";

//importing JSON data from local files
import users from './guests.json' assert {type:'json'};
import hotels from './companies.json' assert {type:'json'};
import messages from './messages.json' assert {type:'json'};

// identifying which HTML element we want to populate with JSON data
let guestDropdown = document.getElementById
('user');
let hotelDropdown = document.getElementById
('hotel');
let messageDropdown = document.getElementById
('message');

// these 3 functions loops through the data, turns our JSON object into a string and attaches the value to the selection, as well as setting what text we want to see in the dropdown 
function populateHotelDropdown() {
    for ( let i= 0; i < hotels.length; i++) {
        let option = document.createElement
        ('option');
        let hotelString = JSON.stringify(hotels[i]);
        option.value = hotelString;
        option.text = hotels[i].company;
        hotelDropdown.appendChild(option);
    }
}

function populateGuestDropdown() {
    for ( let i= 0; i < users.length; i++) {
        let option = document.createElement
        ('option');
        let userString = JSON.stringify(users[i]);
        option.value = userString;
        option.text = users[i].firstName + ' ' + users[i].lastName;
        guestDropdown.appendChild(option);
    }
}

function populateMessageDropdown() {
    for ( let i= 0; i < messages.length; i++) {
        let option = document.createElement
        ('option');
        let messageString = JSON.stringify(messages[i])
        option.value = messageString;
        option.text = messages[i].messageType;
        messageDropdown.appendChild(option);
    }
}

// runs the three functions that we defined above 
populateGuestDropdown();
populateHotelDropdown();
populateMessageDropdown();
