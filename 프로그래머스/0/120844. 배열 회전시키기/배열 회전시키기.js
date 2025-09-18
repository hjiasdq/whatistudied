function solution(numbers, direction) {
  if (direction === "right") {
    // 마지막 요소 꺼내서 맨 앞에 넣기
    numbers.unshift(numbers.pop());
  } else {
    // 첫 요소 꺼내서 맨 뒤에 넣기
    numbers.push(numbers.shift());
  }
  return numbers;
}

