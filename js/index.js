
let startLift = 10;
let endLift = 10;
let id = null;
let stopVar = 10;

let array = [10, 122, 233, 344, 455];

let buttonEvent = document.querySelectorAll('.btn');

buttonEvent.forEach( element => {
    if(element.id != "stop")
    {
        document.getElementById(`${element.id}`).addEventListener("click",function(){move(`${element.id}`)});
    }else{
        document.getElementById("stop").addEventListener("click", function(){
            let endStop = stopVar;
        clearInterval(id);
        endLift = endStop;
        });   
    }
   
})

function move(idValue)
{
  startLift = endLift;
  let end = array[idValue - 1];
  let liftMove = end - startLift;
  let start = document.getElementById("mylift");
  animation(startLift, end, liftMove, start);
  endLift = end;
}

function animation (start, end, move, start1){
    let position = start;
    clearInterval(id);
    id = setInterval(() => {
        if (position == end) {
            clearInterval(id);
        } else {
            if (move < 0) {
                position--;
            } else {
                position++;
            }
            stopVar = position;
            start1.style.bottom = position + "px";
        }

    }, 14);
}


let error = document.getElementById('error');
let liftsec = document.getElementById('liftsection');

if(window.screen.availWidth === 1500)
{
//   console.log(window.screen.availWidth);
  liftsec.style.display = "flex";
  error.style.display = "none";
}
if(window.screen.availWidth < 1500)
{
    liftsec.style.display ="none";
    error.style.display = "flex";
    error.innerHTML = "<h1>Please open in screen size of 1500 and above</h1>"
}
// else{
//   liftsec.style.display = "none";
//   error.style.display = "flex";
// }

