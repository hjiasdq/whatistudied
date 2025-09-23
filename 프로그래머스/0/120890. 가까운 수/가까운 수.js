function solution(array, n) {
  return array.reduce((acc, cur) => {
    const accDiff = Math.abs(acc - n);
    const curDiff = Math.abs(cur - n);

    if (curDiff < accDiff) return cur;
    if (curDiff === accDiff && cur < acc) return cur;
    return acc;
  });
}