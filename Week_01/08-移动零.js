/*
* 新增数组索引，有些不容易理解
* 遍历数组，然后判断数组里每一项元素是否为 0，如果不为 0，那么就把该元素放在数组新索引的位置，如果新旧索引不同，那么说明遇到了 0，就把旧索引的值赋为 0
* 如果这个数组里没有 0，那么 i 和 j 的索引是完全一致的，也就走不到 if(i !== j) 这一步，所以既然 i 和 j 的索引不一致的，那么就是说明遇到了 0
* 遇到 0 ，跳过，之后发现 i 和 j 的索引不一致，那么就把旧索引 i 位置的值置为 0，而 i 位置原有的值，已经被新索引 j 使用。
* */
const moveZeroes01 = nums => {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      if (i !== j) {
        nums[i] = 0;
      }
      j++;
    }
  }
  return nums;
};


/*
* 把所有的非零项移动到数组的前边，记录最后一个非零项的索引。然后从非零项的索引开始，把后边所有项的值都置为 0
* 容易理解
* */
const moveZeroes02 = nums => {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i]
      index++
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums;
}
