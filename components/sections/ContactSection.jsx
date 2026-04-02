"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    text: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.phone || !form.text) {
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
I would like to know more about ${form.text}`;
  };

  const whatsappLink = `https://wa.me/918319400824?text=${encodeURIComponent(
    generateMessage()
  )}`;

  

  return (
    <section className="py-16 bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-xl">
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
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              
              <select
                name="text"
                value={form.text}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="" className="text-gray-300">Select an option</option>
                <option value="mutual funds">Mutual Funds</option>
                <option value="sip">SIP</option>
                <option value="swp">SWP</option>
                <option value="loan agains mf">Loan Against MF</option>
                <option value="insurance">Insurance</option>
                <option value="nfo">NFO</option>

              </select>

            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            
              <a
                href={whatsappLink}
                target="_blank"
                className="w-full mt-4 block bg-[#0e2a56] text-white py-3 text-center rounded-lg font-medium hover:bg-green-600 transition"
              >
            
              Continue →
              </a>
            
      </div>
    </section>
  );
}