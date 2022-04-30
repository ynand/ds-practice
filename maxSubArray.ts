var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var sum =nums[0];
    for(var i=1;i<nums.length;i++){
        if(nums[i]>sum+nums[i]){
            sum =nums[i];
        } 
        else{
            sum=nums[i]+sum;
        }
        maxSum = Math.max(sum,maxSum)
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

