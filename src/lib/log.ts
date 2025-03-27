'use server';
import { NextRequest } from 'next/server';
import fs from 'fs';

//! Can't use 'fs' in Edge Runtime
export default async function logRequest(
	req: Readonly<NextRequest>,
): Promise<void> {
	const logJson = 'logs/requests.json';
	const logFile = 'logs/requests.log';
	const { method, url } = req;
	const body = await req.json();

	const headers = req.headers.forEach((value, key) => {
		key = key.toLowerCase();

		if (key === 'cookie' || key === 'authorization') {
			value = 'hidden';
		}
		console.log(`::[${key}]: ${value}`);
	});

	const timestamp = new Date(Date.now()).toISOString();
	const log = `::> ${timestamp} ${method} ${url}\n::Headers::\n${headers}\n::Body::\n ${body}`;
	const jsonLog = {
		timestamp,
		method,
		url,
		body,
	};

	console.log(log);
	fs.appendFileSync(logFile, `${log}\n`);
	fs.appendFileSync(logJson, `${jsonLog},\n`);
}
