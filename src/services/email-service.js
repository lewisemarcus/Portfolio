import { send, init } from "emailjs-com"

const serviceId = "service_wwpk29a"
const templateId = "template_1b9z9oa"
const userId = "MeuwS58dbKLgRRLVJ"

const sendEmail = async (content) => {
    init(userId)

    const toSend = {
        from_name: content.from_name,
        to_email: "lewisemarcus@gmail.com",
        from_email: content.from_email,
        message: content.message,
    }

    await send(serviceId, templateId, toSend)
}

export default sendEmail
