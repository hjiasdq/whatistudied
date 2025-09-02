function solution(money) {
  const americanoPrice = 5500;
  const cups = Math.floor(money / americanoPrice); // 살 수 있는 잔 수
  const change = money % americanoPrice;           // 남는 돈
  return [cups, change];
}