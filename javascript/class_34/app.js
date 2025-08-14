function x(){
    for(let i = 1; i <=10; i++){
        function closer(x){
            setTimeout(() =>{
                console.log(x); // Ab yeh i ki final value se affected nahi
            }, x * 100)
        }
        closer(i)
    }
}
x()