'use strict';
// 1
export function basicOp(operation, a, b,) 
{
    switch (operation) 
    {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default: return 0
            break
    }
}



// 2

//  export function stringMerge(first, second, letter) {
//     let num = first.indexOf(letter)
//     first = first.slice(0, num)
//     num = second.indexOf(letter)
//     second = second.slice(num + 1)

//     return first + letter + second  
// }




export function stringMerge(first,second,letter){
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


// 3


 export function createPhoneNumber(numbers) {
    const begging = numbers.slice(0, 3);
    const middle = numbers.slice(3, 6);
    const end = numbers.slice(6);
    return('(' + begging.join('') + ')' + ' ' + middle.join('') + '-' + end.join(''));
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


// 4

export function getOperands(numb){
    numb=numb.split(' ');
    return('a:' + numb[0] + 'b:'+ numb[2]);
}


// 5



export function getTime(str) {
    const result = str.match(/(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/g);
    if (result) {
        return result[0];
    }
    return '';
}



// 6




  export function isPalindrome(str) {
    let ans;
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    const newstr = str.split("")
    .reverse()
    .join("");
    if(newstr === str){
        ans = true;
    }else
    {
        ans = false;
    }
    return ans;
}   


// 7




export function swapCase(string) {
    return(string.replace(/./g,letter=>letter==letter.toUpperCase() ?  letter.toLowerCase() : letter.toUpperCase()))
}




//8



 export function countOccurrences(word,letter){
    let count=0;
    
   word = word.toLowerCase();
    letter =  letter.toLowerCase();

    for(let i = 0; i < word.length; i++){
        
        if(word[i]===letter){
            count++;
        }
    }
    return(count);

};






//9
export function vowelCount(str){
    const letter = ['a','e','o','u','i'];
    let count=0;

    for(let i = 0; i < str.length; i++){
        if(letter.includes(str[i])){
            count++;
        }
    }

    return count;
}





// 10
 export function alphabetPosition(letter) {
    const arr = []
   letter = letter.replace(/[^a-zA-Z]+/g, '').toLowerCase();

    for (let i = 0; i < letter.length; i++) {
        arr.push(letter[i].charCodeAt(0) - 96);
    }
    return arr.join(' ');
}
 
