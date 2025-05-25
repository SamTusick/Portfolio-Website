import "../styling/contact.css";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      className="contact-form-style"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.25, ease: "easeOut" }}
    >
      <form
        className="contact-form"
        action="https://formspree.io/f/xnndkpbk"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
  </motion.div>
  );
}