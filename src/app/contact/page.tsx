// app/contact/page.tsx
"use client";
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitSuccess(null); // Reset success/error state

        try {
            const response = await fetch("https://formspree.io/f/xgvolkno", { // Replace
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json', // Add Accept header
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json(); // Parse the JSON response

            if (data.ok) { // Check for Formspree's success indicator
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setSubmitSuccess(false);
                // Formspree usually returns error details in `data.errors`
                console.error("Formspree error:", data.errors || data);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };


  return (
    <div className="py-16 px-4 md:px-16 bg-black text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg md:text-xl text-center mb-12">
          Get in touch with us to discuss your project.
        </p>

        {submitSuccess === true && (
          <div className="bg-green-500 text-white p-4 rounded mb-4">
            Message sent successfully!
          </div>
        )}
        {submitSuccess === false && (
          <div className="bg-red-500 text-white p-4 rounded mb-4">
            Error sending message. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-custom-tan focus:border-custom-tan text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-custom-tan focus:border-custom-tan text-white"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-custom-tan focus:border-custom-tan text-white"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}