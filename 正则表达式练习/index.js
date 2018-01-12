var input1 = document.getElementById("thousandInput")
var screen1 = document.getElementById('thousandScreen')
var input2 = document.getElementById("phoneNumInput")
var screen2 = document.getElementById('phoneScreen')
var input3 = document.getElementById("mailInput")
var screen3 = document.getElementById('mailScreen')

input1.onkeyup = function () {
    var str1 = input1.value
        if(/^-?\d+$/.test(str1)){    //判断输入内容是否为整数
            str1 = str1 + ".00";   
        }
    str1 = str1.toString().replace(/(\d)(?=(\d{3})+\.)/,  "$1,");
    screen1.innerText = "转换后为：" + str1; 
}

input2.onkeyup = function () {
    var str2 = input2.value
    var reg = /^\d{3}\-\d{4}\-\d{4}$|^\d{11}/
    screen2.innerText = reg.test(str2); 
}

input3.onkeyup = function  () {
    var str3 = input3.value
    var regexp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+.)[a-z0-9]+[a-z]+$/
    screen3.innerText = regexp.test(str3); 
}