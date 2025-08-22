function solution(sides) {
  // 배열에서 가장 긴 변을 찾는다.
  let max = Math.max(...sides);

  // 배열 안 모든 변의 길이를 합친다.
  let sum = sides.reduce((a, b) => a + b, 0);

  // 삼각형 조건:
  // "가장 긴 변 < 나머지 두 변의 합"
  // 나머지 두 변의 합 = 전체 합 - 가장 긴 변
  // 조건을 만족하면 1(삼각형 가능), 아니면 2(삼각형 불가능) 반환
  return max < (sum - max) ? 1 : 2;
}