function solution(num_list, n) {
  let result = [];

  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list.slice(i, i + n)); // i부터 i+n까지 잘라서 새 배열 추가
  }

  return result;
}