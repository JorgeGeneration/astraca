import { QuoteFormData } from '../types';

export const sendQuoteRequest = async (data: QuoteFormData) => {
    const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to send email');
    }

    return response.json();
};
