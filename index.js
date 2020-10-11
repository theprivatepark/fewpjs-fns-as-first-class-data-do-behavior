/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let hoursMinutes = timeString.split(/[.:]/); //["10", "10"]
  let hours = parseInt(hoursMinutes[0], 10);
  let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  let timeNumber = hours + minutes / 60;

  if (timeNumber < 12) {
    return "Good Morning";
  }
  else if (timeNumber >= 12 && timeNumber < 17) {
   return "Good Afternoon";
  }
  else if (timeNumber >= 17) {
    return "Good Evening";
  }
   
}

/* Write your implementation of displayMessage() */
function displayMessage(blah) {
  let id = document.getElementById("greeting")
  id.innerText = blah
  
  
}



