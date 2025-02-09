function randInt(min, max){
    let random=min+Math.random()*(max+1-min);
    return Math.floor(random);
}
alert(randInt(1, 5));
alert(randInt(1, 5));
alert(randInt(1, 5));