import React from "react";

const ContactPage = () => {
  return (
    <section className="container mx-auto px-4 py-10 ">
      <h1 className="text-4xl font-bold dark:text-gray-200 text-yellow-900 mb-6 text-center">
        Get in Touch with GlowRx
      </h1>
      <p className=" text-lg text-center mb-8 dark:text-gray-200 text-yellow-900">
        {"𝑯𝒂𝒗𝒆 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏𝒔? 𝑹𝒆𝒂𝒄𝒉 𝒐𝒖𝒕 𝒕𝒐 𝒖𝒔, 𝒂𝒏𝒅 𝒘𝒆’𝒍𝒍 𝒉𝒆𝒍𝒑 𝒎𝒂𝒌𝒆 𝒚𝒐𝒖𝒓 𝒇𝒍𝒐𝒓𝒂𝒍 𝒅𝒓𝒆𝒂𝒎𝒔 𝒄𝒐𝒎𝒆 𝒕𝒓𝒖𝒆!"}
      </p>

      {/* Contact Form */}
      <div className="dark:bg-white bg-gray-950 shadow-lg shadow-gray-400 rounded-lg p-8 max-w-lg mx-auto">
        <form>
          <div className="mb-4">
            <label className="block dark:text-gray-700 text-white font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block dark:text-gray-700  text-white font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white dark:text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white dark:text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              rows={4}
              placeholder="How can we assist you with your beauty and skincare needs?"
              required
            />
          </div>

          <button className="dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-50 bg-white text-black px-4 py-2 rounded-lg w-full font-semibold transition duration-200">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-yellow-950 dark:text-gray-200 mb-4">Our Contact Information</h2>
        <p className="text-gray-700">
          <strong>Email:</strong> contact@glowrx.com
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> +1 (234) 567-8901
        </p>
        <p className="text-gray-700">
          <strong>Location:</strong> 123 GlowRx Avenue, Beauty City, FL
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
