import { calculateRentalCost,
        openOrSenior,
        isPrime,
        moveZeros,
        reverseWords,
        invertColor } from './index';

describe('calculateRentalCost', function () {
    test('should return 80 when passed 2', function () {
        const result = calculateRentalCost(2)
        expect(result).toBe(80)
    })

    test('should return 100 when passed 3', function () {
        const result = calculateRentalCost(3)
        expect(result).toBe(100)
    })

    test('should return 230 when passed 7', function () {
        const result = calculateRentalCost(7)
        expect(result).toBe(230)
    })

    test('should return 0 when passed 0', function () {
        const result = calculateRentalCost(0)
        expect(result).toBe(0)
    })
})

