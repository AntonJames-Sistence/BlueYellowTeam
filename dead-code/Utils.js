'use client'
// import nodemailer from 'nodemailer';

// Function to send a thank-you email to the customer
async function sendThankYouEmail(customerEmail) {
  try {
    // Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_LOGIN,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Define email content
    const mailOptions = {
      from: 'blue.yellow.foundation.d@gmail.com',
      to: customerEmail,
      subject: 'Thank You for Your Purchase!',
      text: 'Thank you for your purchase. We appreciate your business!',
      // You can also use HTML content for a more styled email:
      // html: '<p>Thank you for your purchase. We appreciate your business!</p>',
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ', info.messageId);
    return info.messageId;
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Error sending email');
  }
}

// Export the function to use it in your webhook handler
export { sendThankYouEmail };
