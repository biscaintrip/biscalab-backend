export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { plan, success_url, cancel_url } = req.body;
    const priceId = plan === 'annual'
      ? 'price_1TOWjVG2TlrDnzLKFhlobHI1'
      : 'price_1TOWiGG2TlrDnzLKKntqKffm';
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'mode': 'subscription', 'line_items[0][price]': priceId, 'line_items[0][quantity]': '1', 'success_url': success_url || 'https://biscalab.com', 'cancel_url': cancel_url || 'https://biscalab.com', 'allow_promotion_codes': 'true' })
    });
    const session = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: session.error?.message || 'Errore Stripe' });
    return res.status(200).json({ url: session.url });
  } catch (err) {
    return res.status(500).json({ error: 'Errore interno del server' });
  }
}
