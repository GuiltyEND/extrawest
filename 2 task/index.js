// 1


export function calculateRentalCost(rentDays){
    const price = 40;
    if(rentDays >= 7 ){
        return price * rentDays -50;
    }
    else if(rentDays >= 3 && rentDays <=7){
        return price * rentDays -20;
    }else if(rentDays < 3)
    {
       return price * rentDays;
    }
}


// 2
  function openOrSenior(data){
    let result = data.map(([[age, exp]]) => (age > 40 && exp > 15) ? 'Senior' : 'Open');
    return result;
  }



// 3


function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }


  // 4
  let moveZeros = function (arr) {
    const zeros = arr.filter((elm) => elm === 0).length;
    const result = arr.filter((elm) => elm !== 0);
    
    for (let i = 0; i < zeros; i += 1) {
      result.push(0);
    }
    
    return result;
  }


// 5


function reverseWords(str){
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


// 6





// 7


function invertColor(hex) {
  if (hex.length === 7 && hex[0] === '#') {
      hex = hex.slice(1)
      return '#' + (Number(`0x${hex}`) ^ 0xFFFFFF).toString(16).toLocaleLowerCase()
  }
  return 'Error'
}

