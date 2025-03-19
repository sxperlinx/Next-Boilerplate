/* eslint-disable no-console */
import { execSync } from 'node:child_process';

function runContainer(env = 'development') {
	try {
		console.log(`::: Running in ${env} :::`);
		console.log(`::> Process cwd: ${process.cwd()}`);

		const composeFile = env === 'production' ? 'compose.prod.yml' : 'compose.dev.yml';
		const networks = ['front-tier', 'back-tier'];

		execSync('docker network prune --force', { stdio: 'inherit' });

		if (env === 'development') {
			networks.forEach((network) => {
				console.log(`::> docker network create ${network}`);
				execSync(`docker network create ${network}`, { stdio: 'inherit' });
			});
		}

		console.log(`::> docker compose -f ${composeFile} up`);
		execSync(`docker compose -f ${composeFile} up`, { stdio: 'inherit' });
	} catch (err) {
		console.error('-:> ', err);
		process.exit(1);
	}
}

export { runContainer };
