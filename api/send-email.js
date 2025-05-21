const { Resend } = require('resend');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        console.error('Invalid method:', req.method);
        return res.status(405).json({ error: 'Method not allowed' });
    }

    let body;
    try {
        // If req.body is a Buffer, convert it to a string
        if (Buffer.isBuffer(req.body)) {
            body = JSON.parse(req.body.toString());
        } else if (typeof req.body === 'string') {
            body = JSON.parse(req.body);
        } else {
            body = req.body; // If it's already an object (parsed by Vercel)
        }
    } catch (error) {
        console.error('JSON parse error:', error.message);
        return res.status(400).json({ error: 'Invalid JSON in request body' });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
        console.error('Missing fields:', { name, email, message });
        return res.status(400).json({ error: 'Missing required fields: name, email, or message' });
    }

    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY not found');
        return res.status(500).json({ error: 'Resend API key is not configured' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'akashboora143@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Resend error:', error.message, error.stack);
        return res.status(500).json({ error: `Failed to send email: ${error.message}` });
    }
};