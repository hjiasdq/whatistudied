function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8); // 20% 할인
  } else if (price >= 300000) {
    return Math.floor(price * 0.9); // 10% 할인
  } else if (price >= 100000) {
    return Math.floor(price * 0.95); // 5% 할인
  } else {
    return price; 
  }
}

// function solution(price) {
//   return price >= 500000 ? Math.floor(price * 0.8)
//        : price >= 300000 ? Math.floor(price * 0.9)
//        : price >= 100000 ? Math.floor(price * 0.95)
//        : price;
// }