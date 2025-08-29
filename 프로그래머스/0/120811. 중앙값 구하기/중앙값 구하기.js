function solution(array) {
  // 1. 배열 정렬
  array.sort((a, b) => a - b);

  // 2. 중앙값 구하기
  const mid = Math.floor(array.length / 2);

  return array[mid];
}