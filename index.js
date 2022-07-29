 var number = document.querySelectorAll("#good");

for (var i =0; i< number.length; i++){
  document.querySelectorAll("#good")[i].addEventListener("click",function () {

  var buttonInnerHTML= this.innerHTML;
makeSound(buttonInnerHTML);
animation(buttonInnerHTML)
  });
}


document.addEventListener('keypress',function (event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound (key) {
  switch (key) {
    case "a":
     var tom1 = new Audio('drum/sci_crash.wav');
    tom1.play();
     break;
     case "d":
     var tom2 = new Audio('drum/mixkit-achievement-win-drums-555.wav');
    tom2.play();
      break;
      case "j":
      var tom3 = new Audio('drum/mixkit-achievement-win-drums-5550.wav');
       tom3.play();
       break;
       case "k":
      var tom4 = new Audio('drum/mixkit-horror-tunnel-drum-554.wav');
        tom4.play();
         break;
         case "l":
      var tom5 = new Audio('drum/mixkit-ominous-drums-appear-228.wav');
        tom5.play();
          break;
        default : console.log(buttonInnerHTML);

  }

}
function animation (good) {
   var bad = document.querySelector('.'+ good);
   bad.classList.add('pressed')
  setTimeout(function () {
    bad.classList.remove('pressed')
  },100)
}
