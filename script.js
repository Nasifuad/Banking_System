document.getElementById("add_money").addEventListener('click', function () {
    var current_credit = document.getElementById("credit_amount");
    var current_credit_balance = parseFloat(current_credit.innerHTML);
    console.log(current_credit_balance)

    var current_total = document.getElementById("total_amount");
    var current_total_balance = parseFloat(current_total.innerText);

    // this part is to add amount to the credit amount
    var add_amount = parseFloat(document.getElementById("add_amount").value);

    var total = current_credit_balance + add_amount;
    console.log(total)
    current_credit.innerText = total


    current_total.innerText = current_total_balance + add_amount



})

document.getElementById("withdraw_money").addEventListener('click', function () {
    var current_debit = document.getElementById("debit_amount");
    var current_debit_balance = parseFloat(current_debit.innerText);

    var withdraw_amount = parseFloat(document.getElementById("withdraw_amount").value)

    current_debit.innerText = current_debit_balance + withdraw_amount


    var current_total = document.getElementById("total_amount");
    var current_total_balance = parseFloat(current_total.innerText);
    current_total.innerText = current_total_balance - withdraw_amount
})