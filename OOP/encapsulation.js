class BankAccount {
    #bankBalance = 0; // private field

    constructor(accountHolder){
        this.accountHolder = accountHolder;

    }

    deposit(amount){
        if(amount > 0){
            this.#bankBalance += amount;
            return `Deposit of ${amount} has been made. Total Amount is ${this.#bankBalance}`
        }
        return `${amount} is an invalid deposit amount`
    }

    getBalance(){
        return `Account balance is ${this.#bankBalance}`
    }
}

const account = new BankAccount('Emmanuel');
account.deposit(750)
// console.log(account.deposit(80))
console.log(account.getBalance())

