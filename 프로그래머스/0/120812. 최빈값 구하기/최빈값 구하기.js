function solution(array) {
  const counts = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(counts));
  const modes = Object.keys(counts)
    .filter(key => counts[key] === maxCount)
    .map(Number);

  return modes.length > 1 ? -1 : modes[0];
}