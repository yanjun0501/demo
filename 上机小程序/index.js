var sub = document.getElementById('sub');
var sub1 = document.getElementById('sub1');
var out = document.getElementById('out');
var out1 = document.getElementById('out1');
sub.onclick = function(){
    var arr = document.getElementById('in').value.split(",");
    var arr1 = [];
    arr.sort((a,b) => a - b).map((item,index) => {if(arr1.indexOf(item) == -1){arr1.push(item)}})
    out.innerText = arr1;
}
sub1.onclick = function(){
    var t1 = document.getElementById('in1').value.split(",");
    var t2 = document.getElementById('in2').value.split(",");
    var t3 = [];
    t1.sort((a,b) => a - b).map((item,index) => {if(t3.indexOf(item) == -1){t3.push(item)}})
    t3.push(t2);
    t3.sort(function(a,b){
        return a - b;
    })
    out1.innerText = t3;
}