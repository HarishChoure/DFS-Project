"use client";
import { useState } from "react";

export default function ContactSection() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill all fields");
      return false;
    }
    setError("");
    return true;
  };

  const generateMessage = () => {
    return `Hello, I am ${form.name}
I would like to start investing and want your guidance.
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message}`;
  };

  const whatsappLink = `https://wa.me/918319400824?text=${encodeURIComponent(
    generateMessage()
  )}`;

  const emailLink = `https://mail.google.com/mail/?view=cm&to=laxmandongre.in@gmail.com&su=New%20Inquiry&body=${encodeURIComponent(
    generateMessage()
  )}`;

  return (
    <section className="py-16 bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-xl">
        
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-3xl font-semibold mb-2 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Start your investment journey with expert guidance
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                name="message"
                placeholder="Tell us about your requirement..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <button
              onClick={() => {
                if (validateForm()) setStep(2);
              }}
              className="w-full mt-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Continue →
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
              Select Contact Method
            </h2>

            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                className="block bg-[#0e2a56] text-white py-3 text-center rounded-lg font-medium hover:bg-green-600 transition"
              >
                WhatsApp
              </a>

              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0e2b59] text-white py-3 text-center rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Email
              </a>
            </div>

            <button
              onClick={() => setStep(1)}
              className="mt-5 text-sm text-gray-500 underline w-full"
            >
              ← Go Back
            </button>
          </>
        )}
      </div>
    </section>
  );
}