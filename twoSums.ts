function twoSum(nums: number[], target: number): number[] {
   
   
    var result:number[] = [];
    length = nums.length
   
    for (var i=0; i < length; i++) {
       
        for (var j=i+1; j < length; j++) {

            if (nums[i]+nums[j] == target){
                result = [i,j];
                break;
            }
           
         }
    }
       
    return result
};
