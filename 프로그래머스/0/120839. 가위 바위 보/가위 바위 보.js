function solution(rsp) {
  const winMap = {
    "2": "0", // 가위 → 바위
    "0": "5", // 바위 → 보
    "5": "2", // 보 → 가위
  };

  return [...rsp].map((v) => winMap[v]).join("");
}