import { useState } from "react";
import "../styling/contact.css";
import { motion } from "framer-motion";

const FORM_ENDPOINT = "https://formspree.io/f/xnndkpbk";

export default function ContactForm() {
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="contact-form-style"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.25, ease: "easeOut" }}
    >
      <form
        className="contact-form"
        action={FORM_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" placeholder="Your Name" aria-label="Your name" required />
        <input type="email" name="email" placeholder="Your Email" aria-label="Your email" required />
        <textarea name="message" placeholder="Your Message" aria-label="Your message" rows="5" required />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <div role="status" aria-live="polite">
          {status === "success" && (
            <p className="contact-status success">Thanks, your message was sent. I will reply soon.</p>
          )}
          {status === "error" && (
            <p className="contact-status error">
              Something went wrong and your message was not sent. Please try again, or email me at{" "}
              <a href="mailto:samtusick@outlook.com">samtusick@outlook.com</a>.
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
}
