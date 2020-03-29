const castPathToArray = (path: string): Array<string> => {
  const result: string[] = [];
  if (!path) return result;
  // except . [ ] symbols. if there isn't a \ in front of the first ],the first ] will be a close tag
  const reg = /[^.[\]]+|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  const reLeadingDot = /^\./;
  if (reLeadingDot.test(path)) result.push("");
  // let match: Array<any>;
  path.replace(reg, function(match, string) {
    result.push(match);
    return match;
  });
  // while ((match = reg.exec(path)) != null) {
  //   result.push(match[0]);
  // }
  return result;
};

export default castPathToArray;
