let nums = [-1, -100, 3, 99], k = 2;
const rotate = function(nums2, k2) {
  let v = [nums2, k2 %= nums2.length, []];
  v[2] = v[0].splice(0, v[0].length - v[1]);
  for (let i = 0; i < v[2].length; i++) {
    nums2.push(v[2][i]);
  }
  return v[0];
};
console.log(rotate(nums, k));
//# sourceMappingURL=index.js.map
