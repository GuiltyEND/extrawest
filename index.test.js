import { calculateRentalCost,
        openOrSenior,
        isPrime,
        moveZeros,
        reverseWords,
        createUrl,
        invertColor,
		makeArmy,
		createPrevArgSaver,
		createAdder} from './index';

describe('calculateRentalCost',() =>     {
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

describe('openOrSenior', () => {
	test('should return [Open, Senior, Open, Senior] when passed [[31, 10],[55,23],[20, 0],[41, 16]]', () => {
		const result = openOrSenior([[31, 10], [55, 23], [20, 0], [41, 16]]);

		expect(result).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
	});

	test('should return [Open, Open, Open, Open] when passed [[34, 11],[55,7],[39, 16],[38, 14]]', () => {
		const result = openOrSenior([[34, 11], [55, 7], [39, 16], [38, 14]]);

		expect(result).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
	});
});


describe('isPrime', () => {
	test('should return true when passed 2', () => {
		const result = isPrime(2);

		expect(result).toBe(true);
	});

	test('should return true when passed 73', () => {
		const result = isPrime(73);

		expect(result).toBe(true);
	});

	test('should return false when passed 1', () => {
		const result = isPrime(1);

		expect(result).toBe(false);
	});

	test('should return false when passed 75', () => {
		const result = isPrime(75);

		expect(result).toBe(false);
	});

	test('should return false when passed -1', () => {
		const result = isPrime(-1);

		expect(result).toBe(false);
	});
});



describe('moveZeros', () => {
	test('should return [false,1,1,2,1,3,"a",0,0] when passed [false,1,0,1,2,0,1,3,"a"]', () => {
		const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);

		expect(result).toStrictEqual([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
	});
});


describe('reverseWords', () => {
	test('should return "elbuod  secaps" when passed "double  spaces"', () => {
		const result = reverseWords('double  spaces');

		expect(result).toBe('elbuod  secaps');
	});

	test('should return 100 when passed "The quick brown fox jumps over the lazy dog."', () => {
		const result = reverseWords('The quick brown fox jumps over the lazy dog.');

		expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
	});
});


describe('createUrl', () => {
	test('should return /api/0 when passed /api/{id}, {id: 0}', () => {
		const result = createUrl('/api/{id}', { id: 0 });

		expect(result).toBe('/api/0');
	});

	test('should return /api/undefined when passed /api/{id}, {name: Petya}', () => {
		const result = createUrl('/api/{id}', { name: 'Petya' });

		expect(result).toBe('/api/undefined');
	});

	test('should return /api/items/0 when passed /api/{list}/{id}, {list: items, id: 0}', () => {
		const result = createUrl('/api/{list}/{id}', {
			list: 'items', id: 0,
		});

		expect(result).toBe('/api/items/0');
	});
});


describe('invertColor', () => {
	test('should return #ffffff when passed #000000', () => {
		const result = invertColor('#000000');

		expect(result).toBe('#ffffff');
	});

	test('should return #221155 when passed #DDEEAA', () => {
		const result = invertColor('#DDEEAA');

		expect(result).toBe('#221155');
	});

	test('should return #FEDCBA when passed #012345', () => {
		const result = invertColor('#012345');

		expect(result).toBe('#fedcba');
	});
});

// 11
describe('makeArmy', () => {
	const shooters = makeArmy(10);

	test('should return it`s position in array', () => {
		const result = shooters[0]();

		expect(result).toBe(0);
	});

	test('should return it`s position in array', () => {
		const result = shooters[5]();

		expect(result).toBe(5);
	});

	test('should return it`s position in array', () => {
		const result = shooters[9]();

		expect(result).toBe(9);
	});

});

describe('createPrevArgSaver', () => {

	const argSaver = createPrevArgSaver();
  
	test('should return first argument from the previous call', () => {
	  const result = argSaver(123);
  
	  expect(result).toBe(undefined);
	});
  
	test('should return first argument from the previous call', () => {
  
	  argSaver(123);
  
	  const result = argSaver(456);
  
	  expect(result).toBe(123);
	});
  
	test('should return first argument from the previous call', () => {
  
	  argSaver(123);
	  argSaver(456);
  
	  const result = argSaver(100, 200, 300);
  
	  expect(result).toBe(456);
	});
  
	test('should return first argument from the previous call', () => {
  
	  argSaver(123);
	  argSaver(456);
	  argSaver(100, 200, 300);
  
	  const result = argSaver();
  
	  expect(result).toBe(100);
	});
  
	test('should return first argument from the previous call', () => {
  
	  argSaver(123);
	  argSaver(456);
	  argSaver(100, 200, 300);
	  argSaver();
  
	  const result = argSaver(741);
  
	  expect(result).toBe(undefined);
	});
  
  });

  describe('createAdder', () => {
	const adder1 = createAdder();
	const adder2 = createAdder(100);

	test('should return 0  ', () => {
		const result = adder1();

		expect(result).toBe(0);
	});

	test('should return 30  ', () => {

		adder1();

		const result = adder1(10, 20);

		expect(result).toBe(30);
	});

	test('should return 100  ', () => {

		adder1();

		const result = adder1(30, 40);

		expect(result).toBe(100);
	});

	test('should return 110  ', () => {

		const result = adder2(10);

		expect(result).toBe(110);
	});

	test('should return 200  ', () => {

		const result = adder2(20, 30, 40);

		expect(result).toBe(200);
	});

	test('should return 200  ', () => {

		const result = adder2();

		expect(result).toBe(200);
	});

});