import React, { useState } from "react";
import { FaUser, FaPhone, FaCommentDots } from "react-icons/fa";

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const botToken = "7725184176:AAFuzNCVxfpN_9gIKLzy96KQvY0Ug-JOFL4";
  const chatId = "6380897170";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const messageText = `📝 *Yangi Xabar* \n\n👤 *Ism:* ${formData.name} \n📞 *Bog‘lanish:* ${formData.contact} \n💬 *Izoh:* ${formData.message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: messageText, parse_mode: "Markdown" }),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: "", contact: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-r from-blue-700 to-gray-800 text-white py-12">
      <div className="w-full max-w-4xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          {language === "UZ" ? "Bog‘lanish" : "Contact"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center bg-gray-800 rounded-lg p-3">
            <FaUser className="text-yellow-400 mr-3" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={language === "UZ" ? "Ismingizni kiriting" : "Enter your name"}
              className="w-full bg-transparent outline-none text-white"
              required
            />
          </div>

          <div className="flex items-center bg-gray-800 rounded-lg p-3">
            <FaPhone className="text-yellow-400 mr-3" />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder={language === "UZ" ? "Telefon yoki Email" : "Phone or Email"}
              className="w-full bg-transparent outline-none text-white"
              required
            />
          </div>

          <div className="flex items-start bg-gray-800 rounded-lg p-3">
            <FaCommentDots className="text-yellow-400 mr-3 mt-1" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={language === "UZ" ? "Xabaringizni yozing..." : "Write your message..."}
              className="w-full bg-transparent outline-none text-white resize-none"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-medium py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300"
          >
            {loading
              ? (language === "UZ" ? "Yuborilmoqda..." : "Sending...")
              : (language === "UZ" ? "Jo‘natish" : "Send")}
          </button>

          {success && (
            <p className="text-center text-green-400 font-medium mt-3">
              {language === "UZ"
                ? "Xabaringiz yuborildi! Tez orada javob olasiz."
                : "Your message has been sent! You will receive a response soon."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
