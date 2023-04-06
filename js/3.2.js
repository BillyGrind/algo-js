let arr = [1,2,3,4,5];
let arr2 = [100,101,102];

let sum = 0;
let i = 0;
// let div = sum / i;

for(let elem of arr){
    sum += elem;
    i++;
}

console.log(sum / i);
// console.log(div);