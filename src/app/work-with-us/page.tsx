// app/work-with-us/page.tsx

export default function WorkWithUs() {
  return (
    <div className="py-16 px-4 md:px-16 bg-black text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Work With Us
        </h1>
        <p className="text-gray-400 text-lg md:text-xl text-center mb-12">
          Schedule a free consultation to discuss your project.
        </p>

        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/miraiglobal111/30min" // Replace with your URL
          style={{ minWidth: "320px", height: "700px" }} // Adjust height as needed
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>
    </div>
  );
}