import { execSync } from 'node:child_process';

/**
 *
 * @param {{ msg: string, cmd: string }[]} tasks
 */
function run(tasks) {
	try {
		console.log('::: Running tasks :::');
		console.log(`::> Process cwd: ${process.cwd()}`);

		tasks.forEach(({ msg, cmd }) => {
			console.log(`::> ${msg}`);
			execSync(cmd, { stdio: 'inherit' });
		});
	} catch (err) {
		console.error('-:> ', err);
		process.exit(1);
	}
}

export { run };
