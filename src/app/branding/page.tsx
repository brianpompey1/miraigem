// app/branding/page.tsx
import Link from 'next/link';

export default function Branding() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Branding & Paid Media Services
        </h1>

        {/* Create an Unforgettable Brand */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Create an Unforgettable Brand
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Your brand is more than just a logo – it&apos;s your company&apos;s
            identity, voice, and promise to your customers. At Mirai Group, we
            help businesses create compelling brand identities and amplify them
            through strategic paid media campaigns that capture attention and
            drive results.
          </p>
        </section>

        {/* Comprehensive Branding Services */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Comprehensive Branding Services
          </h2>

          {/* Brand Identity Development */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Brand Identity Development
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We craft complete brand identities that resonate:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Logo design and variations</li>
              <li>Color palette selection</li>
              <li>Typography guidelines</li>
              <li>Brand voice development</li>
              <li>Visual style guides</li>
              <li>Brand messaging</li>
              <li>Company values articulation</li>
              <li>Brand story creation</li>
            </ul>
          </div>

          {/* Visual Asset Creation */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Visual Asset Creation
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              From digital to physical, we create all brand materials:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Business cards</li>
              <li>Letterheads</li>
              <li>Email signatures</li>
              <li>Presentation templates</li>
              <li>Social media templates</li>
              <li>Marketing collateral</li>
              <li>Packaging design</li>
              <li>Environmental graphics</li>
            </ul>
          </div>

          {/* Physical Marketing Materials */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Physical Marketing Materials
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Bring your brand into the real world:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Signage and banners</li>
              <li>Trade show displays</li>
              <li>Vehicle wraps</li>
              <li>Point-of-sale displays</li>
              <li>Promotional items</li>
              <li>Business merchandise</li>
              <li>Retail displays</li>
              <li>Event materials</li>
            </ul>
          </div>

          {/* Brand Guidelines */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Brand Guidelines
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Comprehensive documentation for consistent brand usage:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Logo usage rules</li>
              <li>Color specifications</li>
              <li>Typography guidelines</li>
              <li>Image style guide</li>
              <li>Tone of voice</li>
              <li>Messaging framework</li>
              <li>Brand applications</li>
              <li>Design templates</li>
            </ul>
          </div>
        </section>

        {/* Strategic Paid Media Services */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Strategic Paid Media Services
          </h2>

          {/* Digital Advertising */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Digital Advertising
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Comprehensive digital ad management:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Google Ads campaigns</li>
              <li>Social media advertising</li>
              <li>Display advertising</li>
              <li>Retargeting campaigns</li>
              <li>Video advertising</li>
              <li>Native advertising</li>
              <li>Mobile advertising</li>
              <li>Programmatic advertising</li>
            </ul>
          </div>

          {/* Traditional Media */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Traditional Media
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Strategic placement in traditional channels:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Television commercials</li>
              <li>Radio advertisements</li>
              <li>Billboard campaigns</li>
              <li>Print advertising</li>
              <li>Magazine placements</li>
              <li>Newspaper ads</li>
              <li>Transit advertising</li>
              <li>Cinema advertising</li>
            </ul>
          </div>

          {/* Video Production */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Video Production
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Professional video content creation:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>TV commercials</li>
              <li>Social media videos</li>
              <li>Product demonstrations</li>
              <li>Brand stories</li>
              <li>Corporate videos</li>
              <li>Event coverage</li>
              <li>Tutorial content</li>
              <li>Testimonial videos</li>
            </ul>
          </div>

          {/* Out-of-Home Advertising */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Out-of-Home Advertising
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Strategic placement in physical spaces:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Billboard design</li>
              <li>Transit advertising</li>
              <li>Street furniture ads</li>
              <li>Point-of-purchase displays</li>
              <li>Mall advertising</li>
              <li>Airport advertising</li>
              <li>Sports venue advertising</li>
              <li>Event sponsorship materials</li>
            </ul>
          </div>
        </section>

        {/* Our Branding Process */}
        <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">Our Branding Process</h2>
            <ol className="list-decimal list-inside text-gray-400 text-base md:text-lg leading-relaxed space-y-4">
                <li>
                    <strong>Discovery:</strong> Understanding your brand&apos;s essence through market research, competitor analysis, target audience definition, brand positioning, value proposition, brand personality, goals and objectives, and current brand audit.
                </li>
                <li>
                    <strong>Strategy Development:</strong> Creating your brand framework, including brand architecture, messaging strategy, visual direction, communication plan, brand values, brand promise, target personas, and brand voice.
                </li>
                <li>
                   <strong>Design & Creation:</strong> Bringing your brand to life with logo design, color selection, typography choice, visual elements, brand materials, digital assets, print materials, and brand guidelines.
                </li>
                <li>
                    <strong>Implementation:</strong> Rolling out your brand with launch planning, asset distribution, team training, brand portal setup, quality control, feedback collection, and refinement, along with ongoing support.

                </li>
            </ol>
        </section>

        {/* Paid Media Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Paid Media Strategy
          </h2>

          {/* Campaign Planning */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Campaign Planning
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Strategic approach to media buying:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Goal setting</li>
              <li>Budget allocation</li>
              <li>Channel selection</li>
              <li>Audience targeting</li>
              <li>Message development</li>
              <li>Timeline creation</li>
              <li>KPI definition</li>
              <li>ROI projections</li>
            </ul>
          </div>

          {/* Media Buying */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">Media Buying</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Expert negotiation and placement:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Rate negotiation</li>
              <li>Placement selection</li>
              <li>Schedule optimization</li>
              <li>Budget management</li>
              <li>Performance tracking</li>
              <li>Campaign adjustment</li>
              <li>ROI optimization</li>
              <li>Cross-channel coordination</li>
            </ul>
          </div>

          {/* Performance Analysis */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Performance Analysis
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Comprehensive campaign tracking:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Real-time monitoring</li>
              <li>Performance metrics</li>
              <li>Audience insights</li>
              <li>ROI calculation</li>
              <li>Campaign optimization</li>
              <li>A/B testing</li>
              <li>Conversion tracking</li>
              <li>Attribution analysis</li>
            </ul>
          </div>
        </section>

        {/* The Mirai Advantage */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            The Mirai Advantage
          </h2>

          {/* Creative Excellence */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Creative Excellence
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We offer:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Industry-leading design</li>
              <li>Strategic thinking</li>
              <li>Creative innovation</li>
              <li>Brand storytelling</li>
              <li>Visual consistency</li>
              <li>Quality execution</li>
              <li>Attention to detail</li>
              <li>Cross-medium expertise</li>
            </ul>
          </div>

          {/* Strategic Approach */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Strategic Approach
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Our strategies include:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Data-driven decisions</li>
              <li>Market research</li>
              <li>Competitor analysis</li>
              <li>Target audience focus</li>
              <li>Channel optimization</li>
              <li>Performance tracking</li>
              <li>ROI measurement</li>
              <li>Continuous improvement</li>
            </ul>
          </div>

          {/* Full-Service Capability */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Full-Service Capability
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We provide:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>End-to-end solutions</li>
              <li>Integrated campaigns</li>
              <li>Cross-channel coordination</li>
              <li>Consistent messaging</li>
              <li>Quality control</li>
              <li>Project management</li>
              <li>Timeline adherence</li>
              <li>Budget optimization</li>
            </ul>
          </div>
        </section>

        {/* Why Choose Mirai Group */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Why Choose Mirai Group
          </h2>

          {/* Comprehensive Solutions */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Comprehensive Solutions
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We handle every aspect of your branding and advertising needs:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Brand development</li>
              <li>Asset creation</li>
              <li>Media planning</li>
              <li>Campaign execution</li>
              <li>Performance tracking</li>
              <li>Strategy refinement</li>
              <li>Ongoing support</li>
              <li>Brand evolution</li>
            </ul>
          </div>

          {/* Results-Focused */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Results-Focused
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We measure success through:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Brand awareness</li>
              <li>Market penetration</li>
              <li>Audience engagement</li>
              <li>Lead generation</li>
              <li>Sales growth</li>
              <li>ROI metrics</li>
              <li>Brand equity</li>
              <li>Market position</li>
            </ul>
          </div>

          {/* Innovation & Creativity */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Innovation & Creativity
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              We stay ahead of trends with:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg leading-relaxed">
              <li>Creative innovation</li>
              <li>Technology integration</li>
              <li>Market insights</li>
              <li>Design trends</li>
              <li>Media opportunities</li>
              <li>Channel optimization</li>
              <li>Format exploration</li>
              <li>Strategic thinking</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Let&apos;s create something extraordinary together. Contact us to
            discuss how we can help build and amplify your brand.
          </p>
          <Link
            href="/contact"
            className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300"
          >
            Contact Us
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Schedule a branding consultation
          </p>
        </section>

        {/* FAQs */}
        <section className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-custom-tan">
            FAQs
          </h2>
          <dl className="text-left">
              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">
                  How long does the branding process take?
                </dt>
                <dd className="text-gray-400">
                  A complete brand development typically takes 6-8 weeks, though
                  the timeline varies based on project scope.
                </dd>
              </div>
              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">
                  Do you handle all aspects of production?
                </dt>
                <dd className="text-gray-400">
                  Yes, we manage everything from design to production, ensuring
                  quality and consistency across all materials.
                </dd>
              </div>
              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">
                  Can you work with existing brand guidelines?
                </dt>
                <dd className="text-gray-400">
                  Absolutely! We can work within existing guidelines or help
                  evolve your brand while maintaining its core identity.
                </dd>
              </div>
              <div className="mb-4">
                <dt className="text-lg font-semibold text-white">
                  How do you measure advertising success?
                </dt>
                <dd className="text-gray-400">
                  We track multiple metrics including reach, engagement,
                  conversions, and ROI across all channels.
                </dd>
              </div>
          </dl>
        </section>
      </div>
    </div>
  );
}