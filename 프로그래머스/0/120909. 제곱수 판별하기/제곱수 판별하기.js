function solution(n) {
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      return 1; // 제곱수
    }
  }
  return 2; // 제곱수 아님
}
