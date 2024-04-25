function sumStrings(a, b) {
  let arrA = a.split("");
  let arrB = b.split("");
  let max = Math.max(arrA.length, arrB.length);
  let min = Math.min(arrA.length, arrB.length);

  let arr = [max === arrA.length ? [...arrA] : [...arrB], []];

  if (arrA.length !== arrB.length) {
    for (let i = 0; i < max; i++) {
      if (i < max - min) arr[1].push("0");
      else
        arr[1].push(
          arrA.length === min ? arrA[i - (max - min)] : arrB[i - (max - min)]
        );
    }
  } else arr[1] = arrB;

  let sumArr = [];
  let remainder = 0;
  for (let i = arr[0].length - 1; i >= 0; i--) {
    let sum = (
      remainder +
      parseInt(arr[0][i]) +
      parseInt(arr[1][i])
    ).toString();

    if (i === 0) sumArr.unshift(sum);
    else {
      sumArr.unshift(sum[sum.length > 1 ? 1 : 0]);
      remainder = sum.length > 1 ? parseInt(sum[0]) : 0;
    }
  }

  let res = sumArr.join("");
  return res[0] === "0" ? res.slice(1, res.length) : res;
}

console.log(sumStrings("00103", "08567"));

123456;
768;
