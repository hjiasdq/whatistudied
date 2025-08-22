function solution(n, k) {
  let meatPrice = n * 12000;
  let drinkPrice = (k - Math.floor(n / 10)) * 2000;
  return meatPrice + drinkPrice;
}