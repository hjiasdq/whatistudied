function solution(my_string) {
  return my_string
    .split("")                // 문자열 -> 문자 배열
    .map(ch => (ch >= "0" && ch <= "9" ? Number(ch) : 0)) // 숫자면 변환, 아니면 0
    .reduce((a, b) => a + b, 0); // 합산
}