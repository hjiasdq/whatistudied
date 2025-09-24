function solution(order) {
  // 숫자를 문자열로 변환 후 배열로 쪼갬
  let arr = String(order).split('');
  
  // 3,6,9가 들어있는 원소만 필터링
  let clap = arr.filter((num) => num === '3' || num === '6' || num === '9');
  
  // 박수 개수는 남은 원소 개수
  return clap.length;
}