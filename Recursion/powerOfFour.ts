function isPowerOfFour(n){
  var x=1;
  if(n==1) return true;
  while(x<n/2){
    if (Math.pow(4,x)==n) return true;
    x++;
  }
  return false;
}

console.log(isPowerOfFour(4));
