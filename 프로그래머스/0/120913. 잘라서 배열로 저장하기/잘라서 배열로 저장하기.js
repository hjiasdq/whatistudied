function solution(my_str, n) {
  const result = [];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n)); // 배열 내부 변경 (OK)
  }

  return result; // result 자체를 다시 할당하지 않았으니까 문제 없음
}