// app/web-design/page.tsx
import Link from 'next/link';

export default function WebDesign() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Web Design & Development Services
        </h1>

        {/* Transform Your Digital Presence */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Transform Your Digital Presence
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Your website is more than just a digital business card – it&apos;s the
            foundation of your online success. At Mirai Group, we create
            beautiful, efficient, and secure websites that convert visitors
            into customers and elevate your brand in the digital space. Our
            unique blend of design expertise, technical innovation, and
            AI-powered optimization ensures your website not only looks
            stunning but performs exceptionally.
          </p>
        </section>

        {/* Our Web Development Approach */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Our Web Development Approach
          </h2>

          {/* Discovery & Planning */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Discovery & Planning</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We begin every project by understanding your business goals,
              target audience, and unique requirements. This phase includes:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Comprehensive business analysis</li>
              <li>User persona development</li>
              <li>Competition research</li>
              <li>Content strategy planning</li>
              <li>Technical requirements gathering</li>
              <li>Project timeline development</li>
            </ul>
          </div>

          {/* Design & User Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Design & User Experience</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Our design philosophy combines aesthetic excellence with
              user-centric functionality:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Custom, brand-aligned visual design</li>
              <li>Intuitive user interface development</li>
              <li>Mobile-first responsive design</li>
              <li>User journey mapping</li>
              <li>Conversion optimization</li>
              <li>Accessibility compliance</li>
            </ul>
          </div>

          {/* Development & Technology */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Development & Technology</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We use cutting-edge technologies and best practices to build
              websites that perform:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Clean, efficient code architecture</li>
              <li>Advanced security implementation</li>
              <li>SEO-optimized structure</li>
              <li>Fast loading speeds</li>
              <li>Cross-browser compatibility</li>
              <li>Mobile responsiveness</li>
            </ul>
          </div>

          {/* Quality Assurance */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Quality Assurance</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Every website undergoes rigorous testing:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Functionality testing across devices</li>
              <li>Performance optimization</li>
              <li>Security vulnerability assessment</li>
              <li>Load time optimization</li>
              <li>Cross-browser testing</li>
              <li>Mobile usability testing</li>
            </ul>
          </div>
        </section>

        {/* Our Web Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Our Web Solutions
          </h2>

          {/* Corporate Websites */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Corporate Websites</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Professional, powerful websites that establish your brand&apos;s
              digital authority:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Brand-focused design</li>
              <li>Custom functionality</li>
              <li>Content management systems</li>
              <li>Team and company showcases</li>
              <li>Integrated blog platforms</li>
              <li>Career portals</li>
            </ul>
          </div>

          {/* E-Commerce Solutions */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">E-Commerce Solutions</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Robust online stores that drive sales and enhance customer
              experience:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Secure payment integration</li>
              <li>Inventory management</li>
              <li>Customer account portals</li>
              <li>Product catalog management</li>
              <li>Order tracking systems</li>
              <li>Analytics integration</li>
            </ul>
          </div>

          {/* Custom Web Applications */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Custom Web Applications</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Tailored solutions to meet your specific business needs:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Customer portals</li>
              <li>Booking systems</li>
              <li>Member directories</li>
              <li>Learning management systems</li>
              <li>Client management tools</li>
              <li>Custom dashboards</li>
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Technology Stack
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            We leverage the latest technologies to create powerful, scalable
            websites:
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
            <li>
              <strong>Frontend:</strong> React, Angular, Vue.js
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Python, PHP
            </li>
            <li>
              <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL
            </li>
            <li>
              <strong>CMS:</strong> WordPress, Drupal, Custom Solutions
            </li>
            <li>
              <strong>E-Commerce:</strong> WooCommerce, Shopify, Custom Platforms
            </li>
            <li>
              <strong>Security:</strong> SSL, WAF, Regular Security Audits
            </li>
          </ul>
        </section>

        {/* The Mirai Advantage */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            The Mirai Advantage
          </h2>

          {/* AI-Powered Optimization */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">AI-Powered Optimization</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We integrate artificial intelligence to enhance your website&apos;s
              performance:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Automated performance optimization</li>
              <li>Smart content recommendations</li>
              <li>User behavior analysis</li>
              <li>Conversion rate optimization</li>
              <li>Predictive analytics</li>
              <li>Automated testing</li>
            </ul>
          </div>

          {/* Security First */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Security First</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Your website&apos;s security is our priority:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>SSL certification</li>
              <li>Regular security audits</li>
              <li>DDoS protection</li>
              <li>Data encryption</li>
              <li>Secure payment processing</li>
              <li>Regular backups</li>
            </ul>
          </div>

          {/* Ongoing Support */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Ongoing Support</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We provide comprehensive support after launch:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Regular maintenance</li>
              <li>Performance monitoring</li>
              <li>Security updates</li>
              <li>Content updates</li>
              <li>Technical support</li>
              <li>Analytics reporting</li>
            </ul>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Our Process
          </h2>
            <ol className="list-decimal list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                <li><strong>Initial Consultation:</strong> Understanding your goals, requirements gathering, budget planning, and timeline development.</li>
                <li><strong>Design Phase: </strong>Wireframe creation, visual design concepts, user interface design, and client feedback and revisions.</li>
                <li><strong>Development Phase:</strong> Frontend development, backend implementation, CMS integration, and security implementation.</li>
                <li><strong>Testing & Optimization: </strong>Functionality testing, performance optimization, security testing, and user acceptance testing.</li>
                <li><strong>Launch & Support: </strong>Site deployment, final checks, training and documentation, and ongoing maintenance.</li>
            </ol>
        </section>

        {/* Why Choose Mirai Group */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Why Choose Mirai Group
          </h2>

          {/* Experience & Expertise */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Experience & Expertise</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Our team brings years of experience in creating successful web
              solutions across industries. We combine technical expertise with
              creative excellence to deliver websites that exceed expectations.
            </p>
          </div>

          {/* Results-Driven Approach */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Results-Driven Approach</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We focus on creating websites that don&apos;t just look good but
              deliver measurable results:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Increased conversion rates</li>
              <li>Improved user engagement</li>
              <li>Higher search engine rankings</li>
              <li>Faster loading speeds</li>
              <li>Better user retention</li>
              <li>Increased sales</li>
            </ul>
          </div>

          {/* Future-Proof Solutions */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Future-Proof Solutions</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We build websites with scalability and future growth in mind:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Modular architecture</li>
              <li>Scalable infrastructure</li>
              <li>Easy content management</li>
              <li>Regular update capability</li>
              <li>Integration flexibility</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Transform your digital presence with a website that combines stunning
            design, powerful functionality, and optimal performance. Contact us
            today to discuss your web development needs and discover how we can
            help you achieve your digital goals.
          </p>
          <Link
            href="/contact"
            className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};