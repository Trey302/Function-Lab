// Prompt 1
function greeting(){
    console.log("Hey there")
}

// Prompt 2
function reverse(x)
{
	x = x + "";
	return x.split("").reverse().join("");
}
console.log(reverse(32243));

// Prompt 3
function palindrome(str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");

//   Prompt 4
function alphaOrder(order)
  {
return order.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));