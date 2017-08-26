var word = "shirt"





function iteratePermute(word) {
    permutation = word.split("");
    var finalResult = []
  var length = permutation.length,
  
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  for (var i = 0; i < result.length; i++) {
      finalResult.push(result[i].join(""))
      
  }
  return finalResult;
}

console.log(iteratePermute(word));


