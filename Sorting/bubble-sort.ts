function bubbleSort(arr, n){
  for(var i=0;i<n;i++){
    var flag=0;
    for(var j=0;j<n-i-1;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        flag=1;
      }
    }
    if(flag == 0) break;
  }
  return arr;
}

console.log(bubbleSort([5,78,3,9,43,98],6));
