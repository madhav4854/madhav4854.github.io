console.log("Hello World from Java Script");
// alert("Hello World from Java Script");

var users = [
    {name:"John Doe", gender:"Male", image:"john.png"},
    {name:"Jane Doe", gender:"Female", image:"jane.png"},
    {name:"Madhav", gender:"Male", image:"madhav.jpeg"}
];

var curSelectedIdx = 0;

var btnToggle = document.getElementById("btn-toggle");
var userImage = document.getElementById("user-image");
var userName = document.getElementById("user-name");
var userGender = document.getElementById("user-gender")

btnToggle.addEventListener("click", function () {
    curSelectedIdx = (curSelectedIdx + 1) % users.length;
    console.log("Now selected user is " + curSelectedIdx);
    var curObj = users[curSelectedIdx];
    userImage.src = curObj.image;
    userName.textContent = curObj.name;
    userGender.textContent = curObj.gender;
});