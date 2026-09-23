class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let index=0;
        while(index<nums.length){
        for(let i=0;i<nums.length;i++){
            if(i!=index){

                if(nums[index]+nums[i]==target){
                    return [index, i].sort((a,b)=>a-b);
                }

            }

        }
        index++

        }
        return false;


     
     
    }
}
