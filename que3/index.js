arr1 = [ 1,2,3,4,5];
arr2 = [2,3,1,0,5];

function checkNotInBoth (arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            return arr1[i];
        }
        
    }
}

console.log(checkNotInBoth(arr1,arr2))