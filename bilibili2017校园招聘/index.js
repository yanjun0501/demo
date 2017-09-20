var nav = document.querySelector(".main_nav");
window.onscroll = function(){
    console.log(document.documentElement.scrollTop || document.body.scrollTop);
     var height = document.documentElement.scrollTop || document.body.scrollTop;
     var a = document.getElementById('cur1');
     var b = document.getElementById('cur2');
     var c = document.getElementById('cur3');
     var d = document.getElementById('cur4');
     var e = document.getElementById('cur5');
     var l1 = document.getElementsByClassName('l1');
     var l2 = document.getElementsByClassName('l2');
     var l3 = document.getElementsByClassName('l3');
     var l4 = document.getElementsByClassName('l4');
     var t1 = document.getElementById('h1');
     var t2 = document.getElementById('h2');
     var t3 = document.getElementById('h3');
     var t4 = document.getElementById('h4');
     console.log(l1)
     var listarr = [a,b,c,d,e]
     listarr.map( function(item,index) {
         item.classList.remove('cur');
     })
    if(height >= 120 && height <= 180) {
        nav.classList.add('float');
    }
    else if (height >= 176 && height <= 610){
        nav.classList.add('float');
        a.classList.add('cur');
    }
    else if (height >= 610 && height <= 1488){
        t1.classList.add('title');
        nav.classList.add('float');
        b.classList.add('cur');
    }
    else if (height >= 1488 && height <= 2348){
        t2.classList.add('title');
        l1[0].classList.add('up');
        l2[0].classList.add('up');
        l3[0].classList.add('up');
        l4[0].classList.add('up');
        l1[0].classList.add('job1');
        l2[0].classList.add('job2');
        l3[0].classList.add('job3');
        l4[0].classList.add('job4');
        nav.classList.add('float');
        c.classList.add('cur');
    }
    else if (height >= 2348 && height <= 3185){
        t3.classList.add('title');
        nav.classList.add('float');
        d.classList.add('cur');
    }
    else if (height >= 3185){
        t4.classList.add('title');
        nav.classList.add('float');
        e.classList.add('cur');
    }
    else{
        nav.classList.remove('float');
    }
}