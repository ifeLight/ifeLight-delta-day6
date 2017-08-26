
arr = [344,4,5,5,6,67,7,8,8,8,83,55];

function findSecondHighest (arr) {
    var highest = Math.max(...arr);
    var newArray;
    while(Math.max(...arr) === highest){
        var index = arr.indexOf(highest);
         arr.splice(index,1);
    }
    return Math.max(...arr);
}

console.log(findSecondHighest(arr))