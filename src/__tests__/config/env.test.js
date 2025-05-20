import { describe } from 'node:test';
import '@testing-library/jest-dom';
import Env from '@/config/env';

describe('Env.get', () => {
	const strVal = 'EnvGetTestString';
	const defaultStrVal = 'defaultString';

	beforeEach(() => {
		delete process.env.ENV_GET_TEST_STRING;
		process.env.ENV_GET_TEST_STRING = strVal;
	});

	// Tests for simply getting the environment variables
	it('should return "EnvGetTestString"', () => {
		const result = Env.get('ENV_GET_TEST_STRING');
		expect(result).toBe(strVal);
	});

	// Tests for getting the environment variables with a default value
	it('should return the default value "defaultString" if the variable is not set', () => {
		const result = Env.get('NON_EXISTENT_VAR', defaultStrVal);
		expect(result).toBe(defaultStrVal);
	});

	it('should return the actual value "EnvGetTestString" if the variable is set', () => {
		const result = Env.get('ENV_GET_TEST_STRING', defaultStrVal);
		expect(result).toBe(strVal);
	});
});

describe('Env.set', () => {
	const strVal = 'EnvSetTestString';
	const overrideStrVal = 'EnvSetOverrideTestString';

	beforeEach(() => {
		delete process.env.ENV_SET_TEST_STRING;
		process.env.ENV_SET_TEST_OVERRIDE_STRING = strVal;
	});

	// Tests for setting the environment variables
	it('should set the environment variable ENV_SET_TEST_STRING to "EnvSetTestString"', () => {
		Env.set('ENV_SET_TEST_STRING', strVal);
		expect(process.env.ENV_SET_TEST_STRING).toBe(strVal);
	});

	// Tests for setting the environment variables with override
	it('should override the environment variable ENV_SET_TEST_OVERRIDE_STRING to "EnvSetOverrideTestString"', () => {
		Env.set('ENV_SET_TEST_OVERRIDE_STRING', overrideStrVal, { override: true });
		expect(process.env.ENV_SET_TEST_OVERRIDE_STRING).toBe(overrideStrVal);
	});

	// Tests for not overriding the environment variables
	it('should not override the environment variable ENV_SET_TEST_OVERRIDE_STRING if override is false', () => {
		Env.set('ENV_SET_TEST_OVERRIDE_STRING', strVal, { override: false });
		expect(process.env.ENV_SET_TEST_OVERRIDE_STRING).toBe(strVal);
	});
	it('should not override the environment variable ENV_SET_TEST_OVERRIDE_STRING if override is not provided', () => {
		Env.set('ENV_SET_TEST_OVERRIDE_STRING', strVal);
		expect(process.env.ENV_SET_TEST_OVERRIDE_STRING).toBe(strVal);
	});
});
