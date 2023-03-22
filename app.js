let eye = document.querySelectorAll('.eye');

let eyeRect = eye[0].getBoundingClientRect();

let container = document.querySelector('.eyeContainer');
let containerRect = container.getBoundingClientRect();


document.body.addEventListener('mousemove', eyesFollow, false);

function eyesFollow(e) {
requestAnimationFrame(() =>{
let xPos = e.pageX;
let yPos = e.pageY;

let xDiff = (eyeRect.x + eyeRect.width /2) - xPos;
let yDiff = (eyeRect.y + eyeRect.height /2) - yPos;

let angle = Math.atan2(yDiff, xDiff) * 180 / Math.PI;
container.style.setProperty('--eyeAngle',angle.toFixed(2) + 'deg');

//tilting the face relative to mouse cursor

let mouseXRelativeToContainer = xPos - containerRect.x - containerRect.width / 2;
let mouseYRelativeToContainer = yPos - containerRect.y - containerRect.height / 2;

let containerXAngle = 60 * (mouseXRelativeToContainer / window.innerWidth);
let containerYAngle = -1 * 60 * (mouseYRelativeToContainer /window.innerHeight);

container.style.setProperty('--xAngle', containerXAngle.toFixed(2) + 'deg');
container.style.setProperty('--yAngle', containerYAngle.toFixed(2) + 'deg');

});

}
