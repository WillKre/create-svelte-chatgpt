#!/usr/bin/env node

import { execSync } from 'child_process';
import enquirer from 'enquirer';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

async function main() {
	const response = await enquirer.prompt([
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

		console.log(chalk.green(`\nSuccess! Created ${response.projectName} at ${projectPath}`));
		console.log('\nTo get started, run the following commands:');
		console.log(chalk.cyan(`  cd ${response.projectName}`));
		console.log(chalk.cyan('  npm run dev'), '   Starts the development server. 🚀');
		console.log(chalk.cyan('  npm run build'), ' Builds the app for production. 🏗️');
		console.log(chalk.cyan('  npm run preview'), ' Runs the built app in production mode. 🌐');
	} catch (error) {
		console.error('Error:', error);
	}
}

main();
