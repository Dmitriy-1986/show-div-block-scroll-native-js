const specificValue = 100;
let blockShown = false;

window.addEventListener("scroll", function () {
    let currentScrollValue = window.scrollY || window.pageYOffset;

    if (!blockShown && currentScrollValue >= specificValue) {
        document.getElementById("myDiv").style.display = "block";
        blockShown = true;
    } else if (blockShown && currentScrollValue < specificValue) {
        document.getElementById("myDiv").style.display = "none";
        blockShown = false;
    }
});