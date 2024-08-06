function insert(num) {
    document.getElementById('result').value = document.getElementById('result').value+num;
}
function clean() {
    document.getElementById('result').value = "";
}
function back() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = value.substring(0, value.length-1);
}
function equal() {
    var value = document.getElementById('result').value;
    if(value) {
        document.getElementById('result').value = eval(value);
    }
}
