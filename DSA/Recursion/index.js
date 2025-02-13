
// Reverse String

function reverseString(string){
   
    if(string === ""){
        return string
    }

     return  string[string.length - 1]  + reverseString(string.substring(0, string.length - 1))
}

// console.log(reverseString("Shiavnshu"));


//  method 2

function reverseString(string){
   
    if(string === ""){
        return string
    }

     let reversepart = reverseString(string.substring(0, string.length - 1))

        let result = string[string.length - 1] + reversepart

        return result;
}

// console.log(reverseString("Shiavnshu"));


// by itertive way


function reverseStr(string) {
    let reverse = "";
    let index = string.length - 1; // Start from the last character

    while (index >= 0) {
        reverse += string[index]; // Append the character to the reverse string
        index--; // Move to the previous character
    }
    return reverse;
}

console.log(reverseStr("shiavnshu")); 
