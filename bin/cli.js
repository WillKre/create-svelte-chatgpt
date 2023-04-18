#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const { prompt } = require('enquirer');
const fs = require('fs');
const path = require('path');

async function main() {
	const response = await prompt([
		{
			type: 'input',
			name: 'projectName',
			message: 'What is your project name?',
			initial: 'my-svelte-chatgpt'
		}
	]);

	const projectPath = path.resolve(process.cwd(), response.projectName);

	if (!fs.existsSync(projectPath)) {
		fs.mkdirSync(projectPath);
	} else {
		console.error(`Error: Directory ${response.projectName} already exists.`);
		process.exit(1);
	}

	console.log('Creating a new app in', projectPath);

	const templateRepoURL = 'https://github.com/WillKre/create-svelte-chatgpt.git';

	try {
		execSync(`git clone --depth 1 ${templateRepoURL} ${projectPath}`, { stdio: 'inherit' });

		process.chdir(projectPath);
		execSync('git remote remove origin', { stdio: 'inherit' });
		execSync('rm -rf .git', { stdio: 'inherit' });

		execSync('npm install', { stdio: 'inherit' });

		console.log(`Success! Created ${response.projectName} at ${projectPath}`);
		console.log('Inside that directory, you can run several commands:');
		console.log('  npm run dev    Starts the development server.');
		console.log('  npm run build  Builds the app for production.');
		console.log('  npm run preview  Runs the built app in production mode.');
	} catch (error) {
		console.error('Error:', error);
	}
}

main();
