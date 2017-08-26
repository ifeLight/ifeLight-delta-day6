var word1 = "spar";
var word2 = "pars"

function anagramcheck(word1, word2) {
  var str1 = word1.toLowerCase().split("").sort().join("").trim();
  var str2 = word2.toLowerCase().split("").sort().join("").trim();

  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}


console.log(anagramcheck(word1, word2));