function solution(my_string) {
  // [aeiou] 모음 모두 제거, g: 전체, i: 대소문자 구분 없이
  return my_string.replace(/[aeiou]/gi, '');
}

// 예시
console.log(solution("hello world")); // "hll wrld"
console.log(solution("AEIOUabc"));    // "bc"