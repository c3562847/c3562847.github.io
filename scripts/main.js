let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Spiral-Galaxy1.jpg') {
      myImage.setAttribute ('src','images/Starsinthesky1.jpg');
    } else {
      myImage.setAttribute ('src','images/Spiral-Galaxy1.jpg');
    }
}

//stores homepage button
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


//User can store their name
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Galaxies are cool, ' + myName;
  }
}


//
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Galaxies are cool, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}