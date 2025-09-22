function solution(n) {
  if (n <= 1) return [];

  const primes = [];

  // 2로 나누어지는 경우 처리 (짝수)
  if (n % 2 === 0) {
    primes.push(2);
    while (n % 2 === 0) n = n / 2;
  }

  // 홀수 후보로 나눠보기 (3,5,7,...)
  for (let p = 3; p * p <= n; p += 2) {
    if (n % p === 0) {
      primes.push(p);
      while (n % p === 0) n = n / p;
    }
  }

  // 남은 n이 1보다 크면 그 수 자체가 소수 (마지막 소인수)
  if (n > 1) primes.push(n);

  return primes;
}