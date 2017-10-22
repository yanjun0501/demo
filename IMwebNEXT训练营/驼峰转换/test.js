function convertToCamelCase(Str) {
    if(Str[0] == '-'){
        Str = Str.slice(1, Str.length);
    }
    return  Str.split('-').map((item,index) => {
        if(index){
            return  item =  item.slice(0,1).toLocaleUpperCase() +  item.slice(1,item.length);
        } 
        return item;
    }).join("");
}
console.log(convertToCamelCase('-webkit-border-radius'));