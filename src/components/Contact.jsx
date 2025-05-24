import "./Contact.css";

export function Contact() {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <form className="contact-form" autoComplete="off">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="5" placeholder="Your Message" required />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}