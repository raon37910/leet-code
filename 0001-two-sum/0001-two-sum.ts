function twoSum(nums: number[], target: number): number[] {
 const memo = {}
    nums.forEach((item, index) => memo[item] = [item, index]);

    for(let i = 0; i < nums.length; i++) {
       let x = target - nums[i]
       if(memo[x] && memo[x][1] !== i) {
        return [i, memo[x][1]]
       }
    }

    return []
};