// Prompt 1
function greeting(){
    console.log("Hey there")
}

// Prompt 2
const num = 302

 function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }

// Prompt 3
function palindrome(str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");