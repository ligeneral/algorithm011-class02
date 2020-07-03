const groupAnagrams = strs => {
  let hash = new Map();
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join('');
    if (hash.get(str)) {
      let temp = hash.get(str);
      temp.push(strs[i]);
      hash.set(str, temp);
    } else {
      hash.set(str, [strs[i]]);
    }
  }
  return [...hash.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
