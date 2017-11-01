
var c = document.getElementById('c');
var d = document.getElementById('d');

function getNowDate(){
    var today = new Date();
    return {
        year:today.getFullYear(),
        month:today.getMonth() + 1,
        day:today.getDate(),
        week:today.getDay(),
        hour: today.getHours(),
        minute:today.getMinutes(),
        second:today.getSeconds()
    }
}


var str1 = "";
var str2 = "";


function time () {
    var date = getNowDate();
    date.minute = (date.minute >= 10) ? date.minute : ('0' + date.minute );
    date.second = (date.second >= 10) ? date.second : ('0' + date.second);

    

    var arr = ['一','二','三','四','五','六','日'];
    
    str1 = date.year + ' 年 ' + date.month + ' 月 ' + date.day + ' 日 ';
    str2 = ' 星期' + arr[date.week - 1] + ' ' +  date.hour + ' 点 ' + date.minute +' 分 ' + date.second +  ' 秒 ';
    
    
    c.innerHTML = str1;
    d.innerHTML = str2;

    setTimeout(time, 1000);
}

time();