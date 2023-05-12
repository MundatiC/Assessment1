function hoursAndMinutes(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    if(hours === 1){
        
        if(minutes === 1) {
            return `${num} is equivalent to ${hours} hour, ${minutes} minute`;
    
        }

        return `${num} is equivalent to ${hours} hour, ${minutes} minutes`;
    }

    else if(minutes === 1){
        return `${num} is equivalent to ${hours} hours, ${minutes} minute`;

    }
    
        return `${num} is equivalent to ${hours} hours, ${minutes} minutes`;

    
    
  }

console.log(hoursAndMinutes(78));  
console.log(hoursAndMinutes(61));
console.log(hoursAndMinutes(121));
  