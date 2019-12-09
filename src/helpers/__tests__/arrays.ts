import { default as Arrays } from '../arrays';

describe('helpers/arrays', () => {
	describe('unique', () => {
		it('on plain arrays', () => {
			let valuesResultExpected = ['a', 'b', 'c'];
			let values = Arrays.unique(['a', 'a', 'b', 'b', 'b', 'c', 'c']);
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});

		it('on object arrays', () => {
			let valuesResultExpected = [{ att: 'a' }, { att: 'b' }, { att: 'c' }];
			let values = Arrays.unique(
				[{ att: 'a' }, { att: 'a' }, { att: 'b' }, { att: 'b' }, { att: 'c' }, { att: 'c' }],
				'att'
			);
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});
	});

	describe('intersection', () => {
		it('on plain arrays', () => {
			let valuesA = ['a', 'b', 'c', 'd'];
			let valuesB = ['c', 'd', 'e', 'f'];
			let valuesResultExpected = ['c', 'd'];

			let values = Arrays.intersection(valuesA, valuesB);
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});

		it('on object arrays', () => {
			let valuesA = [{ att: 'a' }, { att: 'b' }, { att: 'c' }, { att: 'd' }];
			let valuesB = [{ att: 'c' }, { att: 'd' }, { att: 'e' }, { att: 'f' }];
			let valuesResultExpected = [{ att: 'c' }, { att: 'd' }];

			let values = Arrays.intersection(valuesA, valuesB, 'att');
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});
	});

	describe('contains', () => {
		describe('on plain arrays', () => {
			const values = ['a', 'b', 'c', 'd', 'e', 'f'];

			it('should contain a value', () => {
				const check = 'c';
				expect(Arrays.contains(values, check)).toBeTruthy();
			});

			it('should contain a set of values', () => {
				const check = ['c', 'd'];
				expect(Arrays.contains(values, check)).toBeTruthy();
			});
		});

		describe('on object arrays', () => {
			const values = [{ att: 'a' }, { att: 'b' }, { att: 'c' }, { att: 'd' }, { att: 'e' }, { att: 'f' }];

			it('should contain a value', () => {
				const check = { att: 'c' };
				expect(Arrays.contains(values, check, 'att')).toBeTruthy();
			});

			it('should contain a set of values', () => {
				const check = [{ att: 'c' }, { att: 'd' }];
				expect(Arrays.contains(values, check, 'att')).toBeTruthy();
			});
		});
	});

	describe('difference', () => {
		it('on plain arrays', () => {
			let valuesA = ['a', 'b', 'c', 'd'];
			let valuesB = ['c', 'd', 'e', 'f'];
			let valuesResultExpected = ['a', 'b'];

			let values = Arrays.difference(valuesA, valuesB);
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});

		it('on object arrays', () => {
			let valuesA = [{ att: 'a' }, { att: 'b' }, { att: 'c' }, { att: 'd' }];
			let valuesB = [{ att: 'c' }, { att: 'd' }, { att: 'e' }, { att: 'f' }];
			let valuesResultExpected = [{ att: 'a' }, { att: 'b' }];

			let values = Arrays.difference(valuesA, valuesB, 'att');
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});
	});

	describe('symmetricDifference', () => {
		it('on plain arrays', () => {
			let valuesA = ['a', 'b', 'c', 'd'];
			let valuesB = ['c', 'd', 'e', 'f'];
			let valuesResultExpected = ['a', 'b', 'e', 'f'];

			let values = Arrays.symmetricDifference(valuesA, valuesB);
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});

		it('on object arrays', () => {
			let valuesA = [{ att: 'a' }, { att: 'b' }, { att: 'c' }, { att: 'd' }];
			let valuesB = [{ att: 'c' }, { att: 'd' }, { att: 'e' }, { att: 'f' }];
			let valuesResultExpected = [{ att: 'a' }, { att: 'b' }, { att: 'e' }, { att: 'f' }];

			let values = Arrays.symmetricDifference(valuesA, valuesB, 'att');
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});
	});

	describe('find', () => {
		it('on plain arrays', () => {
			let values = ['a', 'b', 'c'];

			expect(Arrays.find(values, 'a')).toBeDefined();
			expect(Arrays.find(values, 'b')).toBeDefined();
			expect(Arrays.find(values, 'c')).toBeDefined();
		});

		it('on object arrays', () => {
			let values = [{ att: 'a' }, { att: 'b' }, { att: 'c' }];

			expect(Arrays.find(values, 'a', 'att')).toBeDefined();
			expect(Arrays.find(values, 'b', 'att')).toBeDefined();
			expect(Arrays.find(values, 'c', 'att')).toBeDefined();
		});
	});

	describe('merge', () => {
		it('on plain arrays', () => {
			let valuesA = ['a', 'b', 'c', 'd'];
			let valuesB = ['c', 'd', 'e', 'f'];
			let valuesResultExpected = ['a', 'b', 'c', 'd', 'e', 'f'];

			let values = Arrays.merge(valuesA, valuesB);
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});

		it('on object arrays', () => {
			let valuesA = [{ att: 'a' }, { att: 'b' }, { att: 'c' }, { att: 'd' }];
			let valuesB = [{ att: 'c' }, { att: 'd' }, { att: 'e' }, { att: 'f' }];
			let valuesResultExpected = [
				{ att: 'a' },
				{ att: 'b' },
				{ att: 'c' },
				{ att: 'd' },
				{ att: 'e' },
				{ att: 'f' },
			];

			let values = Arrays.merge(valuesA, valuesB, 'att');
			expect(values).toHaveLength(valuesResultExpected.length);
			expect(values).toMatchObject(valuesResultExpected);
		});
	});
});
