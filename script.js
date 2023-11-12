let menu = document.getElementById('nav');
let open = document.getElementById('menu-btn');
let close = document.getElementById('close');


function openmenu(){
    menu.style.left="0";
    open.style.display="none";
    close.style.display="block";
}function closemenu(){
    menu.style.left="100%";
    open.style.display="block";
    close.style.display="none";
}



// nasv bg color change


function change (){
    var nav = document.getElementById('navbar')
    var value = window.scrollY;
    if(value > 80){
        nav.classList.add('nav-change');
    }
    else{
        nav.classList.remove('nav-change');
    }
}

window.addEventListener("scroll",change);





h1obj = document.getElementsByClassName("edit");
function popup(){
    h1obj[0].innerHTML = "Institution of Electronics and Telecomunication Engineering."
}
function reset(){
    h1obj[0].innerHTML="IETE"
}
