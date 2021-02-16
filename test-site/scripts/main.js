// const myHeading = document.querySelector("h1");
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute('src','images/4.jpg');
    } else {
      myImage.setAttribute('src','images/3.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() 
// {
//   let myName = prompt('Please enter your name.');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'My Cat is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) 
// {
//   setUserName();
// } 
// else 
// {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'My Cat is cool, ' + storedName;
// }
myButton.onclick = function() 
{
  setUserName();
}

function setUserName() 
{
  let myName = prompt('Please enter your name.');
  if(!myName) 
  {
    setUserName();
  }
  else
  {
    localStorage.setItem('name', myName);
    myHeading.textContent = `My Cat is cool, ${myName}`;
  }
}