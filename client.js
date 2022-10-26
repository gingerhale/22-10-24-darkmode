// put this on every js page
'use strict';

// create form element variable
const darkMode = document.querySelector('input');

const darkModeLabel = document.querySelector('label');


// create body variable
const body = document.querySelector('body');

// creates dark mode function
const toggleDarkMode = function() {

// if checked === true
  if (darkMode.checked){
    body.classList.replace('light', 'dark');
    darkModeLabel.innerHTML = "Light Mode";
  } else {
    body.classList.replace('dark', 'light');
    darkModeLabel.innerHTML = "Dark Mode";

  }

}

// creates event listener --------  function vv
darkMode.addEventListener('click', toggleDarkMode);