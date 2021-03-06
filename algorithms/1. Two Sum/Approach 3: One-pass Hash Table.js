/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const requireValue = target - nums[i];
    if (map.has(requireValue)) {
      return [map.get(requireValue), i];
    }
    map.set(nums[i], i);
  }
};
