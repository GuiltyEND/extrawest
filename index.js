// // 1


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
  // function openOrSenior(data){
  //   let result = data.map(([[age, exp]]) => (age > 40 && exp > 15) ? 'Senior' : 'Open');
  //   return result;
  // }

  export function openOrSenior(data) {
    let arr=[];
    for(let i = 0; i<data.length; i++){
      if(data[i][0]>=40 && data[i][1]>15){
        arr.push('Senior')
      }else{
        arr.push('Open')

      }
    }
    return arr;
  }
  


// 3


export function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }


//   // 4


// export function moveZeros(arr){
//   let arrZero = arr.filter(el=>el===0).length;
  
//   for(let i = 0; i< arr.length - arrZero;){
//     if(arr[i]===0){
//       arr.slice(i,1);
//       arr.push(0);
//     }else{i++}
//   }
//   return arr
// }

export let moveZeros = function (arr) {
    const zeros = arr.filter((elm) => elm === 0).length;
    const result = arr.filter((elm) => elm !== 0);
    
    for (let i = 0; i < zeros; i += 1) {
      result.push(0);
    }
    
    return result;
  }


// // 5


export function reverseWords(str){
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


// 6

export const createUrl = (template, params) => {
	const urlArray = template.split('/')
		.map((elem) => {
			let result = elem;

			if (elem.startsWith('{') && elem.endsWith('}')) {
				result = params.hasOwnProperty(elem.slice(1, -1)) ? params[elem.slice(1, -1)] : 'undefined';
			}

			return result;
		});

	return urlArray.join('/');
};

// 7


export function invertColor(hex) {
  if (hex.length === 7 && hex[0] === '#') {
      hex = hex.slice(1)
      return '#' + (Number(`0x${hex}`) ^ 0xFFFFFF).toString(16).toLocaleLowerCase()
  }
  return 'Error'
}



// 8



// 9


// 10



// 11

 export const makeArmy = (arrSize) => {
  const arr = [];
  let i = 0;
  while (i < arrSize) {
    const index = i;

    arr.push(() => {
      return index;
    });
    i++;
  }

  return arr;
};

// 12


export const createPrevArgSaver = () => {
  let previousCall;

  return (nowValue) => {
    const result = previousCall;

    previousCall = nowValue;

    return result;
  };
};



// 13



export const createAdder = (previousValue) => {
  let sum = 0;

  if (previousValue !== undefined) {
    sum = previousValue;
  }

  return (...args) => {
    for (const arg of args) {
      sum += arg;
    }

    return sum;
  };
};