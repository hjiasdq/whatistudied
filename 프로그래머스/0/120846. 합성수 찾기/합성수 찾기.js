function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let divisorCount = 0;

    // 약수 개수 세기
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisorCount++;
    }

    if (divisorCount >= 3) count++;
  }

  return count;
}