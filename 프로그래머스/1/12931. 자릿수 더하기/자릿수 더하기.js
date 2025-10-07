function solution(N) {
  // 숫자를 문자열로 변환하여 각 자리로 나눈 후, 다시 숫자로 변환
  const digits = String(N).split('').map(Number);

  // reduce를 사용해 모든 자리수를 더함
  const sum = digits.reduce((acc, cur) => acc + cur, 0);

  return sum;
}