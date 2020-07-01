function isPalindrome(x: number): boolean {
    
    var xString:string = x.toString();
    var len:number = xString.length

    while (len > 1){

        if (xString[0] == xString[len-1]){
            xString =  xString.slice(1,-1)
            len = len-2
        }
        else
            return false 
     
    }

    return true
};