function countFrequency(arr){
  var count = new Map()
  for(var i=0;i<arr.length;i++){
    if(count.has(arr[i])){
      var c = count.get(arr[i])+1;
      count.set(arr[i],c);
    }
    else{
      count.set(arr[i],1)
    }
  }
  return count;
}

console.log(countFrequency([10,14,15,10,15]));

function frequencyCount(arr,N,P){
  var output ='';
  for(var i =1;i<=P;i++){
    var count = 0
    for(var j =0;j<N;j++){
      if(arr[j]==i){
        count++;
      }
    }
    output =output+count+' ';
  }
  console.log(output.trim())
}

frequencyCount([2, 3, 2, 3, 5],5,5)

//highest/lowest frequency

function frequency(arr){
  var m = countFrequency(arr);
  console.log(m.get(3))
  console.log(Math.max(...m.values()))
  console.log(Math.min(...m.values()))
}

frequency([7, 8, 4, 5, 4, 1, 1, 7, 7, 2, 5])
