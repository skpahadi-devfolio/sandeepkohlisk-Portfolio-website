//Controller Logic For Contact Page:-
import Contact from "../models/contactModel.js";

export const contactMessage = async (req, res) => {
    try {
        const {name, email, message} = req.body;

        if(!name || !email || !message){
           return res.status(400).json({
                success: false,
                message: "Empty Field are required"
            })
        }
        const messge = await Contact.create({name, email, message})
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
