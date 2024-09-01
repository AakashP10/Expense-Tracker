const expense_form = document.getElementById('expense_form');
const expenseList = document.getElementById('expenseList');

expense_form.addEventListener('submit',function(event){
    event.preventDefault();

    const placeholder1 = document.getElementById('placeholder1').value;
    const placeholder2 = document.getElementById('placeholder2').value;

    if(document && select_placeholder && !isNaN(placeholder2)){
        const new_Row = document.createElement('tr');
        new_Row.innerHTML = `<td>${placeholder1}</td>
        <td>${select_placeholder}</td>
        <td>${placeholder2}</td>`
        expenseList.appendChild(new_Row);

    document.getElementById('placeholder1').value='';
    document.getElementById('select_placeholder').value='';
    document.getElementById('placeholder2').value='';
    }
    else{
        alert('Please fill out all the details');
    }

})