function insertionSort(arr,n){
  for(var i =0;i<n;i++){
    var val = arr[i];
    var blank = i;
    while(blank>0 && arr[blank-1]>val){
      arr[blank]=arr[blank-1];
      blank = blank-1
    }
    arr[blank] =val;
  }
  return arr;
}

console.log(insertionSort([5,78,3,9,43,98],6));
