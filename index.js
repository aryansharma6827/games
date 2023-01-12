document.addEventListener("keypress", function (event) {

    handleClick(event.key);
    buttonAnimation(event.key);
});



// document.querySelector("button").addEventListener("click", handleClick);
// dont add parenthesis is the function caller in dom

for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", handle);


}



function handle() {
    var a = this.innerHTML;
    handleClick(a);
    buttonAnimation(a);
}


function handleClick(a) {


    switch (a) {

        case "w": var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a": var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s": var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d": var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j": var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k": var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l": var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(a);
    }
}


function buttonAnimation(key) {
    var a = document.querySelector("." + key);
    a.classList.add("pressed");
    setTimeout(function () {
        a.classList.remove("pressed");
    }, 100);
}