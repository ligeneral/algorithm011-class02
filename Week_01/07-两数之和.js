/*
* 最暴力的方法，双重循环判断
* */
const twoSum1 = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        break;
      }
    }
  }
  return result;
};

/*
* 哈希表，空间换时间
* 先把第一个遍历到的值保存到哈希表中，遍历到下一个数的时候，查看哈希表中有没有对应的值可以与当前的值相加得到目标值
* */

const twoSum2 = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (obj[diff] >= 0) {
      return [obj[diff], i];
    }
    obj[nums[i]] = i;
  }
};
