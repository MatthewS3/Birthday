/*
<<<<<==============>>> Challenge <<<==============>>>>>
* Create a new repo called birthday
* Open your cloned repo on vs code
* Create an index.html and script/code.js
* On your index.html please create a div with a class of a container that will have the following child elements
    * 2 input elements
    * 1 label (output)
    * button to display when the person's birthday will be
NB: Make use of the Date method
Tip:
    *1st input will be a type of text.
    *2nd will be a type of date.
*/

 
(function () {
    let today = new Date();
    document.getElementById("bday").max = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate() < 10 ? ("0" + (today.getDate()-1)) : (today.getDate()-1));
  })();
  
  function calculateDays() {
    let today = new Date();
    let bday = new Date(document.getElementById("bday").value); 
    let age = today.getFullYear() - bday.getFullYear();
    
    let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());
    
    if(today > upcomingBday) {
      upcomingBday.setFullYear(today.getFullYear() + 1);
    }
    
    let one_day = 24 * 60 * 60 * 1000;
    
    let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));
    
    if (daysLeft && age < 200) {
      document.getElementById("result").innerText = `In ${daysLeft} day(s), you will be ${age + 1}!`;  
    } else {
      document.getElementById("result").innerText = "Please enter a valid birtday.";
    }
    
  }