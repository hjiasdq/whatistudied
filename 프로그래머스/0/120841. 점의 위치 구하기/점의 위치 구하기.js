function solution(dot) {
  const [x, y] = dot; // 배열에서 x, y 꺼내기

  if (x > 0 && y > 0) return 1; // 제1사분면
  if (x < 0 && y > 0) return 2; // 제2사분면
  if (x < 0 && y < 0) return 3; // 제3사분면
  return 4;                     // 나머지는 제4사분면
}
