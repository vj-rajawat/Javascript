let randomNum = Math.floor((Math.random() * 10) + 1);
let chance = 0;
let enterNum;
do{
 enterNum = prompt('Enter the guess number');
 chance += 1;

}while(randomNum != enterNum)
console.log('The random number is',randomNum);
console.log('The number of chances',chance);