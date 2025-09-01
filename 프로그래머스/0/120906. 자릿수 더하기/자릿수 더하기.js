function solution(n) {
  return String(n) // 숫자를 문자열로 변환
    .split("")      // 한 글자씩 분리 → 배열
    .map(Number)    // 다시 숫자로 변환
    .reduce((a, b) => a + b, 0); // 합계 구하기
}