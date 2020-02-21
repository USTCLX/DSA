var isIsomorphic = function(s: string, t: string) {
  const sMap = new Map();
  const tMap = new Map();

  const sArr = Array(s.length).fill(0);
  const tArr = Array(t.length).fill(0);
  let sCount = 0;
  let tCount = 0;

  const length = s.length;

  for (let i = 0; i < length; i++) {
    if (!sMap.has(s[i])) {
      sMap.set(s[i], sCount++);
    }
    sArr[i] = sMap.get(s[i]);

    if (!tMap.has(t[i])) {
      tMap.set(t[i], tCount++);
    }
    tArr[i] = tMap.get(t[i]);

    if (sArr[i] !== tArr[i]) {
      return false;
    }
    // if(sCount!==tCount){
    //     return false
    // }
  }
  return true;
};

export default isIsomorphic;
