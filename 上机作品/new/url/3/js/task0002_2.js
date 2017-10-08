/**
 * Created by DIYgod on 15/5/3.
 */
function countTime() {
    var text = $('.myText').value;
    text = trim(text);                            // 去掉多余的空格
    var time = text.split('-');                   // 分割

    if (time.length !== 3) {                      // 错误处理
        $('.error').innerHTML = '请按照特定的格式YYYY-MM-DD输入';
    }
    else {
        t = setTimeout('countTime()', 1000);          // 一秒执行一次

        $('.error').innerHTML = '';               // 删除旧元素
        if ($('.result')) {
            $('.center').removeChild($('.result'));
        }

        var endDate = new Date();
        endDate.setFullYear(time[0], time[1] - 1, time[2]);
        endDate.setHours(0, 0, 0, 0);
        var today  = new Date();
        var diff = endDate - today;

        if (diff <= 0) {
            $('.error').innerHTML = '请输入一个将来的时间';
            clearTimeout(t);
            return;
        }

        var p_diffDay = diff / (24 * 60 * 60 * 1000);
        var diffDay = Math.floor(p_diffDay);
        var p_diffHour = (p_diffDay - diffDay) * 24;
        var diffHour = Math.floor(p_diffHour);
        var p_diffMin = (p_diffHour - diffHour) * 60;
        var diffMin = Math.floor(p_diffMin);
        var p_diffSec = (p_diffMin - diffMin) * 60;
        var diffSec = Math.floor(p_diffSec);

        var result = document.createElement('div');
        result.className = 'result';
        $('.center').appendChild(result);
        var h3 = document.createElement('h3');
        h3.innerHTML = '倒计时：';
        result.appendChild(h3);
        var pTime = document.createElement('p');
        pTime.innerHTML = '距离' + time[0] + '年' + time[1] + '月' + time[2] + '日还有' + diffDay + '天' + diffHour + '小时' + diffMin + '分' + diffSec + '秒';
        result.appendChild(pTime);
    }
}

function reset() {
    clearTimeout(t);
    $('.error').innerHTML = '';
    $('.myText').value = '';
    if ($('.result')) {
        $('.center').removeChild($('.result'));
    }
}