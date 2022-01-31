import {
    basicOp,
    stringMerge,
    createPhoneNumber,
    getOperands,
    getTime,
    isPalindrome,
    swapCase,
    countOccurrences,
    vowelCount,
    alphabetPosition } from './index';


// 1



describe('basicOp', function () {
    test('should return 4 when passed +, 2, 2', function () {
        const result = basicOp('+', 2, 2)
        expect(result).toBe(4)
    })

    test('should return -3 when passed -, 15, 18', function () {
        const result = basicOp('-', 15, 18)
        expect(result).toBe(-3)
    })

    test('should return 25 when passed *, 5, 5', function () {
        const result = basicOp('*', 5, 5)
        expect(result).toBe(25)
    })

    test('should return 7 when passed /, 49, 7', function () {
        const result = basicOp('/', 49, 7)
        expect(result).toBe(7)
    })

    test('should return 0 when passed any, 45, 45', function () {
        const result = basicOp('something else', 45, 45)
        expect(result).toBe(0)
    })
})

// 2


describe('stringMerge', function () {
    test('should return held when passed "hello", "world", "l"', function () {
        const result = stringMerge("hello", "world", "l")
        expect(result).toBe('held')
    })

    test('should return codinywhere when passed "coding", "anywhere", "n"', function () {
        const result = stringMerge("coding", "anywhere", "n")
        expect(result).toBe('codinywhere')
    })

    test('should return jasamson when passed "jason", "samson", "s"', function () {
        const result = stringMerge("jason", "samson", "s")
        expect(result).toBe('jasamson')
    })

    test('should return wondeople when passed "wonderful", "people", "e"', function () {
        const result = stringMerge("wonderful", "people", "e")
        expect(result).toBe('wondeople')
    })
})



// 3


describe('createPhoneNumber', function () {
    test('should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', function () {
        const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
        expect(result).toBe('(123) 456-7890')
    })
})



// 4

describe('getOperands', function () {
    test('should return "a: 1, b: 2" when passed "1 + 2"', function () {
        const numb = getOperands('1 + 2')
        expect(numb).toBe('a:1b:2')
    })

    test('should return "a: 1.2, b: -3.4" when passed "1.2 * -3.4"', function () {
        const numb = getOperands('1.2 * -3.4')
        expect(numb).toBe('a:1.2b:-3.4')
    })

    test('should return "a: 1, b: 2" when passed "1 - 2"', function () {
        const numb = getOperands('1 - 2')
        expect(numb).toBe('a:1b:2')
    })

    test('should return "a: 1, b: -2" when passed "1 - -2"', function () {
        const numb = getOperands('1 - -2')
        expect(numb).toBe('a:1b:-2')
    })
})

// 5


describe('getTime', function () {
    test('should return "09:00" when passed "Breakfast at 09:00"', function () {
        const result = getTime('Breakfast at 09:00')
        expect(result).toBe('09:00')
    })

    test('should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', function () {
        const result = getTime('Breakfast at 09:60, Dinner at 21:00')
        expect(result).toBe('21:00')
    })

    test('should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', function () {
        const result = getTime('Breakfast at 09:59, Dinner at 21:00')
        expect(result).toBe('09:59')
    })
    test('should return empty string when time is wrong', function () {
        const result = getTime('When pass string Breakfast at 09:69, Dinner at 37:98, then get empty string')
        expect(result).toBe('')
    })
    })


// 6



describe('isPalindrome', function () {
    test('should return true when passed "Eva, can I see bees in a cave?"', function () {
        const result = isPalindrome('Eva, can I see bees in a cave?')
        expect(result).toBe(true)
    })

    test('should return false when passed "race a car"', function () {
        const result = isPalindrome('race a car')
        expect(result).toBe(false)
    })

    test('should return true when passed "Was it a cat I saw?"', function () {
        const result = isPalindrome('Was it a cat I saw?')
        expect(result).toBe(true)
    })
})

// // 7



describe('swapCase', function () {
    test('should return AbC when passed "aBc"', function () {
        const result = swapCase('aBc')
        expect(result).toBe('AbC')
    })

    test('should return gOOd when passed "GooD"', function () {
        const result = swapCase('GooD')
        expect(result).toBe('gOOd')
    })

    test('should return HELLO when passed "hello"', function () {
        const result = swapCase('hello')
        expect(result).toBe('HELLO')
    })
})




// 8

describe('countOccurrences', function () {
    test('should return 2 when passed "ability", "i"', function () {
        const result = countOccurrences('ability', 'i')
        expect(result).toBe(2)
    })

    test('should return 1 when passed "ability", "i"', function () {
        const result = countOccurrences('abc', 'a')
        expect(result).toBe(1)
    })

    test('should return 1 when passed "ability", "i"', function () {
        const result = countOccurrences('ABC', 'a')
        expect(result).toBe(1)
    })
})

// 9


describe('vowelCount', function() {
    test('should return count of vowel in word',
        function () {
            const result = vowelCount('abracadabra')
            expect(result).toBe(5)
        })
        test('should return count of vowel in word',
        function () {
            const result = vowelCount('letter')
            expect(result).toBe(2)
        })
        test('should return count of vowel in word',
        function () {
            const result = vowelCount('toy')
            expect(result).toBe(1)
        })
        test('should return count of vowel in word',
        function () {
            const result = vowelCount('555')
            expect(result).toBe(0)
        })
})

//  10

describe('alphabetPosition', function () {
    test('should return 5 when passed "The sunset sets at twelve o`clock."', function () {
        const result = alphabetPosition('The sunset sets at twelve o`clock.')
        expect(result).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
    })
})