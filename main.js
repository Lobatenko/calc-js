/**
 * Created by Mauri on 23.12.17.
 */

function plus(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    res = num1 + num2;
    document.getElementById('out').innerHTML = res;
}

function minus(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    res = num1 - num2;
    document.getElementById('out').innerHTML = res;
}

function multiply(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    res = num1 * num2;
    document.getElementById('out').innerHTML = res;
}

function division(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    if (num2 == 0){
        alert("You can not divide by zero!");
    } else{
        res = num1 / num2;
    }

    document.getElementById('out').innerHTML = res;


}
//function testKey(e){
//    // Make sure to use event.charCode if available
//    var key = (typeof e.charCode == 'undefined' ? e.keyCode : e.charCode);
//
//    // Ignore special keys
//    if (e.ctrlKey || e.altKey || key < 32)
//        return true;
//
//    if (e.ctrlKey && e.charCode == 118) return false;
//
//            var num1 = document.getElementById('n1').value;
//            num1.oncontextmenu = function(){return false}
//            var num2 = document.getElementById('n2').value;
//            num2.oncontextmenu = function(){return false}
//
//    key = String.fromCharCode(key);
//    return /[\d\.]/.test(key);
//}

