/*
* 解法1：removeDuplicates1
* 最先想到的方法，时间复杂度为 O(n^2)
* 从后向前遍历比较，可以减少被 splice 元素的后边的元素的移动数量，但是这也仅仅是一种很轻微的优化。依然不能改变 splice 的 O(n) 时间复杂度
* 改善的办法就是，不需要删除数组的元素，仅仅需要记录数组中不同元素的个数即可。
* */
const removeDuplicates1 = nums => {
  if (!nums && nums.length === 0) {
    return 0;
  }

  for (let i = nums.length; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

/*
* 解法2：removeDuplicates2
* leetcode 官方题解：
* 时间复杂度为 O(n)
* 双指针解法，i 是慢指针，j 是快指针，如果 nums[i] === nums[j]，那么就继续向后走，直到遇到 nums[i] !== nums[j]，此时就把 nums[i] 赋值为 nums[j]，实际上就是对前 i个元素进行排序，对于第 i + 1 个元素直到末尾都不再关心。
* */
const removeDuplicates2 = nums => {
  if (!nums && nums.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      if (j > i) {
        nums[i] = nums[j];
      }
    }
  }

  return i + 1;
};
