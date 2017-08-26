arr = [23,3,45,5,67,8,9,9];


function findDuplicate (arr){
    
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
       if (i !== j) {
            if (arr[i] === arr[j]) {
            return arr[i];
        }
       }
    }
    
}
}

console.log(findDuplicate(arr))