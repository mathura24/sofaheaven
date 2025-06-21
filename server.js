const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/sendmail', (req, res) => {
    const { name, email } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mathumanoharan24@gmail.com',
            pass: 'boandjwxklenrgjn' // app password
        }
    });

    const mailOptions = {
        from: 'mathumanoharan24@gmail.com',
        to: 'mathuramanoharan72@gmail.com',
        subject: 'Need Assistance Before Buying',
        text: `
Dear Customer,

Thank you for reaching out to Sofa Heaven!

We’re glad you're interested in our **Berlin 3-Seater Sofa**. This model is available in three colors: Navy Blue, Sand Beige, and Charcoal Grey. The fabric is premium cotton blend with a 5-year warranty on the frame.

Estimated delivery time: 5–7 working days  
Delivery available across India.

Feel free to contact us if you have any more questions. We’re here to help you pick the perfect sofa for your home!

Warm regards,  
Team Sofa Heaven  
📞 +91 90000 00000  
📧 support@sofaheaven.in`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ message: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Email sent successfully!' });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
