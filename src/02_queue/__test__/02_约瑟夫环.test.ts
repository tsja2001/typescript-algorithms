import { lastRemaining } from '../example/02_约瑟夫环';
import { Queue } from '../lib/01_创建queue';

describe('约瑟夫环', () => {
	it('约瑟夫环', () => {
		expect(lastRemaining(5, 3)).toBe(3)
		expect(lastRemaining(10, 17)).toBe(2)
	})
});
