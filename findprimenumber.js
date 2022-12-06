let primeArr = [1,2,3,4,5,6,7,8,9,10];

let primeNumber = primeArr.filter((value) => {
return (value%1 === 0)
});
console.log(primeNumber)
