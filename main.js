/**
 * Created by Mauri on 23.12.17.
 */

function plus(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    res = num1 + num2;
    document.getElementById('out').innerHTML = res;
}

function minus(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    res = num1 - num2;
    document.getElementById('out').innerHTML = res;
}

function multiply(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    res = num1 * num2;
    document.getElementById('out').innerHTML = res;
}

function division(){
    var num1, num2, res;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    res = num1 / num2;

    if (num2 == 0){
        alert("You can not divide by zero!");
    }

    document.getElementById('out').innerHTML = res;


}
