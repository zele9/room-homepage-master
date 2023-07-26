let upper_left = document.getElementById("background");
let enabled = document.getElementsByClassName("about_1");
let list = [{image:"url('./images/desktop-image-hero-1.jpg')",id:"first"},{image:"url('./images/desktop-image-hero-2.jpg')",id:"second"},{image:"url('./images/desktop-image-hero-3.jpg')",id:"third"}]
let current= 0;
let previous= 0;
let cont = document.getElementById("cont");

let navbar = document.getElementById("open_sesemi");



function slide_right(){
    previous = current;
    current = (current+1)%3;
    upper_left.style.backgroundImage = list[current].image;
    document.getElementById(list[current].id).classList.remove("hide");
    document.getElementById(list[previous].id).classList.add("hide");
}
function slide_left(){
    previous = current;
    if(current==0){
        current=2;
    }
    else{
        current=current-1;
    }
    upper_left.style.backgroundImage = list[current].image;
    document.getElementById(list[current].id).classList.remove("hide");
    document.getElementById(list[previous].id).classList.add("hide");
}

function close_menu(){
    navbar.classList.add("hide");
    cont.classList.remove("over");
}

function open_menu(){
    navbar.classList.remove("hide");
    cont.classList.add("over");
}



    

