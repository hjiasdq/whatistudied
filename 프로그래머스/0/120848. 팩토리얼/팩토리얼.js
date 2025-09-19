function solution(n) {
  function find(i, factorial) {
    // (i+1)!이 n보다 크면 현재 i가 답
    if (factorial * (i + 1) > n) return i;
    return find(i + 1, factorial * (i + 1));
  }

  return find(1, 1); // i=1, factorial=1부터 시작
}