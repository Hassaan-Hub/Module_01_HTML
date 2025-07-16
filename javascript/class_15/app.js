function printMyFullName(fname, lname){
    console.log(`${fname}  ${lname}`);
}

printMyFullName("Ali" , "Haider")
printMyFullName("its" , "me")
printMyFullName("hassaan" , "hii");

function printTable(tableNumber){
    for (var i = 1; i <=10; i++){
        console.log(`${tableNumber} X ${i} = ${tableNumber *i}`);
    }
}

printTable(9);
