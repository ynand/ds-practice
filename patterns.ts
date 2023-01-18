function pattern1(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
      console.log("* ");
    }
    console.log("\n");
  }
}
function pattern2(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<i;j++){
      console.log("* ");
    }
    console.log("\n");
  }
}
function pattern3(n){
  for(var i=1;i<=n;i++){
    var str=''
    for(var j=1;j<=i;j++){
      str=str+j+" "
      console.log(str);
    }
  }
}
function pattern4(n){
  for(var i=1;i<=n;i++){
    var str=''
    for(var j=1;j<=i;j++){
      str=str+i+" "
      console.log(str);
    }
  }
}
function pattern5(n){
  for(var i=0;i<n;i++){
    var str=''
    for(var j=0;j<n-i+1;j++){
      str=str+'* '
      console.log(str);
    }
  }
}
function pattern6(n){
  for(var i=1;i<=n;i++){
    for(var j=1;j<=n-i+1;j++){
      console.log(j);
    }
    console.log('\n')
  }
}
function pattern7(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<n-i+1;j++){
      console.log('\n');
    }
    for(var j=0;j<2*i+1;j++){
      console.log('*');
    }
    for(var j=0;j<n-i+1;j++){
      console.log('\n');
    }
  }
}
function pattern8(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<i;j++){
      console.log(' ');
    }
    for(var j=0;j<2*(n-i)-1;j++){
      console.log('*');
    }
    for(var j=0;j<i;j++){
      console.log(' ');
    }
  }
}
function pattern10(n){
  for(var i=0;i<=2*n-1;i++){
    var stars=i;
    if(i>n) stars =2*n -i;
    for(var j=1;j<=stars;j++){
      console.log('* ')
    }
    console.log('\n');
  }
}
function pattern11(n){
  var start=1;
  for(var i=0;i<n;i++){
    start = i%2==0 ? 1:0;
    for(var j=0;j<=i;j++){
      console.log(start+' ')
      start=1-start;
    }
    console.log('\n');
  }
}
function pattern12(n){
  for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
      console.log(j+' ')
    }
    for(var j=1;j<=2*(n-i);j++){
      console.log(' ')
    }
    for(var j=i;j>=1;j--){
      console.log(j+' ')
    }

    console.log('\n');
  }
}
function pattern13(n){

  var num =1;
  for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
      console.log(num+' ')
      num++
    }
    console.log('\n')
  }
}
function pattern14(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<=i;j++){
      var letter = String.fromCharCode(j + 65);
      console.log(letter)
    }
    console.log('\n');
  }
}
function pattern15(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<n-i;j++){
      var letter = String.fromCharCode(j + 65);
      console.log(letter)
    }
    console.log('\n');
  }
}
function pattern16(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<=i;j++){
      var letter = String.fromCharCode(i + 65);
      console.log(letter)
    }
    console.log('\n');
  }
}
function pattern17(n){
   for(var i=0;i<n;i++){
    for(var j=0;j<n-i-1;j++){
      console.log('\n');
    }
    var char = 65;
    for(var j=0;j<2*i+1;j++){
      console.log(String.fromCharCode(char));
      if(j<Math.floor((2*i+1)/2))
      char++
      else
      char--
    }
    for(var j=0;j<n-i-1;j++){
      console.log('\n');
    }
  }
}
function pattern18(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<=i;j++){
      console.log(String.fromCharCode(65+n-1-i+j))
    }
    console.log('\n')
  }
}
function pattern19(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<n-i;j++){
      console.log('*')
    }
    for(var j=0;j<2*i;j++){
      console.log(' ')
    }
    for(var j=0;j<n-i;j++){
      console.log('*')
    }
    console.log('\n')
  }
  for(var i=0;i<n;i++){
    for(var j=0;j<=i;j++){
      console.log('*')
    }
    for(var j=0;j<2*(n-i-1);j++){
      console.log(' ')
    }
    for(var j=0;j<=i;j++){
      console.log('*')
    }
    console.log('\n')
  }
}
function pattern20(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<=i;j++){
      console.log('*')
    }
    for(var j=0;j<2*(n-i-1);j++){
      console.log(' ')
    }
    for(var j=0;j<=i;j++){
      console.log('*')
    }
    console.log('\n')
  }
  for(var i=1;i<n;i++){
    for(var j=0;j<n-i;j++){
      console.log('*')
    }
    for(var j=0;j<2*i;j++){
      console.log(' ')
    }
    for(var j=0;j<n-i;j++){
      console.log('*')
    }
    console.log('\n')
  }
}
function pattern21(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
      if(i==0 || i==n-1 || j==0 || j==n-1){
        console.log('*')
      }
      else{
        console.log(' ')
      }
    }
    console.log('\n')
  }
}
function pattern22(n){
  for(var i=0;i<2*n-1;i++){
    for(var j=0;j<2*n-1;j++){
      var top =i;
      var left =j;
      var right =(2*n-2)-j;
      var bottom = (2*n-2)-i;
      console.log(n-Math.min(top,left,right,bottom))
    }
    console.log('\n')
  }
}
pattern22(4);
