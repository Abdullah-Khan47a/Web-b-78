

function generateTable(looptype){
    
    var looptype = document.getElementById("loopType").value.trim().toLowerCase();

 

if (looptype === "for") {

    let tbl = document.getElementById("tableNumber").value;

    function forL() {
        document.getElementById("output").innerHTML = "FOR LOOP:<br>";
        for (let i = 1; i <= 10; i++) {
           
        
            document.getElementById("output").innerHTML+=(`${tbl} X ${i} = ${tbl * i} <br> `);
            console.log(`${tbl} X ${i} = ${tbl * i} \n `);
        }
    }

    forL();

}

else if (looptype === "while") {
    let tbl =document.getElementById("tableNumber").value;


    function whileL() {
        document.getElementById("output").innerHTML = "WHILE LOOP:<br>";
        let i = 1;
        while (i <= 10) {
           
            
            document.getElementById("output").innerHTML+=(`${tbl} X ${i} = ${tbl * i} <br> `);
            console.log(`${tbl} X ${i} = ${tbl * i} \n `);
            i++;

        }
    }
    whileL();

}

else if (looptype==="do while" || looptype === "dowhile") {
    let tbl =document.getElementById("tableNumber").value;

    function doWhileL() {
        document.getElementById("output").innerHTML = "DO WHILE LOOP:<br>";
        let i = 1;
        do {
          
            
            document.getElementById("outout").innerHTML+=(`${tbl} X ${i} = ${tbl * i} <br> `);
            console.log(`${tbl} X ${i} = ${tbl * i} \n `);
            i++;
        } while (i <= 10);


    }

    doWhileL();
}

else {

    alert(`invalid input! \n  "${looptype}" does not exist. `);
    console.log(`invalid input! \n  "${looptype}" does not exist. `);

}

}









