let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

function multiplyNumeric(obj){
    for(let key in menu){
        if(typeof menu[key]=='number'){
            menu[key]=menu[key]*2;
        }
    }
}
