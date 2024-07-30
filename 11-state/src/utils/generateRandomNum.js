function generateRandomNum(maxNum = 100) {
  console.log(maxNum);
  return Math.floor(Math.random() * maxNum);
}

export default generateRandomNum;
