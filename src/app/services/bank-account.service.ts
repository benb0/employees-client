export class BankAccountService {

  private currentBalance = 7000;

  deposit(amount: number) {
    this.currentBalance += amount;
  }

  withdraw(amount: number) {
    this.currentBalance -= amount;
  }

  getBalance() {
    return this.currentBalance;
  }
}
