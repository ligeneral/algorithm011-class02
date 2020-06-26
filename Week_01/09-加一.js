/*
* 分为三种情况
* 1. 没有进位，比如 [1, 2, 3]
* 2. 中间进位，比如 [1, 8, 9]，遍历判断元素是否为 0，如果为 0 ，说明有进位
* 3. 一直进位到首位，结果多出一位，比如 [9, 9, 9]，所有结果为是 0，然后首位补一个 1
* */
const plusOne = digits => {
  const len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) {
      return digits;
    }
  }
  digits = [...Array(len + 1)].map(() => 0);
  digits[0] = 1;
  return digits;
};
