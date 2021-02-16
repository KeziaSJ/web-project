const myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute('src','images/4.jpg');
    } else {
      myImage.setAttribute('src','images/3.jpg');
    }
}