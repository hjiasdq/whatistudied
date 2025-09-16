function solution(my_string) {
  return my_string
    .match(/\d/g)              // 모든 숫자 찾기 → ["1","2","3"]
    .map(Number)               // 문자열 → 숫자 변환
    .sort((a, b) => a - b);    // 오름차순 정렬
}