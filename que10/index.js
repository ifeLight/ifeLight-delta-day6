var figure = 371;

function armstrongCheck (num) {
    var toWord = num.toString();
    var toArray = toWord.split("");
    var additions = 0;

    for (var i = 0; i < toArray.length; i++) {
        additions += Math.pow(Number(toArray[i]) ,3)
    }

    if (additions  === num) {
        return true
    }
    else {
        return false;
    }

}


console.log(armstrongCheck(figure))