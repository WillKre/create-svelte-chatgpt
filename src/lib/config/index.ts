import receiverImg from '../images/receiver.png';
import senderImg from '../images/sender.png';

export function createConfig() {
	return {
		nickName: 'Mr. Robot',
		fullName: 'ChatGPT',
		receiverImgSrc: receiverImg,
		senderImgSrc: senderImg,
		promptPrefix: '' // Eg. "Speak like Elon Musk: \n\n"
	};
}

export const config = createConfig();
