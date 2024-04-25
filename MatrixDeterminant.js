function determinant(n) {
  if (n.length === 1) {
    return n[0][0];
  } else if (n[0].length === 2) {
    return n[0][0] * n[1][1] - n[0][1] * n[1][0];
  } else if (n[0].length === 3) {
    let sum = 0;
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < n[0].length; j++) {
        let [i1, i2] = [1, 2];
        let [j1, j2] = [1, 2];

        if (i === 0) [i1, i2] = [1, 2];
        else if (i === 1) [i1, i2] = [0, 2];
        else if (i === 2) [i1, i2] = [0, 1];

        if (j === 0) [j1, j2] = [1, 2];
        else if (j === 1) [j1, j2] = [0, 2];
        else if (j === 2) [j1, j2] = [0, 1];

        sum +=
          Math.pow(-1, i + j) *
          n[i][j] *
          determinant([
            [n[i1][j1], n[i1][j2]],
            [n[i2][j1], n[i2][j2]],
          ]);
      }
    }
    return sum;
  } else if (n[0].length > 3) {
    let sum = 0;

    for (let i = 0; i < n[0].length; i++) {
      let matrix = [];

      for (let j = 1; j < n[0].length; j++) {
        let rowMatrix = [];

        for (let k = 0; k < n[0].length; k++) {
          if (i === k) continue;

          rowMatrix.push(n[j][k]);
        }

        matrix.push(rowMatrix);
      }

      sum += Math.pow(-1, i) * n[0][i] * determinant(matrix);
    }

    return sum;
  }
}

let m1 = [
  [2, 4, 2, 3, 4],
  [3, 1, 1, 4, 5],
  [1, 2, 0, 5, 6],
  [6, 5, 1, 2, 7],
  [6, 5, 1, 2, 9],
];

console.log(determinant(m1));
