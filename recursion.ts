// Print Name 5 times --Time comp : O(n), Space comp : O(n)

function printName(n,i){
  if(i>n) return;
  console.log('Nand:' + i);
  i++;
  printName(n,i);
}
//printName(5,1)

// Print 1 to N --Time comp : O(n), Space comp : O(n)

function printNum(i,n){
  if(i>n) return;
  console.log(i);
  i++;
  printNum(i,n)
}

//printNum(1,6)

// Print N to 1 --Time comp : O(n), Space comp : O(n)
function printNumRev(i,n){
  if(i<1) return;
  console.log(i);
  i--;
  printNumRev(i,n)
}
//printNumRev(6,6)

// Print 1 to N  Back tracking --Time comp : O(n), Space comp : O(n)

function printNumBT(i,n){
  if(i<1) return;
  printNumBT(i-1,n)
  console.log(i);
}

//printNumBT(4,4)

// Print N to 1  Back tracking --Time comp : O(n), Space comp : O(n)

function printNumBTRev(i,n){
  if(i>n) return;
  printNumBTRev(i+1,n)
  console.log(i);
}

//printNumBTRev(1,4)

// Print sum N parameterized

function printSum(sum, i){
  if(i<1) {
    console.log(sum);
    return;
  }
  printSum(sum+i,i-1)
}

//printSum(0,6)

// return sum N non parameterized -- don't print but return --Time comp : O(n), Space comp : O(n)

function printSumNP(i){
  if(i<1) return 0;
  return i+printSumNP(i-1);
}

//console.log(printSumNP(5))

// return Factorial of N --Time comp : O(n), Space comp : O(n)

function printFactN(i){
  if(i<=1) return 1;
  return i*printFactN(i-1);
}

//console.log(printFactN(5))

//Reverse an array

function reverseArray(l,r,arr){
  if(l>=r) return ;
  var temp = arr[l];
  arr[l]=arr[r];
  arr[r]=temp;
  reverseArray(l+1,r-1,arr)
}
var arr = [1,2,3,4,5];
//reverseArray(0,arr.length-1,arr);

//console.log(arr)

//Palindrome

function palindrome(str,i){
  if(i>=Math.floor(str.length/2)) return true;
  if(str.charAt(i)!=str.charAt(str.length-i-1)) return false;
  return palindrome(str,i+1)
}
var str ='maddam';
//console.log(palindrome(str,0))


//Fibonacci -- Time comp : O(2^n), Space comp : O(n)
function fibonacci(n){
  if(n<=1) return n
  var last = fibonacci(n-1);
  var secondLast = fibonacci(n-2);
  return last+secondLast;
}
//console.log(fibonacci(4));

//Array Subsequence --Time comp : O(2^n * n(printing array?)), Space comp : O(n)

function subsequence(ans,n){
  if(n>arr.length-1){
    console.log(ans);
    return
  }
  ans.push(arr[n]);
  subsequence(ans,n+1);
  ans.pop(arr[n]);
  subsequence(ans,n+1);
}
//arr =[3,1,2];
//subsequence([],0)

// printing all subsequence whose sum is K ----Time comp : O(2^n * n(printing array?)), Space comp : O(n)

function subsequenceSum(ans,n,sum){
  if(n>arr.length-1){
    if(sum==k)
    console.log(ans);
    return
  }
  ans.push(arr[n]);
  sum += arr[n];
  subsequenceSum(ans,n+1,sum);
  ans.pop(arr[n]);
  sum -= arr[n];
  subsequenceSum(ans,n+1,sum);
}
// var k=4;
// var arr =[3,1,2,2,4];
// subsequenceSum([],0,0)


// printing any one subsequence whose sum is K ----Time comp : O(2^n * n(printing array?)), Space comp : O(n)

function oneSubsequenceSum(ans,n,sum){
  if(n>arr.length-1){
    if(sum==k){
    console.log(ans);
    return true;
    }
    return false;
  }
  ans.push(arr[n]);
  sum += arr[n];
  if(oneSubsequenceSum(ans,n+1,sum)==true) return true;
  ans.pop(arr[n]);
  sum -= arr[n];
  if(oneSubsequenceSum(ans,n+1,sum)==true) return true;
  return false;
}
// var k=4;
// var arr =[3,1,2,2,4];
// oneSubsequenceSum([],0,0)

// printing count of subsequence whose sum is K ----Time comp : O(2* n(printing array?)), Space comp : O(n)

function CountSubsequenceSum(n,sum){
  if(n>arr.length-1){
    if(sum==k){
    return 1;
    }
    return 0;
  }
  sum += arr[n];
  var l = CountSubsequenceSum(n+1,sum);
  sum -= arr[n];
  var r = CountSubsequenceSum(n+1,sum);
  return l+r;
}
var k=4;
var arr =[3,1,2,2,4];
console.log(CountSubsequenceSum([],0))
