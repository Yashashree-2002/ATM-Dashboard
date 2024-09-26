let balance = 1000;

function updateBalance() {
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
        document.getElementById('deposit').value = '';
    } else {
        alert('Please enter a valid deposit amount.');
    }
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw').value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalance();
            document.getElementById('withdraw').value = '';
        } else {
            alert('Insufficient funds.');
        }
    } else {
        alert('Please enter a valid withdrawal amount.');
    }
}

updateBalance();
