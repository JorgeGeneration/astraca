import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { companyName, nif, contact, service, description } = request.body;

  if (!companyName || !contact || !description) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Astracã Site <onboarding@resend.dev>', // Use verified domain in production
      to: [process.env.QUOTE_TO_EMAIL || 'geral@astraca.ao'],
      subject: `Novo Pedido de Cotação: ${companyName}`,
      html: `
        <h1>Novo Pedido de Cotação</h1>
        <p><strong>Empresa:</strong> ${companyName}</p>
        <p><strong>NIF:</strong> ${nif}</p>
        <p><strong>Contacto:</strong> ${contact}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <hr />
        <h3>Descrição do Pedido:</h3>
        <p>${description.replace(/\n/g, '<br>')}</p>
      `,
    });

    return response.status(200).json(data);
  } catch (error) {
    console.error('Resend Error:', error);
    return response.status(500).json({ error: 'Failed to send email' });
  }
}
