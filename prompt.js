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
function alphaOrder(Order)
  {
return Order.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// Prompt 5
function changeToLowerCase(x){
 console.log(x.toLowerCase());
}

changeToLowerCase("SaLly SeLls SeA ShelLs")

// Prompt 6
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("sally sells sea shells"));