// // Prompt 1
// function greeting(x){
//     console.log(x)
// }
// greeting("Hey there")

// // Prompt 2
// function reverse(x)
// {
// 	x = x + "";
// 	return x.split("").reverse().join("");
// }
// console.log(reverse(32243));

// // Prompt 3
// function palindrome(str) {
//     const re = /[\W_]/g;
//     const lowRegStr = str.toLowerCase().replace(re, '');
//     const reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   palindrome("A man, a plan, a canal. Panama");

// //   Prompt 4
// function alphaOrder(Order)
//   {
// return Order.split('').sort().join('');
//   }
// console.log(alphabet_order("webmaster"));

// // Prompt 5
// function changeToLowerCase(x){
//  console.log(x.toLowerCase());
// }

// changeToLowerCase("SaLly SeLls SeA ShelLs")

// // Prompt 6
// function uppercase(str)
// {
//   let array1 = str.split(' ');
//   let newarray1 = [];
    
//   for(let x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("sally sells sea shells"));

// // Prompt 7
// function find-longest-word(str)
// {
//   let array = str.match(/\w[a-z]{0,}/gi);
//   let result = array[0];

//   for(let x = 1 ; x < array.length ; x++)
//   {
//     if(result.length < array[x].length)
//     {
//     result = array[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word("Welcome to the developmental shop provided by Code Differently"));

// // Prompt 8
// function multiply(a, b){
//   console.log( a * b)
// }

// multiply(4, 8)

// Prompt 9
// let myColor = ["Red, Green, Yellow, Blue"]

// for (let i = 0; i < myColor.length; i++) {
//     console.log(`${myColor[i]}`)
// };

// Prompt 10
function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    if (strArr != null) {
      strArr.forEach((elem) => {
        result.push(elem[0]);
      });
    }
    return result;
  }
  console.log(...howManyRepeated(str));

//   Bonus
function calculateDogAge(age) {
    const dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(12);
  
