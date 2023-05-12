
function findTypeOfAngle(a){

    if(a>0 && a<90){

        return `${a} is an Acute angle`;
    }

    else if (a === 90){
        return `${a} is a Right angle`;
    }

    else if (a > 90 && a < 180){
        return `${a} is an Obtuse angle`;
    }

    else if(a === 0 || a === 180){
        return `${a} is a Straight angle`;
    }

    else {
        return `Use a number in the range 0 - 180`;
    }
}

console.log(findTypeOfAngle(180));
console.log(findTypeOfAngle(181));
console.log(findTypeOfAngle(90));
console.log(findTypeOfAngle(0));
console.log(findTypeOfAngle(65));
console.log(findTypeOfAngle(179));