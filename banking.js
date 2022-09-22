// deposit click handeler
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousAmountText = depositTotal.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const newTotalDeposit = previousAmount + depositAmount;
    depositTotal.innerText = newTotalDeposit;
    // update account balance
    const updateBalanceTotal = document.getElementById("balance-total");
    const balanceAmmountText = updateBalanceTotal.innerText;
    const balanceAmmount = parseFloat(balanceAmmountText);
    const totalBalance = balanceAmmount + depositAmount;
    updateBalanceTotal.innerText = totalBalance;
    depositInput.value = "";
  });

// withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);
    // update withdraw balance
    const updateWithdrawBalance = document.getElementById("withdraw-total");
    const updateWithdrawBalanceText = updateWithdrawBalance.innerText;
    const newUpdateBalance = parseFloat(updateWithdrawBalanceText);
    const TotalUpdateBalance = newUpdateBalance + withdrawAmount;
    updateWithdrawBalance.innerText = TotalUpdateBalance;
    // fix balance
    const updateBalanceTotal = document.getElementById("balance-total");
    const balanceAmmountText = updateBalanceTotal.innerText;
    const balanceAmmount = parseFloat(balanceAmmountText);
    const newBalance = balanceAmmount - withdrawAmount;
    updateBalanceTotal.innerText = newBalance;
    withdrawInput.value = "";
  });
