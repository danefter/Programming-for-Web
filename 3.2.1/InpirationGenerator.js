let currentImg = 1;
let img = $("img");
let interval;
$(document).ready(function() {
    document.getElementById("start").addEventListener("click", startSlideShow);
    img.on("mouseover", manualPlay);
});

function startSlideShow() {
    interval = setInterval(fadeChangeImg
    , 1000);
}

function fadeChangeImg() {
    incrementImg();
    img.fadeTo("normal", 0, function () {
        img.attr("src", currentImg + ".jpg");
    });
    img.fadeTo("normal", 1);
}

function manualPlay() {
    clearInterval(interval);
    img.click(function(e){
        changeImg();
        e.stopImmediatePropagation();
    });
}

function changeImg() {
    incrementImg();
    img.attr("src", currentImg + ".jpg");}

function incrementImg() {
    currentImg +=1;
    if(currentImg > 8) currentImg = 1;
    document.getElementById("p").innerText = "Current image: " + currentImg;
}


