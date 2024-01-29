const bankAccount = {
    balance: 0,

    deposit: function (amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    },

    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Error: Insufficient funds");
        }
    }
};

bankAccount.deposit(1000);
bankAccount.withdraw(500);
bankAccount.withdraw(400);
bankAccount.withdraw(500);
bankAccount.withdraw(300);