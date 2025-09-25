function solution(numbers) {
  // 영어 숫자 단어를 배열로 정의
  const numWords = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine"
  ];
  
  // numbers 문자열에서 영어 단어를 숫자로 치환
  numWords.forEach((word, index) => {
    numbers = numbers.replaceAll(word, index);
  });

  // 최종적으로 숫자 문자열을 정수로 변환하여 반환
  return Number(numbers);
}