// app/it-consulting/page.tsx
import Link from 'next/link';

export default function ITConsulting() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          IT Consulting Services
        </h1>

        {/* Navigate the Future of Technology */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Navigate the Future of Technology
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            In today&apos;s rapidly evolving digital landscape, staying ahead
            means making smart technology decisions. At Mirai Group, we help
            businesses harness the power of emerging technologies while ensuring
            security and efficiency. Our expertise in AI integration and
            cybersecurity makes us your ideal partner for digital
            transformation.
          </p>
        </section>

        {/* Our IT Consulting Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Our IT Consulting Solutions
          </h2>

          {/* AI Implementation & Optimization */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              AI Implementation & Optimization
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Transform your business operations with artificial intelligence:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>AI readiness assessment</li>
              <li>Implementation strategy</li>
              <li>Process automation</li>
              <li>Workflow optimization</li>
              <li>AI tool selection</li>
              <li>Integration planning</li>
              <li>Staff training</li>
              <li>Performance monitoring</li>
            </ul>
          </div>

          {/* Cybersecurity Services */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Cybersecurity Services
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Protect your digital assets with comprehensive security solutions:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Security audits</li>
              <li>Threat assessment</li>
              <li>Security policy development</li>
              <li>Employee training</li>
              <li>Incident response planning</li>
              <li>Compliance management</li>
              <li>Network security</li>
              <li>Data protection</li>
            </ul>
          </div>

          {/* Technology Strategy */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Technology Strategy
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Build a robust foundation for your digital future:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Digital transformation planning</li>
              <li>Technology stack assessment</li>
              <li>Infrastructure optimization</li>
              <li>Cloud migration strategy</li>
              <li>Software selection</li>
              <li>IT roadmap development</li>
              <li>Budget planning</li>
              <li>Risk management</li>
            </ul>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Our Approach
          </h2>
          <ol className="list-decimal list-inside text-gray-400 text-base md:text-lg leading-relaxed space-y-4">
            <li>
              <strong>Assessment:</strong> We begin by understanding your
              current technology landscape, including business process
              analysis, technology audit, security assessment, opportunity
              identification, risk evaluation, and budget review.
            </li>
            <li>
              <strong>Strategy Development:</strong> Creating your technology
              roadmap through solution design, implementation planning, resource
              allocation, timeline development, risk mitigation, and ROI
              projection.
            </li>
            <li>
              <strong>Implementation:</strong> Executing with precision via
              project management, change management, staff training, system
              integration, security implementation, and performance monitoring.
            </li>
            <li>
              <strong>Ongoing Support:</strong> Ensuring long-term success with
              regular assessments, performance optimization, security updates,
              strategy refinement, technology updates, and continuous
              improvement.
            </li>
          </ol>
        </section>

        {/* Why Choose Mirai Group */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Why Choose Mirai Group
          </h2>

          {/* Future-Focused Expertise */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Future-Focused Expertise
            </h3>
              <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                <li>AI implementation specialists</li>
                <li>Cybersecurity experts</li>
                <li>Digital transformation leaders</li>
                <li>Cloud computing authorities</li>
                <li>Network security professionals</li>
                <li>Technology strategists</li>
              </ul>
          </div>

          {/* Comprehensive Solutions */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Comprehensive Solutions
            </h3>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                <li>End-to-end service</li>
                <li>Integrated approach</li>
                <li>Custom strategies</li>
                <li>Scalable solutions</li>
                <li>Ongoing support</li>
                <li>Regular updates</li>
            </ul>
          </div>

          {/* Proven Results */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Proven Results</h3>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                <li>Improved efficiency</li>
                <li>Enhanced security</li>
                <li>Cost optimization</li>
                <li>Risk reduction</li>
                <li>Innovation enablement</li>
                <li>Competitive advantage</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Let&apos;s discuss how we can help your business leverage the latest
            technology while ensuring security and efficiency.
          </p>
          <Link
            href="/contact"
            className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300"
          >
            Contact Us
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Schedule a technology consultation
          </p>
        </section>
      </div>
    </div>
  );
}