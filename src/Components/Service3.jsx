import React from 'react';

function Service3() {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white py-5">
        <h1 className="text-4xl font-bold text-center">Service 3</h1>
        <p className="text-center mt-2">Detailed information about Service 3</p>
      </header>

      <main className="mt-10">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="mt-4 text-gray-700">
            Service 3 provides advanced solutions tailored to meet your needs. Our team is dedicated to delivering high-quality service and support to ensure your satisfaction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Benefits</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Benefit 1: Detailed description of benefit 1.</li>
            <li>Benefit 2: Detailed description of benefit 2.</li>
            <li>Benefit 3: Detailed description of benefit 3.</li>
            <li>Benefit 4: Detailed description of benefit 4.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Key Features</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Feature 1</h3>
              <p className="mt-2 text-gray-600">Description of feature 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Feature 2</h3>
              <p className="mt-2 text-gray-600">Description of feature 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Feature 3</h3>
              <p className="mt-2 text-gray-600">Description of feature 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Feature 4</h3>
              <p className="mt-2 text-gray-600">Description of feature 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="mt-4 text-gray-700">
            If you have any questions about Service 3 or would like more information, please don't hesitate to contact us.
          </p>
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

export default Service3;
