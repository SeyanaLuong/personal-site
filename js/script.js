const button = document.getElementById("topBtn");
window.onscroll = function() { scrollFunction();};
const height = 200;

function scrollFunction() {
    if(document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        button.style.display = "inline-block";
    } else {
        button.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}