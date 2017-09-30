var t1 = document.getElementById('t1'); //绑定对应导航
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');


t1.onclick = function a(){
    t1.classList.add('cur');
    var listarr = [t2,t3,t4,t5]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "https://www.bilibili.com"
}

t2.onclick = function a(){
    t2.classList.add('cur');
    var listarr = [t1,t3,t4,t5]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "http://www.ustil.cn"
}
t3.onclick = function a(){
    t3.classList.add('cur');
    var listarr = [t1,t2,t4,t5]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "http://blog.ustil.cn"
}
t4.onclick = function a(){
    t4.classList.add('cur');
    var listarr = [t1,t3,t2,t5]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "http://oj.ustil.cn"
}
t5.onclick = function a(){
    t5.classList.add('cur');
    var listarr = [t1,t2,t3,t4]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "http://find.ustil.cn"
}
