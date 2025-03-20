#!/usr/bin/env node
import { script_run } from './util.mjs';

async function h() {
	console.log('Chose h');
}

async function f() {
	console.log('Chose f');
}

async function main() {
	const tasks = [
		{
			name: 'Run h',
			fn: h,
		},
		{
			name: 'Run f',
			fn: f,
		},
	];

	await script_run(tasks);
}

main();
