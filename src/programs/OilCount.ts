export const CalcMinOilCount = (
  maxDistance: number,
  distanceArr: number[]
): { result: string | number; shopIndex: number[] } => {
  let oilCount = 0;
  let oilToDistance = maxDistance;
  let shopIndex: number[] = [];
  for (let i = 0; i < distanceArr.length; i++) {
    if (maxDistance >= distanceArr[i]) {
      if (oilToDistance < distanceArr[i]) {
        oilToDistance = maxDistance;
        oilCount++;
        shopIndex.push(i - 1);
      }
      oilToDistance -= distanceArr[i];
    } else {
      return {
        result: "No resolution",
        shopIndex: shopIndex
      };
    }
  }
  return {
    result: oilCount,
    shopIndex: shopIndex
  };
};
