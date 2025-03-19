export default class Cors {
	public static readonly allowedOrigins = [
		'https://effective-yodel-vj774v4vx7jhxgrq-3000.app.github.dev',
		'*',
	]; // Change to your domain
	public static readonly corsOptions = {
		'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Allow-Credentials': 'true',
		'Access-Control-Max-Age': '86400', // 24 hours
	};
	// Add more CORS options here.
}
