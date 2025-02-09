function pow(x, n){
    let r=x;
    for(let i=1; i<n; i++){
        r*=x;
    }
    return r;
}
let x=prompt('x?', '');
let n=prompt('n?', '');
if(n<1){
    alert('n must be bigger than 1');
}
else{
    alert(pow(x, n));
}