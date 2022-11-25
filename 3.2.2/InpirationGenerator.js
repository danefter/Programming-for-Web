let currentImg = 1;
let img = $("img");
let interval;
$(document).ready(function() {
    document.getElementById("start").addEventListener("click", startSlideShow);
    img.on("mouseover", manualPlay);
});

function startSlideShow() {
    interval = setInterval(fadeChangeImg
    , 1500);
}

function fadeChangeImg() {
    incrementImg();
    img.fadeTo("normal", 0, "linear", function () {
        img.attr("src", currentImg + ".jpg");
        img.fadeTo("normal", 1);
    });
}

function manualPlay() {
    clearInterval(interval);
    img.on("click", function(e){
        changeImg();
        e.stopImmediatePropagation();
    });
}

function changeImg() {
        img.animate({
            width: [ "toggle", "swing" ],
            height: [ "toggle", "swing" ],
            opacity: "toggle"
        }, 1000, function() {
            incrementImg();
            img.attr("src", currentImg + ".jpg");
            img.animate({
                width: ["toggle", "swing"],
                height: ["toggle", "swing"],
                opacity: "toggle"});
        });}

function incrementImg() {
    currentImg +=1;
    if(currentImg > 8) currentImg = 1;
    document.getElementById("p").innerText = "Current image: " + currentImg;
}


