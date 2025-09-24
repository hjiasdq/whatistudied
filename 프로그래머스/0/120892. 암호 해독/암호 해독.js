function solution(cipher, code) {
  return cipher
    .split('')                         // 문자열 -> 배열
    .filter((_, i) => (i + 1) % code === 0) // code 배수 번째 글자만
    .join('');                         // 다시 문자열로 합치기
}