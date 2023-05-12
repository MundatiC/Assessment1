function equalEight(a,b){
    
    if(a === 8){
        console.log(`${a} is equal to eight`);
    } else if(b === 8){
        console.log(`${b} is equal to eight`);
    }
    else if(Math.abs(a-b) === 8 || Math.abs(a+b) === 8){
        console.log(`The sum or difference of ${a} and ${b} is equal to 8`);
    }
    else{
        console.log(`Neither of the numbers are equal to eight and neither are their sums or products`);
    }    
    }


equalEight(3,8);
equalEight(8,8);
equalEight(4,4);
equalEight(3,3);  
equalEight(16,-8);  
