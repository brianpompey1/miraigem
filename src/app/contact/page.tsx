// app/contact/page.tsx
// "use client" is NOT needed for Netlify Forms in this basic setup.

export default function Contact() {
  return (
    <div className="py-16 px-4 md:px-16 bg-black text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg md:text-xl text-center mb-12">
          Get in touch with us to discuss your project.
        </p>

        {/* Netlify Form - Key Changes Here */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"  //  Essential for Netlify to detect the form
          className="max-w-lg mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" /> {/* Important! */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"  // name attribute is crucial
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
              name="email"  // name attribute is crucial
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
              name="message"  // name attribute is crucial
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-custom-tan focus:border-custom-tan text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}