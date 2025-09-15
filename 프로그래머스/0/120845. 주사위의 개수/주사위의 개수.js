function solution(box, n) {
  const [w, h, l] = box; 
  const countW = Math.floor(w / n);
  const countH = Math.floor(h / n);
  const countL = Math.floor(l / n);

  return countW * countH * countL;
}