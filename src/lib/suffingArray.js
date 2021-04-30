const suffingArray = (arr) => {
  const suffedArray = [];
  const arrLength = arr.length;
  while (suffedArray.length < arrLength) {
    let r = Math.floor(Math.random() * arrLength);
    if (suffedArray.indexOf(arr[r]) === -1) suffedArray.push(arr[r]);
  }
  return suffedArray;
};

export default suffingArray;
