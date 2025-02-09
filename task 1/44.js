function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function(){
        this.value+=+prompt('how much to add?', 0);
    };
}

let acc=new Accumulator(1);
acc.read();
acc.read();
acc.read();

alert('final result='+acc.value);