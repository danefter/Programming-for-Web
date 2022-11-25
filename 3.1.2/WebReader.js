
var msg = '<h2>browser window</h2><p>width : ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items : ' + window.history.length + 1 + '</p>' ;
msg += '<h2>screen</h2><p>width : ' +window.screen.width + 1 + '</p>' ;
msg += '<p>height : ' + window.screen.height+ '</p>';
var info = document.getElementById('info');
info .innerHTML = msg;
setTimeout(displayLocation,1000);
clearTimeout();
let user = prompt("Please enter your username", "Foo Bar");
if (user != null) {
    info.innerHTML +=
        "User: " + user;
}
confirm("View page?");
setInterval(continueViewingPrompt, 10000)

function displayLocation() {
    alert('Current page : ' + window.location);
}

function continueViewingPrompt() {
    let ans = confirm("Continue viewing page?");
    if (ans.valueOf() === false) {
        window.close();
        window.open("other.html");
    }
    if (ans.valueOf() === true) {
        clearInterval();
    }
}