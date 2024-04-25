function findMinNum(num) {
  let i = 1;
  while (true) {
    let arr = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0 && !arr.includes(j)) arr.push(j);
    }

    i++;
    if (arr.length === num) return arr[arr.length - 1];
  }
}

console.log(findMinNum(14));
