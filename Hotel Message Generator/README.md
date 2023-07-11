
Instructions for how to run your program:

1. Download file from github to local machine
2. Open it in VScode
3. Add the extension called "Live Server"
4. click "go live" on bottom right, start using the message generator in the browser that pops up! 



----- An overview of design decisions: --------

I wanted to make a project that covers as much as the requirements with simple, clean code! I decided to make the message template JSON simple, and use template literals in the "else if" statement to bring in the JSON data from different sources to create the message. Ideally, it would have been great to include the entire message info in the JSON file the contained message type, but was unable to make it work. Once the 3 dropdowns are selected, a message is created based on the message type, the user info, and the timestamp (start timestamp for check in, end timestamp for check out). Timestamps were converted to Hours to make anything before 12 say "good morning" and anything after 12 say "good afternoon"


----- What language you picked and why: ---------

I choose Javascript as it is my strongest language to show Kipsu I know how to code! I do have react skills, and wish I showed them here, but simple code is good code and I was able to come up with a solution without it. 

----- Your process for verifying the correctness of you program: -------

Clicking around and testing as many situations as possible! Double check that the raw JSON data and the message that is generated matched. I also used a UNIX timestamp convertor to make sure that my time dependent messages were correctly working. I avoided any errors on the dropdowns by making sure that a selection was required before submitting. 


----- What didn't you get to, or what else might you do with more time?: ------ 

I did not get to the generating a custom message portion of the coding exercise! I believe conditional rendering would be the way to achieve this, as well as maybe using a search and replace method to allow the user to type in "first name" and be able to replace it with the actual first name of the guest selected. I was also hoping to show some of my react skills with this project, but wrapped it up with simple Javascript, for better or worse!