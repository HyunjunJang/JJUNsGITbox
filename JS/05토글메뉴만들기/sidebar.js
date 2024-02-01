/* ==========좌측사이드========== */
var menuBtn = document.querySelector(".menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.onclick = function(){
    if(menuBtn.classList.contains("on")){
        sidenav.style.width = "0%";
    } else{
        sidenav.style.width = "100%";
    }
    menuBtn.classList.toggle("on");
}

