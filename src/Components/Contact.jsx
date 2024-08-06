import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white py-5">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="text-center mt-2">We would love to hear from you! Please fill out the form below to get in touch.</p>
      </header>

      <main className="mt-10">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-gray-700">
            If you have any questions, comments, or concerns, please reach out to us by filling out the form below. We aim to respond to all inquiries within 24 hours.
          </p>
        </section>

        <section className="mb-8">
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mt-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
            </div>
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;
