// app/email-marketing/page.tsx
import Link from 'next/link';

export default function EmailMarketing() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Email & Social Media Marketing Services
        </h1>

        {/* Automate Your Success */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Automate Your Success
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Transform your digital presence with Mirai Group&apos;s comprehensive
            email and social media marketing solutions. We combine AI-powered
            automation with human creativity to deliver engaging campaigns that
            connect with your audience and drive real business results.
          </p>
        </section>

        {/* Full-Service Email Marketing */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Full-Service Email Marketing
          </h2>

          {/* Strategic Email Campaign Management */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Strategic Email Campaign Management
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We handle every aspect of your email marketing:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Campaign strategy development</li>
              <li>Email template design</li>
              <li>Content creation and curation</li>
              <li>List segmentation and management</li>
              <li>A/B testing</li>
              <li>Performance analytics</li>
              <li>Automation workflow setup</li>
              <li>Deliverability optimization</li>
            </ul>
          </div>

          {/* Automated Email Solutions */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Automated Email Solutions
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Our AI-powered email automation includes:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Welcome email sequences</li>
              <li>Lead nurturing campaigns</li>
              <li>Abandoned cart recovery</li>
              <li>Customer retention programs</li>
              <li>Re-engagement campaigns</li>
              <li>Birthday and anniversary emails</li>
              <li>Post-purchase follow-ups</li>
              <li>Behavioral trigger emails</li>
            </ul>
          </div>

          {/* Email Marketing Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Email Marketing Features
            </h3>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Mobile-responsive design</li>
              <li>Dynamic content personalization</li>
              <li>Customer journey mapping</li>
              <li>Advanced segmentation</li>
              <li>Spam score optimization</li>
              <li>Analytics and reporting</li>
              <li>Integration with CRM systems</li>
              <li>List hygiene management</li>
            </ul>
          </div>
        </section>

        {/* Comprehensive Social Media Management */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Comprehensive Social Media Management
          </h2>

          {/* Platform Management */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Platform Management
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Full-service management across all major platforms:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>TikTok</li>
              <li>YouTube</li>
              <li>Pinterest</li>
              <li>Other emerging platforms</li>
            </ul>
          </div>

          {/* Content Creation & Curation */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Content Creation & Curation
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Professional content that engages your audience:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Original graphic design</li>
              <li>Video content creation</li>
              <li>Photography</li>
              <li>Copywriting</li>
              <li>Story creation</li>
              <li>Hashtag strategy</li>
              <li>Content calendar development</li>
              <li>Brand voice maintenance</li>
            </ul>
          </div>

          {/* Social Media Automation */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Social Media Automation
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Efficient automation tools for consistent presence:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Scheduled posting</li>
              <li>Content queue management</li>
              <li>Response management</li>
              <li>Engagement tracking</li>
              <li>Hashtag optimization</li>
              <li>Cross-platform coordination</li>
              <li>Performance monitoring</li>
              <li>Trend analysis</li>
            </ul>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">Our Process</h2>
            <ol className="list-decimal list-inside text-gray-400 text-base md:text-lg leading-relaxed space-y-4">
                <li>
                    <strong>Strategy Development:</strong> Brand voice definition, target audience analysis, content strategy planning, platform selection, goal setting, KPI establishment, competitor analysis, and opportunity identification.
                </li>
                <li>
                   <strong>Content Creation:</strong> Content calendar development, original content creation, brand asset development, message optimization, automation setup, template design, A/B testing plans, and campaign structuring.

                </li>
                <li>
                    <strong>Implementation:</strong> Content scheduling, automation deployment, campaign launching, engagement monitoring, response management, community building, performance tracking, and real-time optimization.
                </li>
                <li>
                   <strong>Analysis & Optimization:</strong> Performance reporting, engagement analysis, ROI calculation, strategy refinement, A/B test evaluation, trend identification, audience insights, and campaign adjustment.
                </li>
            </ol>
        </section>

        {/* The Mirai Advantage */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            The Mirai Advantage
          </h2>

          {/* AI-Powered Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              AI-Powered Insights
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We utilize AI to enhance your marketing efforts:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Content performance prediction</li>
              <li>Best time to post analysis</li>
              <li>Audience behavior tracking</li>
              <li>Engagement optimization</li>
              <li>Topic trend identification</li>
              <li>Sentiment analysis</li>
              <li>ROI forecasting</li>
              <li>Automated reporting</li>
            </ul>
          </div>

          {/* Data-Driven Results */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Data-Driven Results
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We focus on metrics that matter:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Engagement rates</li>
              <li>Conversion tracking</li>
              <li>List growth</li>
              <li>Click-through rates</li>
              <li>Open rates</li>
              <li>Social following</li>
              <li>Brand sentiment</li>
              <li>Lead generation</li>
            </ul>
          </div>

          {/* Expert Management */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Expert Management
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Our team brings deep expertise in:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Digital marketing strategy</li>
              <li>Content creation</li>
              <li>Community management</li>
              <li>Campaign optimization</li>
              <li>Platform best practices</li>
              <li>Analytics interpretation</li>
              <li>Trend adaptation</li>
              <li>Crisis management</li>
            </ul>
          </div>
        </section>

        {/* Service Packages */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Service Packages
          </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Essential Package */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-white">Essential Package</h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
                        Perfect for small businesses:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                        <li>2-3 social platforms</li>
                        <li>Basic email automation</li>
                        <li>Weekly content calendar</li>
                        <li>Monthly reporting</li>
                        <li>Basic engagement monitoring</li>
                        <li>Standard response time</li>
                    </ul>
                </div>

                {/* Professional Package */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-white">Professional Package</h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
                        Ideal for growing businesses:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                      <li>4-5 social platforms</li>
                        <li>Advanced email automation</li>
                        <li>Daily content calendar</li>
                        <li>Weekly reporting</li>
                        <li>Priority engagement monitoring</li>
                        <li>Fast response time</li>
                    </ul>
                </div>

                {/* Enterprise Package */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-white">Enterprise Package</h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
                    Comprehensive solution for larger organizations:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                        <li>All social platforms</li>
                        <li>Custom email automation</li>
                        <li>Custom content calendar</li>
                        <li>Real-time reporting</li>
                        <li>24/7 engagement monitoring</li>
                        <li>Immediate response time</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Client Success Support */}
        <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">Client Success Support</h2>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
                <li>Dedicated account manager</li>
                <li>Regular strategy meetings</li>
                <li>Performance reviews</li>
                <li>Strategy adjustments</li>
                <li>Training and education</li>
                <li>Technical support</li>
                <li>Crisis management</li>
                <li>Growth consulting</li>
            </ul>
        </section>

        {/* Why Choose Mirai Group */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Why Choose Mirai Group
          </h2>

          {/* Comprehensive Solution */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Comprehensive Solution
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We offer:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Full-service management</li>
              <li>Integrated strategy</li>
              <li>Multi-platform expertise</li>
              <li>Custom automation</li>
              <li>Professional content</li>
              <li>Regular optimization</li>
            </ul>
          </div>

          {/* Proven Results */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Proven Results</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We deliver:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Increased engagement</li>
              <li>Higher conversion rates</li>
              <li>List growth</li>
              <li>Improved ROI</li>
              <li>Brand awareness</li>
              <li>Community growth</li>
            </ul>
          </div>

          {/* Transparent Communication */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Transparent Communication
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We ensure:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Regular reporting</li>
              <li>Clear metrics</li>
              <li>Strategy updates</li>
              <li>Performance reviews</li>
              <li>Open dialogue</li>
              <li>Proactive updates</li>
            </ul>
          </div>
        </section>
        {/* Call to Action (Reusing from Web Design Page) */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Take your email and social media marketing to the next level with our
            automated, full-service solutions. Contact us today to discuss how
            we can help grow your business online.
          </p>
          <Link
            href="/contact"
            className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300"
          >
            Contact Us
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Schedule a marketing consultation
          </p>
        </section>
        <section className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            FAQs
          </h2>
          <dl className="text-left">
              <div className="mb-4">
                  <dt className="text-lg font-semibold text-white">How quickly can you start managing our accounts?</dt>
                  <dd className="text-gray-400">We can typically begin within 1-2 weeks after initial consultation and strategy development.</dd>
              </div>
              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">Do you create all content from scratch?</dt>
                <dd className="text-gray-400">Yes, our team creates custom content tailored to your brand, including graphics, copy, and video content.</dd>
              </div>

              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">How do you measure success?</dt>
                <dd className="text-gray-400">We track multiple KPIs including engagement rates, follower growth, email open rates, click-through rates, and conversions.</dd>
              </div>

              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">Can we maintain some control over our accounts?</dt>
                <dd className="text-gray-400">Absolutely! We work collaboratively with clients and can establish approval workflows that match your needs.</dd>
              </div>
          </dl>
        </section>
      </div>
    </div>
  );
};