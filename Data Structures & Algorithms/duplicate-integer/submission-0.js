class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let uniqueArr= [];
        for(let i=0;i<nums.length;i++){
            if(uniqueArr.includes(nums[i])){
                return true;
            }
            else{
               uniqueArr.push(nums[i]);
            }
        }
        return false;
    }
}
