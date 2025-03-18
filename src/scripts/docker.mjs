/* eslint-disable no-console */
import { execSync } from 'node:child_process';

function runContainer(env = 'development') {
	try {
		console.log(`::: Running in ${env} :::`);
		console.log(`::> Pwd: ${process.cwd()}`);

		const composeFile =
			env === 'production' ? 'compose.prod.yml' : 'compose.dev.yml';
		const network = env === 'production' ? 'web_net' : 'web_net_dev';

		execSync(`docker network rm ${network}`);
		console.log(`::> docker network create ${network}`);
		execSync(`docker network create ${network}`);
		execSync(`docker compose -f ${composeFile}`);
		console.log(`::> docker compose -f ${composeFile} up`);
	} catch (err) {
		console.error('Error running containers:', err);
		process.exit(1);
	}
}

export { runContainer };
