function solution(n) {
  let pizzas = 1; // 최소 1판부터 시작
  while ((6 * pizzas) % n !== 0) {
    pizzas++;
  }
  return pizzas;
}