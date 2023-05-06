import { oraPromise } from 'ora';
import { ChatGPTAPI, ChatGPTError } from 'chatgpt';
import { error, type Actions } from '@sveltejs/kit';
import { config } from '$lib/config';
import { OPENAI_API_KEY } from '$env/static/private';
import { getMessageStore } from '$lib/utils/getMessageStore';

// Defined outside of the actions so it's not re-created on every request
const messageStore = getMessageStore();

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const message = formData.get('message');
    const parentMessageId = formData.get('parentMessageId');

    const api = new ChatGPTAPI({
      apiKey: OPENAI_API_KEY,
      messageStore
    });

    const prompt = `${config.promptPrefix}${message}`;

    try {
      const chatMessage = await oraPromise(
        api.sendMessage(prompt, {
          parentMessageId: `${parentMessageId}`
        })
      );

      return chatMessage;
    } catch (err) {
      if (err instanceof ChatGPTError) {
        throw error(err.statusCode || 400, err.message);
      }
    }
  }
};
