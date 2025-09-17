function solution(numbers, k) {
  const index = ((k - 1) * 2) % numbers.length;
  return numbers[index];
}