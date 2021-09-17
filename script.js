// for (var i = 0; i < document.querySelectorAll('.btn').length; i++) {
//     document.querySelectorAll('button')[i].addEventListener("click",


/*function Alert() {
    alert("I got clicked");
}*/

/*function play() {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}*/


// document.querySelector('.w').addEventListener('click', function() {
//     var audio = new Audio('./sounds/crash.mp3');
//     audio.play();
//     var key = this.innerText;
// });

// document.querySelector('.a').addEventListener('click', function() {
//     var audio = new Audio('./sounds/kick-bass.mp3');
//     audio.play();
//     var key = this.innerText;
// });

// document.querySelector('.s').addEventListener('click', function() {
//     var audio = new Audio('./sounds/snare.mp3');
//     audio.play();
//     var key = this.innerText;
// });

// document.querySelector('.d').addEventListener('click', function() {
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();
//     var key = this.innerText;
// });

// document.querySelector('.j').addEventListener('click', function() {
//     var audio = new Audio('./sounds/tom-2.mp3');
//     audio.play();
//     var key = this.innerText;
// });

// document.querySelector('.k').addEventListener('click', function() {
//     var audio = new Audio('./sounds/tom-3.mp3');
//     audio.play();
//     var key = this.innerText;
// });

// document.querySelector('.l').addEventListener('click', function() {
//     var audio = new Audio('./sounds/tom-4.mp3');
//     audio.play();
//     var key = this.innerText;
// });

for (var i = 0; i < document.querySelectorAll('.btn').length; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', function() {
        var key = this.innerText;
        console.log(key);


        switch (key) {
            case "W":
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
            case "A":
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            case "S":
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            case "D":
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;
            case "J":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
            case "K":
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;
            case "L":
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                break;

        }

    })
}

document.addEventListener("keypress", function(e) {
    // alert("Key was presses!" + e);
    // console.log(e.key);
    switch (e.key) {
        case "W":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "A":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "S":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "D":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "J":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "K":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "L":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;

    }
})

// );
// }
// alert(document.querySelectorAll('.btn').length);


// for (var i = 0; i < document.querySelectorAll('.btn').length; i++) {
//     document.querySelectorAll('.btn')[i].addEventListener('click', function() {
//         var key = this.innerHTML;
//     });
// }