export default class Env {
	public static get(key: string, defaultVal?: string): string {
		const val = process.env[key];

		if (!val) {
			if (!defaultVal) {
				throw new Error(`Required Environment variable ${key} is not defined`);
			} else {
				return defaultVal;
			}
		}

		return val;
	}

	/**
	 * Sets an environment variable if not already defined.
	 */
	public static set(
		key: string,
		value: string,
		override: boolean = false,
	): void {
		if (!process.env[key] || (process.env[key] && override)) {
			process.env[key] = value;
		}
	}

	public static readonly port = this.get('PORT', '3000');

	public static readonly nodeEnv = this.get('NODE_ENV', 'development');

	public static readonly isDev = this.nodeEnv === 'development';
	public static readonly isProd = this.nodeEnv === 'production';

	// public static readonly baseUrl = this.isDev
	// 	? 'http://localhost:3000'
	// 	: this.get('NEXT_PUBLIC_BASE_URL');
}
