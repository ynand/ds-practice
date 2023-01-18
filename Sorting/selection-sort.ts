function selectSort(arr,n){
  for(var i=0;i<n-1;i++){
    var min =i;
    for(var j=i+1;j<n;j++){
      if(arr[j]<arr[min])
        min =j;
      }
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
  }
  return arr;
}

console.log(selectSort([5,78,3,9,43,98],6));
