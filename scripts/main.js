let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hello-world.jpg') {
      myImage.setAttribute('src', 'images/dagongren.png');
    } else {
      myImage.setAttribute('src', 'images/hello-world.jpg');
    }
}	

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '打工人：' + storedName;
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = '打工人：' + myName;
}
myButton.onclick = function() {
   setUserName();
}