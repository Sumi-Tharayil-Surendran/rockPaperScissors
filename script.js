//disappear rules when user click on the close button
function rules() {
    let main = document.querySelector(".main");
    main.style.display = 'none'
    let heading = document.getElementById("heading")
    heading.style.display = 'none'
    let userlogin = document.querySelector(".userlogin")
    userlogin.style.display = "block";
}
let myButton1 = document.getElementById("myButton1");
let error = document.getElementById("error")

myButton1.addEventListener('click', function (event) {
    let userName = document.getElementById("user").value.trim();
    if (!userName || !/^[a-zA-Z]+$/.test(userName)) {
        error.textContent="Enter a valid name";
        event.preventDefault();
    } else {
        error.textContent="${username}"+ "good to go"
    }


});


// let myButton1 = document.getElementById("myButton1");

// myButton1.addEventListener('click', function(event) {
//     let userName = document.getElementById("user").value.trim();
//     if (!userName || !/^[a-zA-Z]+$/.test(userName)) {
//         window.alert("Enter a valid name");
//         event.preventDefault();
//     } else {
//         alert('Welcome, ' + userName + '! You may proceed.');
//     }
// });
