/*
* 有效的字母异位词，采用 哈希表 记录第一个词里的字母出现次数，再把第二个词里的字母出现次数进行相减
* 如果最后得到的哈希表里的所有值都为 0，那么说明就是异位词
* */

const isAnagram1 = (s, t) => {
  if (s === t && t === '') {
    return true;
  }

  if (!s || !t || s.length !== t.length) {
    return false;
  }

  let counter = {};

  for (let i = 0; i < s.length; i++) {
    let alpha = s[i];
    if (counter.hasOwnProperty(alpha)) {
      counter[alpha]++;
    } else {
      counter[alpha] = 0;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let alpha = s[i];
    if (counter[alpha]) {
      counter[alpha]--;
    } else {
      return false;
    }
  }
  for (let key in counter) {
    if (counter[key] !== 0) {
      return false;
    }
  }
  return true;
};


const isAnagram2 = (s, t) => {
  if (s === t && t === '') {
    return true;
  }

  if (!s || !t || s.length !== t.length) {
    return false;
  }
  
  return s.split('').sort().join('') === t.split('').sort().join('');
};
