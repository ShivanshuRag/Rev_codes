
function isVowel(str){

    let vowels = 'aeiou'
    let lowerstr = str.toLowerCase(str)

   if ( vowels.indexOf(lowerstr) !== -1){
       return true
   }else{
     return false
   }
      
}

function findVowels( string ){
    let count = 0

    for ( let i=0 ; i < string.length; i++){
        if (isVowel(string[i])){
            count++
        }

    }
    return count ;
}

// console.log(findVowels('hello'));


// by recursion 

function byrecursionFindVowel(string , stringlength){
    
    if(stringlength == 1){
        return Number(isVowel(string[0]))
    }

   return byrecursionFindVowel(string , stringlength - 1) + isVowel(string[stringlength-1])

}
 let mystring = "hello"
console.log(byrecursionFindVowel( mystring, mystring.length));