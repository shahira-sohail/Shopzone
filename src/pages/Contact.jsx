function Contact() {
  return (
    <main className="page">
      <h1>Contact Us</h1>

      <form>
        <input
          type="text"
          placeholder="Your name"
        />

        <input
          type="email"
          placeholder="Your email"
        />

        <textarea
          placeholder="Your message"
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;