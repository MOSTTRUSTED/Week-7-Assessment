class Person {
    constructor(inheritedMoney, yearToLive) {
        this.inheritedMoney = inheritedMoney;
        this.yearToLive = yearToLive;
        this.moneyLeft = inheritedMoney;
        this.age = 18;
    }
    calculateMoney() {
        for (let year = 1800; year <= this.yearToLive; year++) {
            if (year % 2 == 0) {
                this.moneyLeft -=12000;
            } else {
                this.moneyLeft -= 12000 + 50 * this.age;
                this.age++;
            }
            if (this.moneyLeft < 0) {
                return `He will need ${(-this.moneyLeft).toFixed(2)} dollars to survive`;
            }
        }
        return `Yes! He will live a carefree life and will have ${(this.moneyLeft).toFixed(2)} dollars left`;
    
    }
}
const Ivan = new Person(50000, 1802);
console.log(Ivan.calculateMoney())