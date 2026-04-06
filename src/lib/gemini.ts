const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

if (!N8N_WEBHOOK_URL) {
  console.error('VITE_N8N_WEBHOOK_URL is missing in .env file');
}

export async function sendMessageToGemini(history: { role: 'user' | 'model'; parts: string }[], newMessage: string) {
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: newMessage,
        history: history
      }),
    });

    if (!response.ok) {
        throw new Error(`n8n webhook error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.response || data.output || 'Desculpe, não consegui obter uma resposta.';

  } catch (error) {
    console.error('Error calling n8n webhook:', error);
    return 'Desculpe, serviço temporariamente indisponível. Tente novamente mais tarde.';
  }
}
