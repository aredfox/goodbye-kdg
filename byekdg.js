var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) { slideIndex = x.length }
    //if (n < 1) { slideIndex = x.length }
    if (n < 1) { slideIndex = 1 }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";

    if (slideIndex === 1) {
        document.getElementById("btnprev").disabled = true;
    } else {
        document.getElementById("btnprev").disabled = false;
    }
    if (slideIndex === x.length) {
        document.getElementById("btnnext").disabled = true;
    } else {
        document.getElementById("btnnext").disabled = false;
    }
}

var leftKey = 37, rightKey = 39;
document.addEventListener("keydown", function (e) {
    if (e.keyCode === leftKey) {
        plusDivs(-1);
    }
    if (e.keyCode === rightKey) {
        plusDivs(1);
    }
});
