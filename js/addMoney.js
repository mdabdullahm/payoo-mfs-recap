document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;

    const piNumber = document.getElementById('input-pin-number').value;

    console.log(addMoney, piNumber);
})