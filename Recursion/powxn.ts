//recursion
function myPow(x,n){
  if(n<0){
    return 1/(myPow(x,-(n+1))*x)
  }
  if(n==0) return 1
  else if (n%2==0){
    return Math.pow(myPow(x,n/2),2)
  }
  else{
    return x  * myPow(x,n-1)
  }
}

//console.log(myPow(2,-3))

//loop
function xPowN(x,n){
  var nn;
  var ans =1;
  nn= n<0?-1*n:n;
  while(nn>0)
  if(nn%2==0){
    x=x*x;
    nn=nn/2;
  }
  else{
    ans=ans*x;
    nn=nn-1;
  }
  if(n<0){
    ans = 1/ans;
  }
  return ans;
  }
console.log(xPowN(2,4));
