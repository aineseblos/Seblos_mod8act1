var fname = prompt("Please enter your full name:")
document.getElementById("fname").innerHTML = fname;

var username = prompt("Please enter your username:")
document.getElementById("username").innerHTML = username;

if (confirm("What is your gender? \n Press OK if you are a male \n Cancel if Female")== true){
    alert("Your profile gender is set to MALE");
    var gender = "M";
}else{
    alert("Your profile gender is set to FEMALE");
    var gender = "F"
}

var desc = prompt("Please enter a brief description of yourself")
document.getElementById("gender").innerHTML = gender;

var year = prompt("Please enter your Birth Year:")
document.getElementById("year").innerHTML = year;

var age = 2023 - year;
document.getElementById("age").innerHTML = age;

if (confirm("Do you want to use a costum profile picture?")){
    var img = prompt("Please enter the file name of the picture. (Ex: wow.jpg )");
    alert("Profile picture has been updated.");
}else{
    alert("No image has been set.");
}
document.getElementById("ppic").src= img;






