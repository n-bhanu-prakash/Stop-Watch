let timer;
let isrunning=false;
let [hours,min,sec,millisec]=[0, 0, 0, 0]

let displayele=document.querySelector(".display")
let startbtn=document.querySelector(".startbtn")
let stopbtn=document.querySelector(".stopbtn")
let resetbtn=document.querySelector(".resetbtn")
let lapbtn=document.querySelector(".lapbtn")
let lapcontainer=document.getElementById("laps")


startbtn.addEventListener("click",start)
stopbtn.addEventListener("click",stop)
resetbtn.addEventListener("click",reset)
lapbtn.addEventListener("click",lap)



function start(){
    if(!isrunning){
        isrunning=true
        timer=setInterval(update,10)
    }
}

function stop(){
    if(isrunning){
        isrunning=false
        clearInterval(timer)
    }
}

function reset(){
    clearInterval(timer)
    isrunning=false;
    [hours,min,sec,millisec]=[0, 0, 0, 0];
    display();
    lapcontainer.innerHTML=' '
 
 }


function lap(){
    let laptime=`
    ${String(hours).padStart(2,0)}:
    ${String(min).padStart(2,0)}:
    ${String(sec).padStart(2,0)}:
    ${String(millisec).padStart(2,0)}
    `
    let lapele=document.createElement('li')
    lapele.classList.add('list-group-item')
    lapele.textContent=laptime;
    lapcontainer.appendChild(lapele)
    // lapcontainer.textContent=laptime;
}

function update(){
    millisec=millisec+10
    if(millisec>=1000){
        millisec=0
        sec++
        if(sec>=60){
            sec=0
            min++
            if(min>=60){
                min=0
                hours++
            }
        }
    }
    display()
}

function display(){
    displayele.textContent=`
    ${String(hours).padStart(2,0)}:
    ${String(min).padStart(2,0)}:
    ${String(sec).padStart(2,0)}:
    ${String(millisec).padStart(2,0)}

    `

}


