//not finish
function alphabetWar(fight) {
  let left = 0,
    right = 0;

  let leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    t: 0,
  };

  let rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    j: 0,
  };

  let combined = {};
  let invertedCombined = {};

  for (let key in leftSide) {
    combined[key] = Object.keys(rightSide).find(
      (k) => rightSide[k] === leftSide[key]
    );
  }

  for (let key in combined) {
    invertedCombined[combined[key]] = key;
  }

  if (fight.split(/t|j/).filter((x) => x).length > 1) {
    for (let i = 0; i < fight.length; i++) {
      if (["w", "p", "b", "s", "t"].includes(fight[i].toLowerCase())) {
        fight[i] = combined[fight[i]];
      } else if (["m", "q", "d", "z", "j"].includes(fight[i].toLowerCase())) {
        fight[i] = invertedCombined[fight[i]];
      }
    }
  }

  for (let i = 0; i < fight.length; i++) {
    if (["w", "p", "b", "s", "t"].includes(fight[i].toLowerCase())) {
      left += leftSide[fight[i].toLowerCase()];
    } else if (["m", "q", "d", "z", "j"].includes(fight[i].toLowerCase())) {
      right += rightSide[fight[i].toLowerCase()];
    }
  }

  if (left === right) return "Let's fight again!";
  else if (left > right) return "Left side wins!";
  else if (right > left) return "Right side wins!";
}

console.log(alphabetWar("zt"));
