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
    s.src = "./url/1/index.html"
}

t2.onclick = function a(){
    t2.classList.add('cur');
    var listarr = [t1,t3,t4,t5]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "./url/2/index.html"
}
t3.onclick = function a(){
    t3.classList.add('cur');
    var listarr = [t1,t2,t4,t5]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "./url/3/task0002_1.html"
}
t4.onclick = function a(){
    t4.classList.add('cur');
    var listarr = [t1,t3,t2,t5]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "./url/3/task0002_2.html"
}
t5.onclick = function a(){
    t5.classList.add('cur');
    var listarr = [t1,t2,t3,t4]
    listarr.map( function(item,index) {
        item.classList.remove('cur');
    })
    var s = document.getElementById('s');
    console.log(s.src);
    s.src = "./url/3/task0002_3.html"
}
