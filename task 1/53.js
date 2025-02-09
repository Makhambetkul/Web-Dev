function truncate(str, num){
    if(str.length>+num) return str.slice(0, +num-1) + '...';
    else return str;
}
alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!"), 20);