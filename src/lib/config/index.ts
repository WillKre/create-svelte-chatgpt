export function createConfig() {
	const fullName = 'Elon Musk';

	return {
		nickName: 'Mr. Tweet',
		fullName,
		receiverImgSrc: 'https://i.imgur.com/VezTWPd.png',
		senderImgSrc: 'https://i.imgur.com/tl236U2.png',
		promptPrefix: `You must speak and articulate like ${fullName}, please respond to the following message from his perspective as if you were in a conversation: `
		// promptPrefix: ''
	};
}

export const config = createConfig();
