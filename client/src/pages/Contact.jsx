import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import Footer from "../components/Footer";

function Contact() {

  return (

    <>
      <div className="bg-gray-100 min-h-screen">

        {/* HERO SECTION */}

        <div
          className="min-h-[400px] sm:min-h-[500px] bg-cover bg-center flex items-center justify-center px-4"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')",
          }}
        >

          <div className="bg-black/70 p-5 sm:p-8 lg:p-10 rounded-2xl text-center">

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mt-4">
              We'd love to hear from you
            </p>

          </div>

        </div>

        {/* CONTACT SECTION */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* FORM */}

            <div className="bg-white p-5 sm:p-8 rounded-xl shadow-lg">

              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Send Us A Message
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 sm:p-4 rounded mb-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 sm:p-4 rounded mb-4"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 sm:p-4 rounded mb-4"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border p-3 sm:p-4 rounded mb-4"
              ></textarea>

              <button
                className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-3
                rounded-lg
                w-full
                sm:w-auto
                "
              >
                Send Message
              </button>

            </div>

            {/* CONTACT INFO */}

            <div className="space-y-5">

              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">

                <FaEnvelope className="text-3xl sm:text-4xl mb-4 text-blue-600" />

                <h3 className="text-xl sm:text-2xl font-bold">
                  Email
                </h3>

                <p className="mt-2 text-gray-600 break-words">
                  support@smarthireai.com
                </p>

              </div>

              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">

                <FaPhone className="text-3xl sm:text-4xl mb-4 text-green-600" />

                <h3 className="text-xl sm:text-2xl font-bold">
                  Phone
                </h3>

                <p className="mt-2 text-gray-600">
                  +91 9876543210
                </p>

              </div>

              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">

                <FaMapMarkerAlt className="text-3xl sm:text-4xl mb-4 text-red-600" />

                <h3 className="text-xl sm:text-2xl font-bold">
                  Address
                </h3>

                <p className="mt-2 text-gray-600">
                  Ahmedabad, Gujarat, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* FAQ */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg sm:text-xl">
                How does AI Interview work?
              </h3>

              <p className="mt-2 text-gray-600">
                AI automatically evaluates candidate answers using Gemini AI.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg sm:text-xl">
                How do I upload my resume?
              </h3>

              <p className="mt-2 text-gray-600">
                Simply visit the Resume Upload page and upload your PDF resume.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg sm:text-xl">
                How are candidates ranked?
              </h3>

              <p className="mt-2 text-gray-600">
                Rankings are based on interview performance and AI evaluation.
              </p>
            </div>

          </div>

        </div>

        {/* SOCIAL */}

        <div className="bg-white py-12 sm:py-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Follow Us
          </h2>

          <div className="flex justify-center gap-6 sm:gap-10 text-3xl sm:text-5xl">

            <FaFacebook className="cursor-pointer hover:text-blue-600" />

            <FaLinkedin className="cursor-pointer hover:text-blue-500" />

            <FaGithub className="cursor-pointer hover:text-gray-700" />

            <FaInstagram className="cursor-pointer hover:text-pink-600" />

          </div>

        </div>

        {/* MAP */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Our Location
          </h2>

          <div className="rounded-xl overflow-hidden shadow-lg">

            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>

        </div>

        {/* CTA */}

        <div className="bg-black text-white py-12 sm:py-20 text-center px-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Need Help?
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-xl">
            Our team is always ready to assist you.
          </p>

          <button className="mt-8 bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-blue-700">
            Contact Support
          </button>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Contact;