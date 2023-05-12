const arr = [65, 87, 98, 65];

const arr2 = [65];

function createArray(a){
    if(a.length < 1){
        console.log(`The array must have atleast one element`);
    }

    const newArray = [];
    newArray.push(a[0]);
    newArray.push(a[a.length-1]);

    return newArray;

}

console.log(createArray(arr));

console.log(createArray(arr2));
