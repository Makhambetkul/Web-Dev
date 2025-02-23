function showNum(){
    let a;
    do{
        a=prompt('input a number', 0);
    } while(!isFinite(a));
    if(a==null || a==''){
        return null;
    }
    return +a;
}
alert(showNum());