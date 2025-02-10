export default function ContactForm() {
    return (
      <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-2 border" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-2 border" />
        <textarea placeholder="Your Message" className="w-full p-2 mb-2 border"></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded">Send Message</button>
      </form>
    );
  }
  