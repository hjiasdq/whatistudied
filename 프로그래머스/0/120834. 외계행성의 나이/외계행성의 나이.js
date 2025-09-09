function solution(age) {
  const mapping = ['a','b','c','d','e','f','g','h','i','j'];
  return String(age)             // 숫자를 문자열로 변환
    .split('')                   // 문자 배열로 변환
    .map(num => mapping[num])    // 각 자리수를 알파벳으로 변환
    .join('');                   // 다시 문자열로 합침
}