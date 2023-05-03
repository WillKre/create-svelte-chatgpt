export function formatMessage(message: string) {
	let formattedMessage = '';

	const codeBlockRegex = /```([^`]+?)```/g;
	const inlineCodeRegex = /`([^`]+?)`/g;
	const hasCodeBlock = codeBlockRegex.test(message);
	const hasInlineCode = inlineCodeRegex.test(message);

	formattedMessage = message.replace(/\n/g, '<br>');

	if (hasCodeBlock) {
		formattedMessage = formattedMessage.replace(
			codeBlockRegex,
			'<pre style="background-color: #f0f0f0; border-radius: 4px; margin-top: 8px; margin-bottom: 8px; font-size: 12px; white-space: pre-wrap; font-family: monospace; overflow-x: auto;"><code>$1</code></pre>'
		);
	}

	if (hasInlineCode) {
		formattedMessage = formattedMessage.replace(
			inlineCodeRegex,
			'<code style="background-color: #f0f0f0; border-radius: 4px; padding: 2px 4px; font-family: monospace;">$1</code>'
		);
	}

	return formattedMessage;
}
