function solution(my_string) {
  return my_string
    .split('')
    .map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
    .join('');
}