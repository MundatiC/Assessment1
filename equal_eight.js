function equalEight(a,b){
    
    if(a === 8){
        return`${a} is equal to eight`;
    } else if(b === 8){
        return`${b} is equal to eight`;
    }
    else if(Math.abs(a-b) === 8 || Math.abs(a+b) === 8){
        return `The sum or difference of ${a} and ${b} is equal to 8`;
    }
    else{
        return `Neither of the numbers are equal to eight and neither are their sums or products`;
    }    
    }


console.log(equalEight(3,8)); 
console.log(equalEight(8,8)); 
console.log(equalEight(4,4)); 
console.log(equalEight(3,3));
console.log(equalEight(16,-8));  
  
