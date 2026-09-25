class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap= new Map();

        for (let i=0;i<nums.length;i++){
            if(numsMap.has(nums[i])){
                numsMap.set(nums[i], numsMap.get(nums[i])+1);

            }
            else{
                numsMap.set(nums[i],1);
            }
        }
        //sort and return k top keys
       return [...numsMap.entries()]
       .sort((a,b)=>b[1]-a[1])
       .slice(0,k)//top k
       .map(([key])=>key)
    }
}
