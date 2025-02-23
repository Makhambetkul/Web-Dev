function checkAge(age){
    if(age>18){
        return true;
    }
    else{
        return confirm('Did aprents allaw you?');
    }
}




function checkAge2(age){
    if(age>18){
        return true;
    }
    return confirm('Did parents allaw you?');
}
//no difference, if 'if' condition is false, then it goes return confirm('...')