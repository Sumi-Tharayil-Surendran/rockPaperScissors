
function rules() {
    let main = document.querySelector(".main");
    main.style.display = 'none';
    let heading = document.getElementById("heading");
    heading.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    let userlogin = document.querySelector(".userlogin");
    let myButton = document.getElementById("myButton");
    
    myButton.addEventListener("click", function() {
        rules();
        userlogin.style.display = "block";
    });
    
    let myButton1 = document.getElementById("myButton1");
    let error = document.getElementById("error");
    
    myButton1.addEventListener('click', function(event) {
        console.log("Let's go button clicked!"); // Debugging statement
        let userName = document.getElementById("user").value.trim();
        if (!userName || !/^[a-zA-Z]+$/.test(userName)) {
            error.textContent = "Enter a valid name";
            event.preventDefault();
        } else {
            event.preventDefault();
            userlogin.style.display = "none";
            console.log("Displaying game section..."); // Debugging statement
            let userGame = document.querySelector(".userGame");
            userGame.style.display = "block";
            rules();
        }
    });
});
