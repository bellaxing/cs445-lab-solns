window.onload = function() {
    document.getElementById("submit").onclick = function() {
        // let num1 = document.getElementById('num1').value;
        // let num2 = document.getElementById('num2').value;
        // document.getElementById("result").value = parseInt(num1) + parseInt(num2);
        document.getElementById("result").value = parseInt(document.getElementById('num1').value) +
            parseInt(document.getElementById('num2').value);
    }
}