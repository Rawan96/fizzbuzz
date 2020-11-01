var fizzbuzz = require('./index.js');

test('Testing Jest is working', function() {
	expect(2 + 2).toBe(4);
});

describe('Testing fizzbuzz return value', () => {
	test('Should return number when the value is not a multiple of 3 or 5', () => {
		var actual = fizzbuzz(2);
		var expected = 2;
		expect(actual).toBe(expected);
	});
});

describe('Testing fizzbuzz return value', () => {
	test('Should return fizz when the value is a multiple of 3' , () => {
		var actual = fizzbuzz(3);
		var expected = 'fizz';
		expect(actual).toBe(expected);
	});
});

describe('Testing fizzbuzz return value', () => {
	test('Should return buzz when the value is a multiple of 5', () => {
		var actual = fizzbuzz(5);
		var expected = 'buzz';
		expect(actual).toBe(expected);
	});
});


describe('Testing fizzbuzz return value', () => {
	test('Should return fizzbuzz when the value is  a multiple of 3 and 5', () => {
		var actual = fizzbuzz(15);
		var expected = 'fizzbuzz';
		expect(actual).toBe(expected);
	});
});

