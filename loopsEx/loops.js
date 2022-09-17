//ex 1:
let countZugi = 0
let countEzugi = 0

for (let i = 1; i <= 50 ; i++){
    if(i%3 == 0){
        if(i%2==0){
            countZugi += 1
        }
        else{
            countEzugi += 1
        }
    }

}
console.log("count Zugi is ", countZugi, "and cound Ezugi is " , countEzugi)


//ex2:
let a = 5
let b = 6
let mul = 0

for (let i = 0; i < b ; i+= 1){
    mul += a
}
console.log("the result is: ", mul)


//ex3:
let x = 4
let y = 8
let res = 1

for (let i=0; i<y ; i+=1){
    res *= x
}
console.log("result is: ", res)
