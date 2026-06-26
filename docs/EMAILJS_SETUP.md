# EmailJS Setup Guide for Contact Form

This guide will help you set up your contact form to send emails directly to your inbox using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. **Log in to EmailJS dashboard**
2. Go to "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider:
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - **Custom SMTP**: Use any email provider
5. Follow the authentication steps for your chosen provider
6. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Choose "Blank Template"
4. Configure your template:

### Template Variables
Use these variables in your template (they will be automatically filled from the form):
- `{{user_name}}` - User's name from the form
- `{{user_email}}` - User's email from the form
- `{{user_message}}` - User's message from the form

### Example Template:
```
Subject: New Contact Form Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Message: {{user_message}}

---
This message was sent from your portfolio website contact form.
```

5. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in the left sidebar
2. Copy your **Public Key**

## Step 5: Update Your Contact Component

Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your actual Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'       // Replace with your actual Public Key
);
```

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting

### Common Issues:

1. **"Failed to send message" error:**
   - Check that all IDs are correct
   - Ensure your email service is properly connected
   - Check browser console for detailed error messages

2. **Emails not arriving:**
   - Check spam/junk folder
   - Verify email service connection in EmailJS dashboard
   - Check if your email provider has any restrictions

3. **Form not submitting:**
   - Ensure all required fields are filled
   - Check browser console for JavaScript errors

### Security Notes:

- Your public key is safe to expose in frontend code
- EmailJS handles the backend email sending securely
- No sensitive credentials are stored in your frontend code

## Alternative: Using Environment Variables

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update your Contact component:
```typescript
const result = await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current!,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

3. Add `.env` to your `.gitignore` file

## Support

If you encounter issues:
- Check [EmailJS Documentation](https://www.emailjs.com/docs/)
- Visit [EmailJS Community](https://community.emailjs.com/)
- Contact EmailJS support

---

**Note:** The free tier of EmailJS allows 200 emails per month. For higher volumes, consider upgrading to a paid plan.
