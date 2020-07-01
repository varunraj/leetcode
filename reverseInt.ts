function reverse(x: number): number {
    
    const lowerSide:number = Math.pow(2,31)*-1;
    const higherSide:number = Math.pow(2,31)-1;
    
    if ((x >= higherSide) || (x <= lowerSide))
        return 0;

    var rString:string = x.toString().split("").reverse().join("")
    const lastChar:String = rString[rString.length-1];
    var reversed:number = parseInt(rString);
    
    reversed = (lastChar=='-') ? (reversed*-1) : reversed
 
    if ((reversed >= higherSide) || (reversed <= lowerSide))
        return 0;
    else 
        return reversed
    
}; 