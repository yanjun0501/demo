var arr = ['1': 2,'2':1]

var is = function(arr) {
    return Array.prototype.sort.__proto__ == arr.__proto__;
}

var is1 = function(arr){
    return typeof arr.sort == 'function';
}

console.log(is(arr))