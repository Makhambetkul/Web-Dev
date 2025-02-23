let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum=0;

function getSum(obj){
    for(let key in salaries){
        sum+=salaries[key];
    }
}

alert(sum);