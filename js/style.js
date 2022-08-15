
let row = 1;
const entry = document.getElementById('entry').addEventListener('click', function(){
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const grade = document.getElementById('grade');


    if(name.value && age.value && grade.value !== ''){
        let display = document.getElementById('display');
        let newRow = display.insertRow(row);
    
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
    
    
        cell1.innerHTML = name.value;
        cell2.innerHTML = age.value;
        cell3.innerHTML = grade.value;
    
        row++;

        name.value = '';
        age.value = '';
        grade.value = '';
        
        
    }
    else{
        alert("Please all the boxes!!!");
       
    }

    
   
})