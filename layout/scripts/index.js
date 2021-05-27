function over(x) {
    x.style.opacity = 1;
    x.style.background = "rgb(82,82,82)";
}

function leave(x) {
    x.style.opacity = 0;
}
var imgs = document.getElementsByClassName("group");
var left = document.getElementsByClassName("left");
var right = document.getElementsByClassName("right");
var m = 0;
setInterval(lbu, 5000)
function lbu() {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[m].style.display = "block";
    m++;
    if (m > imgs.length - 1) {
        m = 0;
    }
}

