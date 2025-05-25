import "../styling/contact.css";

export default function ContactForm() {
  return (
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
  );
}