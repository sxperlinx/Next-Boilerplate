import { execSync } from 'node:child_process';
import { select } from '@inquirer/prompts';

/**
 *
 * @param {{message: string, command: string }[]} tasks
 * @returns {void} void
 */
function run(tasks) {
	try {
		tasks.forEach((task) => {
			console.log(`::> ${task.message}`);
			execSync(task.command, { stdio: 'inherit' });
		});
	} catch (err) {
		console.error(`-:> ${err} at ${tasks.values}`);
		process.exit(1);
	}
}

/**
 * @param {{ name: string, fn: Promise<void> }}
 * @returns void
 */
function execute({ name, fn }) {
	console.log(`::: ${name} :::`);
	fn();
}

async function script_run(tasks) {
	tasks.forEach((task, index) => {
		task.value = index;
	});

	if (tasks.length === 1) {
		execute(tasks[0]);
		return;
	}

	const taskChoice = await select({
		message: ':: What would you like to do?',
		choices: tasks,
	});

	execute(tasks[taskChoice]);
}

export { run, auth, orms, dockerFiles, execute, script_run };
