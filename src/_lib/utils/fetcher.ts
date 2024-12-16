/* eslint-disable no-unused-vars */
import HttpMethod from 'lib/enums/EHttpMethod';

// Function overloads
export async function fetcher(url: string): Promise<unknown>;
export async function fetcher(url: string, httpMethod: HttpMethod): Promise<unknown>;
export async function fetcher(url: string, headers: HeadersInit): Promise<unknown>;
export async function fetcher(url: string, httpMethod: HttpMethod, headers: HeadersInit): Promise<unknown>;
export async function fetcher(url: string, httpMethod: HttpMethod, headers: HeadersInit, body: unknown): Promise<unknown>;

// Implementation
export async function fetcher(
    url: string,
    arg1?: HttpMethod | HeadersInit,
    arg2?: HeadersInit,
    arg3?: unknown,
): Promise<unknown> {
    const options: RequestInit = {};

    if (typeof arg1 === 'string') {
        options.method = arg1;
        if (arg2) {
            options.headers = arg2;
        }
        if (arg3) {
            options.body = JSON.stringify(arg3);
        }
    } else if (arg1) {
        options.headers = arg1;
        if (arg2) {
            options.body = JSON.stringify(arg2);
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error(data.message || response.statusText);
    }
    
    return data;
}