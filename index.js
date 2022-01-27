
// 1
export function basicOp(operation, a, b,) 
{
    if (operation == '+')
        {
        return a + b; 
        }
    else if (operation == '-')
        {
        return a - b;
        }

    else if (operation == '*')
        {
        return a * b; 
        }

    else if (operation == '/') 
        {
        return a / b; 
        }

    else 
        { 
        return 0 ;
        }

    let result;
  
    return result;
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5)) ;
console.log(basicOp('/', 49, 7));
console.log(basicOp('something else', 45, 45)) ;

// 2

export function stringMerge(first, second, letter) {
    const num = first.indexOf(letter)
    first = first.slice(0, num)
    num = second.indexOf(letter)
    second = second.slice(num + 1)

    return first + letter + second  
}




function stringMerge(first,second,letter){
    first=first.split('');
    second=second.split('');
    for(let i = 0; i<= first.length; i++){
        if (first[i]==letter){
          first=first.slice(0,i+1);
          break;  
        }
    }
    for(let i = 0; i<= second.length; i++){
        if (second[i]==letter){
            first=first+second.slice(i+1,second.length)
            first=first.split(',');
          break;  
        }
    }
    first=first.join('');
    return first;
}
console.log( stringMerge("hello", "world", "l"));
console.log( stringMerge("coding", "anywhere", "n") )
console.log( stringMerge("jason", "samson", "s"))


// 3


 function createPhoneNumber(numbers) {
    const begging = numbers.slice(0, 3);
    const middle = numbers.slice(3, 6);
    const end = numbers.slice(6);
    console.log('(' + begging.join('') + ')' + ' ' + middle.join('') + '-' + end.join(''));
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


// 4

export function getOperands(numb){
    numb=numb.split(' ');
    return('a:' + numb[0] + 'b:'+ numb[2]);
}

console.log (getOperands('1 + 2'));     
console.log (getOperands('1.2 * -3.4'));       
console.log (getOperands('1 - 2'));     
console.log (getOperands('1 - -2'));

// 5



export function getTime(str) {
    const result = str.match(/(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/g)
    return result[0]
}


// 6




export  function isPalindrome(letter) {
    let ans;
    letter = letter.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    let newLetter = letter.split("").reverse().join("");
    if(newLetter == letter){
        ans = true;
    }else
    {
        ans = false;
    }
    return ans;
}   
console.log(isPalindrome('Eva, can I see bees in a cave?')); 



// 7




export function swapCase(regExp) {
    return( regExp.replace(/./g,a=>a==a.toUpperCase() ?  a.toLowerCase() : a.toUpperCase()))
}



swapCase("aBc");            //"AbC"
swapCase("GooD");         //"gOOd"
swapCase("hello");         //"HELLO"
swapCase("75386");        //"75386"


//8



export function countOccurrences(word,letter){
    let count=0;
    
    word = word.toLowerCase();
    letter = letter.toLowerCase();

    for(let i = 0; i < word.length; i++){
        
        if(word[i]==letter){
            count++;
        }
    }
    return(count);

};


countOccurrences('ability', 'i') ;        // 2
countOccurrences('abc', 'a')             //1
countOccurrences('ABC', 'a')             //1


//9





// 10
 export function alphabetPosition(letter) {
    const arr = []
    letter = letter.replace(/[^a-zA-Z]+/g, '').toLowerCase();

    for (let i = 0; i < letter.length; i++) {
        arr.push(letter[i].charCodeAt(0) - 96);
    }
    return arr.join(' ');
}

alphabetPosition("The sunset sets at twelve o' clock.")               // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
