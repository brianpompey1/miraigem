// app/seo/page.tsx
import Link from 'next/link';

export default function SEO() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Search Engine Optimization Services
        </h1>

        {/* Elevate Your Search Presence */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Elevate Your Search Presence
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            In today&apos;s digital landscape, visibility is everything. At Mirai
            Group, we combine artificial intelligence with proven SEO
            strategies to help your business climb search rankings and attract
            qualified traffic. Our data-driven approach ensures that every
            optimization decision is backed by real insights and measurable
            results.
          </p>
        </section>

        {/* Our AI-Powered SEO Advantage */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Our AI-Powered SEO Advantage
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            We leverage cutting-edge artificial intelligence to revolutionize
            traditional SEO:
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
            <li>Advanced keyword analysis and opportunity identification</li>
            <li>Predictive content optimization recommendations</li>
            <li>Real-time search trend analysis</li>
            <li>Automated technical SEO audits</li>
            <li>Machine learning-powered competitor analysis</li>
            <li>Smart content gap detection</li>
          </ul>
        </section>

        {/* Comprehensive SEO Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Comprehensive SEO Solutions
          </h2>

          {/* Technical SEO */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Technical SEO</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We optimize your website&apos;s foundation for maximum search engine
              visibility:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Site architecture optimization</li>
              <li>Mobile optimization</li>
              <li>Page speed enhancement</li>
              <li>Schema markup implementation</li>
              <li>XML sitemap optimization</li>
              <li>Robots.txt configuration</li>
              <li>Core Web Vitals optimization</li>
              <li>Technical audit and monitoring</li>
            </ul>
          </div>

          {/* On-Page SEO */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">On-Page SEO</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Our AI-assisted content optimization ensures every page performs at
              its best:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Keyword strategy development</li>
              <li>Content optimization</li>
              <li>Meta tag optimization</li>
              <li>Header structure optimization</li>
              <li>Internal linking strategy</li>
              <li>Image optimization</li>
              <li>User experience enhancement</li>
              <li>Local SEO optimization</li>
            </ul>
          </div>

          {/* Off-Page SEO */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Off-Page SEO</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Build your site&apos;s authority through strategic off-page
              optimization:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Link building strategy</li>
              <li>Digital PR campaigns</li>
              <li>Social signals optimization</li>
              <li>Brand mention monitoring</li>
              <li>Local citation building</li>
              <li>Authority building</li>
              <li>Competitor backlink analysis</li>
              <li>Industry relationship development</li>
            </ul>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">Our Process</h2>
            <ol className="list-decimal list-inside text-gray-400 text-base md:text-lg leading-relaxed space-y-4">
                <li>
                    <strong>Comprehensive Analysis:</strong> We begin with a deep dive into your current SEO performance, including a technical site audit, competitor analysis, keyword opportunity analysis, content gap analysis, backlink profile review, and market position assessment.
                </li>
                <li>
                    <strong>Strategy Development:</strong> Using AI-powered insights, we create a customized SEO strategy, including target keyword mapping, content calendar creation, a technical optimization roadmap, a link building strategy, local SEO planning, and performance benchmarking.
                </li>
                <li>
                    <strong>Implementation:</strong> Our team executes your strategy with precision, handling technical optimizations, content creation and optimization, on-page improvements, link building campaigns, local SEO implementation, and schema markup deployment.
                </li>
                <li>
                   <strong>Monitoring & Optimization:</strong> We continuously track and improve performance with real-time ranking monitoring, traffic analysis, conversion tracking, algorithm update adaptation, performance reporting, and ongoing strategy refinement.
                </li>
            </ol>
        </section>

        {/* The Mirai SEO Difference */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            The Mirai SEO Difference
          </h2>

          {/* AI-Enhanced Decision Making */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              AI-Enhanced Decision Making
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Our artificial intelligence tools provide:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Predictive keyword trends</li>
              <li>Content optimization suggestions</li>
              <li>Technical issue detection</li>
              <li>Competitor strategy insights</li>
              <li>User behavior analysis</li>
              <li>ROI forecasting</li>
            </ul>
          </div>

          {/* Data-Driven Results */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Data-Driven Results</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We focus on metrics that matter:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Organic traffic growth</li>
              <li>Keyword ranking improvements</li>
              <li>Conversion rate optimization</li>
              <li>Local search visibility</li>
              <li>Domain authority growth</li>
              <li>ROI measurement</li>
            </ul>
          </div>

          {/* Industry Expertise */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Industry Expertise</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Our team brings deep knowledge of:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Search algorithm updates</li>
              <li>Industry best practices</li>
              <li>Technical SEO requirements</li>
              <li>Content optimization</li>
              <li>Link building strategies</li>
              <li>Local SEO tactics</li>
            </ul>
          </div>

          {/* Monthly Reporting & Insights */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Monthly Reporting & Insights
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Stay informed with comprehensive monthly reports:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Ranking progress</li>
              <li>Traffic analysis</li>
              <li>Conversion metrics</li>
              <li>Technical health</li>
              <li>Backlink growth</li>
              <li>Competitor comparison</li>
              <li>ROI calculations</li>
              <li>Strategy updates</li>
            </ul>
          </div>
        </section>

        {/* Why Choose Mirai Group for SEO */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Why Choose Mirai Group for SEO
          </h2>

          {/* Innovative Approach */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Innovative Approach</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We utilize:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>AI-powered strategy development</li>
              <li>Cutting-edge optimization tools</li>
              <li>Predictive analytics</li>
              <li>Automated monitoring</li>
              <li>Proactive optimization</li>
              <li>Continuous innovation</li>
            </ul>
          </div>

          {/* Proven Results */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Proven Results</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We deliver:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Sustainable ranking improvements</li>
              <li>Quality traffic growth</li>
              <li>Higher conversion rates</li>
              <li>Improved ROI</li>
              <li>Long-term success</li>
              <li>Measurable outcomes</li>
            </ul>
          </div>

          {/* Transparent Communication */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Transparent Communication
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We provide:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Regular progress updates</li>
              <li>Clear performance metrics</li>
              <li>Strategy explanations</li>
              <li>Timeline expectations</li>
              <li>ROI tracking</li>
              <li>Open dialogue</li>
            </ul>
          </div>
        </section>

        {/* Call to Action (Reusing from Web Design Page) */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Ready to Improve Your Search Rankings?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Transform your online visibility with our AI-powered SEO services.
            Contact us today to discover how we can help your business achieve
            better search rankings and attract more qualified traffic.
          </p>
          <Link
            href="/contact"
            className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300"
          >
            Contact Us
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Schedule a free SEO consultation
          </p>
        </section>
        <section className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            FAQs
          </h2>
          <dl className="text-left">
              <div className="mb-4">
                  <dt className="text-lg font-semibold text-white">How long does it take to see SEO results?</dt>
                  <dd className="text-gray-400">While some improvements can be seen within weeks, significant results typically take 3-6 months. Our AI-powered approach helps accelerate results while building sustainable long-term success.</dd>
              </div>
              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">What makes your SEO services different?</dt>
                <dd className="text-gray-400">Our combination of artificial intelligence, experienced professionals, and proven strategies allows us to identify opportunities faster and implement more effective optimizations than traditional approaches.</dd>
              </div>

              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">Do you guarantee first-page rankings?</dt>
                <dd className="text-gray-400">While we can&apos;t guarantee specific rankings (no one ethically can), we guarantee a data-driven approach focused on sustainable growth and measurable improvements in your search presence.</dd>
              </div>

              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">How do you measure SEO success?</dt>
                <dd className="text-gray-400">We track multiple metrics including ranking improvements, organic traffic growth, conversion rates, and ROI. Our comprehensive reporting keeps you informed of all progress and results.</dd>
              </div>
          </dl>
        </section>
      </div>
    </div>
  );
};