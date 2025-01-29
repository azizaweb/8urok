// let i = 0;
// while(i < 3){
//     console.log(i);
//     i++
// }

// let i = 0;
// while(i < 3){
//     console.log(i);
//     i--
// }

// let i = 0 ;
// do{
//     console.log(i);
//     i++;
// }while(i < 3)

//     let i = 0 ;
// do{ до итерации
//     console.log(i);
//     i++;
// }while(0) после итерациии

// for ( i = 0; i < 3; i++){
//     console.log(i)
// }



// let sum = 0;
// while(true){
//     let value = +prompt('введите число');
//     if(!value)break;
//     sum += value;
// }
// console.log('сумма:' + sum); 

// for (let i=0; i < 100; i++){
//     if (i % 2 == 0) continue;
//     console.log(i)
// } 
// for (let i=0; i < 100; i++){
//     if (i % 3 == 0) continue;
//     console.log(i)
// }




const numbers = [2, 4, 9, 10, 45, 67, 8, 90];
const evenNumbers = []; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) continue; 
    evenNumbers.push(numbers[i]); 
}

console.log(numbers);
console.log( evenNumbers); 