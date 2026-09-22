//Controller Logic For Contact Page:-
import Contact from "../models/contactModel.js";
import transporter from "../service/contactForm.js";

export const contactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Empty Field are required"
            })
        }
        const messge = await Contact.create({ name, email, message })

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            text: `Hello Sandeep Kohli,
            You Have Receive a New Message from your Portfolio,
            Someone Want's to connect with you,
            Name: ${name} Email: ${email} Message:${message}`,
        })
        return res.status(200).json({
            success: true,
            message: "Message sent SuccessFully!",
            messge
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Message not sent API Failed"
        })
    }
}
