/*
1. add event handler with the withdraw button 
2. get the withdraw amount from the withdraw input field 
2.5. also make sure to convert the input into a number by using parsefloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5.set total withdraw amount
5. get the previous baalance total
6. calculate balance total
6.5. set the new balance total
7.clear the input field
*/

//step 1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step 3:
    const withdrawTotalElemt = document.getElementById('withdraw-total');
    const previousWithdrawTotalstring = withdrawTotalElemt.innerText;
    const previousWithdrawtotal = parseFloat(previousWithdrawTotalstring);
    //step 4: 
    const currentWithdrawTotal = previousWithdrawtotal + newWithdrawAmount;
    //step-4.5
    withdrawTotalElemt.innerText = currentWithdrawTotal;
    // step 5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step 6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step 7
    withdrawField.value = '';
})
