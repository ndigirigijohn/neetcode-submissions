class Solution {
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // index = frequency, value = list of numbers with that frequency
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of count) {
            buckets[freq].push(num);
        }

        const result = [];
        for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    }
}