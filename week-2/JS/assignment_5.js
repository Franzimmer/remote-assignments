// Assignment 5: function twoSum(nums, target) - return indices of the two numbers such that they add up to a specific target
function twoSum(nums, target) {
	let ans = [];
	for(let i = 0; i < nums.length - 1; i++) {
		for (let j = i+1; j <= nums.length -1; j++) {
			if (nums[i] + nums[j] === target) {
				let a = [i,j];
				ans.push(a);
			}
		}
	}
	return ans;
}