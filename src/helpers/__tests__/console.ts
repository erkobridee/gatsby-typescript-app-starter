describe('console', () => {
	describe('error', () => {
		beforeAll(() => {
			require('../console');
			global.console = { ...global.console, error: jest.fn() };
		});

		it('should be call', () => {
			const message = 'hello';
			console.error(message);
			expect(console.error).toBeCalledWith(message);

			console.error(message, 1, 2, 3);
			expect(console.error).toBeCalledWith(message, 1, 2, 3);
		});

		it('should not be called', () => {
			expect(console.error('[React Intl] Missing message: ???')).toBeUndefined();
			expect(console.error('[React Intl] Missing locale data for locale: ???')).toBeUndefined();
		});
	});

	describe('log', () => {
		const OLD_ENV = process.env;

		beforeEach(() => {
			jest.resetModules(); // this is important - it clears the cache
			process.env = { ...OLD_ENV };
			delete process.env.NODE_ENV;
		});

		afterEach(() => {
			process.env = OLD_ENV;
		});

		it('should not be called', () => {
			process.env.NODE_ENV = 'production';
			require('../console');
			expect(console.log()).toBeUndefined();
		});

		it('should call', () => {
			require('../console');
			global.console = { ...global.console, log: jest.fn() };
			const message = 'hello';
			console.log(message);
			expect(console.log).toBeCalledWith(message);
		});
	});
});

export {};
