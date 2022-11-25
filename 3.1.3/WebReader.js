let msg = '<h2>browser window</h2><p id="winwidth">width: ' + window.innerWidth + '</p>';
msg += '<p id="winheight">height: ' + window.innerHeight + '</p>';
msg += '<p id="winmus"></p>';

document.getElementById('info').innerHTML = msg;

let user = prompt("Please enter your username", "Foo Bar");

if (user.length > 0) {
    document.getElementById('user').innerHTML += user;
}
if (user.length === 0) {
    document.getElementById('changeLabel').textContent =
        "Set username:";
}

let resizeUnlocked = Boolean(true);

function handleWinMove(m) {
    document.getElementById('winmus').innerText = "current mouse position: X:" + m.pageX + ", Y:" + m.pageY;
}
window.addEventListener('mousemove', handleWinMove);

window.addEventListener('keypress', function handleKey(k) {
    if(document.getElementById('userChange').value.length === 0)
    switch (k.key){
        case 's':
            setClass('p1', 'p');
            setClass('p2', 'p');
            setClass('p3', 'p');
            setClass('p4', 'p');
            setClass('p5', 'p');
            let pClass1 = document.getElementsByClassName("p");
            for (let i = 0; i < pClass1.length; i++) {
                pClass1.item(i).style.fontWeight = 'bold';
            }
            break;
        case 'd':
            let pClass2 = document.getElementsByClassName("p");
            for (let i = 0; i < pClass2.length; i++) {
                pClass2.item(i).style.fontWeight = 'normal';
            }
            setClass('p1', null);
            setClass('p2', null);
            setClass('p3', null);
            setClass('p4', null);
            setClass('p5', null);
            break;
        case 'c':
            let prom = prompt("Select color:");
            let pClass3 = document.getElementsByClassName("p");
            for (let i = 0; i < pClass3.length; i++) {
                pClass3.item(i).style.color = prom;
            }
            break;
        case 'r':
            window.removeEventListener('mousemove', handleWinMove);
            document.getElementById('foc').remove();
            break;
        case 'p':
            if(resizeUnlocked){
                resizeUnlocked = false;
                break;
            }
            if(!resizeUnlocked){
                resizeUnlocked = true;
            }
            break;
    }
}
    );

function setClass(p, s){
    document.getElementById(p).className = s;
}
window.addEventListener('resize', function lockResize(m) {
    if (!resizeUnlocked) m.preventDefault();
    if (resizeUnlocked){
        document.getElementById('winheight').innerText = "height: " + window.innerHeight;
        document.getElementById('winwidth').innerText = "width: " + window.innerWidth;
    }
});

document.getElementById('userChange').addEventListener("mouseover", function handleOver() {
    document.getElementById('userChange').focus();
    document.getElementById('userChange').addEventListener("mouseout", function handleOut() {
        document.getElementById('userChange').blur();
    });
});

document.getElementById('changeButton').addEventListener('click', function handleClick() {
    changeUser();
});

function changeUser() {
        document.getElementById('user').innerText =
            "User: " + document.getElementById("userChange").value;
    document.getElementById('title').innerText = document.getElementById("userChange").value + 's ' + 'WebReader';
    document.getElementById("userChange").value = "";
}