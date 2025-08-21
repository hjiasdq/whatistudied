function solution(numbers) {
  // 배열 오름차순 정렬
  numbers.sort((a, b) => a - b);

  const n = numbers.length;
  // 가장 큰 두 수 곱, 가장 작은 두 수 곱 비교
  const max1 = numbers[n - 1] * numbers[n - 2];
  const max2 = numbers[0] * numbers[1];

  return Math.max(max1, max2);
}