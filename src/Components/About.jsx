import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white py-5">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="text-center mt-2">Learn more about our company and team.</p>
      </header>

      <main className="mt-10">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Our Company</h2>
          <p className="mt-4 text-gray-700">
            We are a company committed to providing exceptional services and solutions to our clients. With a focus on innovation and excellence, we strive to meet and exceed our clients' expectations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Our Team</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">John Doe</h3>
              <p className="mt-2 text-gray-600">CEO</p>
              <p className="mt-2 text-gray-600">John has over 20 years of experience in the industry and leads the company with a vision for innovation and growth.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Jane Smith</h3>
              <p className="mt-2 text-gray-600">CTO</p>
              <p className="mt-2 text-gray-600">Jane is a tech enthusiast with a passion for developing cutting-edge solutions that drive the company forward.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Michael Brown</h3>
              <p className="mt-2 text-gray-600">COO</p>
              <p className="mt-2 text-gray-600">Michael ensures that our operations run smoothly and efficiently, focusing on delivering the best experience for our clients.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-gray-700">
            Our mission is to empower businesses with innovative solutions that drive success and growth. We are dedicated to delivering exceptional value to our clients through our expertise and commitment to excellence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Our Values</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
            <li>Customer Focus: Our clients are at the heart of everything we do.</li>
            <li>Innovation: We constantly seek new and better ways to serve our clients.</li>
            <li>Excellence: We strive for excellence in everything we do.</li>
            <li>Teamwork: We work together, across boundaries, to meet the needs of our clients and help the company win.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default About;
