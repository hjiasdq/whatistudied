function solution(my_string) {
  // 1. 문자열을 Set으로 변환 → 중복 자동 제거
  // 2. 전개 연산자(...)로 배열로 변환
  // 3. join("")으로 배열을 다시 문자열로 합침
  return [...new Set(my_string)].join("");
}