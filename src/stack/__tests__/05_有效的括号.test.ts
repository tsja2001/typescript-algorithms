import { isValid } from '../05_有效的括号';

describe('05_有效的括号', () => {
	it('05_有效的括号', () => {
		expect(isValid('({})[()]')).toBe(true)
		expect(isValid('{({})[()]}{}[]')).toBe(true)
		expect(isValid('{({})[()]}{[}[]]')).toBe(false)
	})
})
