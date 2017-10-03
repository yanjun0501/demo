var data = [
    {
        name: 'beijing',
        items: [
            {
                name: 'beijing',
                items: [
                    {name: 'dongcheng'},
                    {name: 'xicheng'}
                ]
            }
        ]
    },
    {
        name: 'zhejiang',
        items: [
            {
                name: 'hangzhou',
                items: [
                    {name: 'hangbei'},
                    {name: 'hangnan'}
                ]
            },
            {
                name: 'shaoxing',
                items: [
                    {name: 'shaobei'},
                    {name: 'shaonan'}
                ]
            }
        ]
    }
];

var sheng = document.createElement('select');
var shi = document.createElement('select');
var qu = document.createElement('select');
sheng.options[0] = new Option('sheng', -1);
shi.options[0] = new Option('shi', -1);
qu.options[0] = new Option('qu', -1);
var body = document.body;
body.appendChild(sheng);
body.appendChild(shi);
body.appendChild(qu);

for(var i =0 ; i< data.length; i++ ){
    sheng.options[sheng.length] = new Option(data[i].name, i);
    sheng.onchange = function() {
        shi.options.length = 0;
        shi.options[shi.length] = new Option('shi', -1);
        qu.options.length = 0;
        qu.options[qu.length] = new Option('qu', -1);
        for(var j=0; j < data[sheng.selectedIndex-1].items.length; j++){
            shi.options[shi.length] = new Option(data[sheng.selectedIndex - 1].items[j].name, j);
            shi.onchange = function c(){
                qu.options.length = 0;
                qu.options[qu.length] = new Option('qu', -1);
                for( var t =0 ; t < data[sheng.selectedIndex-1].items[shi.selectedIndex-1].items.length; t++){
                    qu.options[qu.length] = new Option(data[sheng.selectedIndex-1].items[shi.selectedIndex-1].items[t].name, t);
                }
            }
        }
    }
}


