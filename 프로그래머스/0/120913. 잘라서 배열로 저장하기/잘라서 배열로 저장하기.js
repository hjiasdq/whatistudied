function solution(my_str, n) {
  let result = [];
    
  for (let i = 0; i < my_str.length; i += n) {
    const part = my_str.slice(i, i + n);
    result.push(part);
  }

  return result;
}