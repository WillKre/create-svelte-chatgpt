#!/usr/bin/env node

import { execSync } from 'child_process';
import enquirer from 'enquirer';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

async function main() {
	const response = await enquirer.prompt([
		{
			type: 'input',
			name: 'projectName',
			message: 'What is your project name?',
			initial: 'my-svelte-chatgpt',
		},
	]);

	const projectPath = path.resolve(process.cwd(), response.projectName);

	if (!fs.existsSync(projectPath)) {
		fs.mkdirSync(projectPath);
	} else {
		console.error(`Error: Directory ${response.projectName} already exists.`);
		process.exit(1);
	}

	console.log('Creating a new app in', projectPath);

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const templatePath = path.join(__dirname, '..', 'template');

	try {
		execSync(`cp -R ${templatePath}/. ${projectPath}`, { stdio: 'inherit' });
		process.chdir(projectPath);

		execSync('npm install', { stdio: 'inherit' });
		execSync('git init', { stdio: 'inherit' });
		execSync('git add -A', { stdio: 'inherit' });
		execSync('git commit -m "initial commit"', {
			stdio: 'inherit',
		});

		console.log(
			chalk.green(
				`\nSuccess! Created ${response.projectName} at ${projectPath}`,
			),
		);
		console.log('\nTo get started, run the following commands:');
		console.log(chalk.cyan(`  cd ${response.projectName}`));
		console.log(
			chalk.cyan('  npm run dev'),
			'   Starts the development server. 🚀',
		);
		console.log(
			chalk.cyan('  npm run build'),
			' Builds the app for production. 🏗️',
		);
		console.log(
			chalk.cyan('  npm run preview'),
			' Runs the built app in production mode. 🌐',
		);
	} catch (error) {
		console.error('Error:', error);
	}
}

main();
