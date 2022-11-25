let button = document.getElementById("send");
let result = document.getElementById("p");
button.addEventListener("click", send);

function send(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let req = 'https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=' + num1 + '&number2=' + num2;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            result.innerHTML = "Result: " + xhr.responseText;
        }
    };
    xhr.open( 'GET', req, true);
    xhr.send();
}
