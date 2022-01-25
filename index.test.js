
// 1


// import { basicOp } from './index'
// describe('basicOp', function () {
//     test('should return 4 when passed +, 2, 2', function () {
//         const result = basicOp('+', 2, 2)
//         expect(result).toBe(4)
//     })

//     test('should return -3 when passed -, 15, 18', function () {
//         const result = basicOp('-', 15, 18)
//         expect(result).toBe(-3)
//     })

//     test('should return 25 when passed *, 5, 5', function () {
//         const result = basicOp('*', 5, 5)
//         expect(result).toBe(25)
//     })

//     test('should return 7 when passed /, 49, 7', function () {
//         const result = basicOp('/', 49, 7)
//         expect(result).toBe(7)
//     })

//     test('should return 0 when passed any, 45, 45', function () {
//         const result = basicOp('something else', 45, 45)
//         expect(result).toBe(0)
//     })
// })

// 2


// import { stringMerge } from './index'
// describe('stringMerge', function () {
//     test('should return held when passed "hello", "world", "l"', function () {
//         const result = stringMerge("hello", "world", "l")
//         expect(result).toBe('held')
//     })

//     test('should return codinywhere when passed "coding", "anywhere", "n"', function () {
//         const result = stringMerge("coding", "anywhere", "n")
//         expect(result).toBe('codinywhere')
//     })

//     test('should return jasamson when passed "jason", "samson", "s"', function () {
//         const result = stringMerge("jason", "samson", "s")
//         expect(result).toBe('jasamson')
//     })

//     test('should return wondeople when passed "wonderful", "people", "e"', function () {
//         const result = stringMerge("wonderful", "people", "e")
//         expect(result).toBe('wondeople')
//     })
// })


// 3

// import { createPhoneNumber } from './index'
// describe('createPhoneNumber', function () {
//     test('should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', function () {
//         const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
//         expect(result).toBe('(123) 456-7890')
//     })
// })



// 4



// 5

// import { getTime } from './index'
// describe('getTime', function () {
//     test('should return "09:00" when passed "Breakfast at 09:00"', function () {
//         const result = getTime('Breakfast at 09:00')
//         expect(result).toBe('09:00')
//     })

//     test('should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', function () {
//         const result = getTime('Breakfast at 09:60, Dinner at 21:00')
//         expect(result).toBe('21:00')
//     })

//     test('should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', function () {
//         const result = getTime('Breakfast at 09:59, Dinner at 21:00')
//         expect(result).toBe('09:59')
//     })
// })