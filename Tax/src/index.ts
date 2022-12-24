let answareBox = document.getElementById("ansBox");
let taxRates = [0.1, 0.14, 0.2, 0.31, 0.35, 0.47];
let diffRates = [6450, 2790, 5600, 5780, 22290, 12350];
let maxTaxRate = 0.5;

document.getElementById('taxForm').addEventListener('submit', function(evt){
    evt.preventDefault();
    let salary = document.getElementById('salary') as HTMLInputElement;
    let tax = calculateTax(parseInt(salary.value));
    answareBox.textContent = " המס הצפוי לשכר הינו " + tax
})

function calculateTax(salary: number){
    let tax = 0;
    for(let i=0; i<taxRates.length; i++){
        if(salary > diffRates[i]){
            tax += diffRates[i] * taxRates[i];
            salary = salary - diffRates[i];
        }
        else {
            tax += salary * taxRates[i];
            salary = salary - diffRates[i]
            break
        }
    }
    
    if(salary > 0){
        tax += salary * maxTaxRate;
    }

    return tax
}