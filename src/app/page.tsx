// app/page.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedLogo from "./components/AnimatedLogo";
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
    const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
    const mainContentRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null); // Ref for the intro container


    const handleAnimationEnd = () => {
        setTimeout(() => {
            setIntroAnimationComplete(true);
            if (introRef.current) {
                introRef.current.style.display = "none"
            }
        }, 2000);
    };

    useEffect(() => {
        const fadeInAnimation = mainContentRef.current?.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            {
                duration: 1000,
                easing: "ease-in-out",
                fill: "forwards",
            }
        );

        return () => {
            if (fadeInAnimation) {
                fadeInAnimation.cancel();
            }
        };
    }, []);

    return (
        <>
            {/* Intro Animation Container - Use ref */}
            <div
    ref={introRef}
    className="intro-animation fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50"
    style={{visibility: 'hidden'}}
>
                <AnimatedLogo onAnimationEnd={handleAnimationEnd} />
            </div>
            {/* <Header /> */}
            <main
                className={`flex flex-col  min-h-screen  px-4 md:px-16  transition-opacity duration-1000 ${introAnimationComplete ? "opacity-100" : "opacity-0"
                    }`}
                ref={mainContentRef}
            >
                {/* Hero Section with Image */}
                <section className="relative pt-16 md:pt-20">
                    {/* Background Image Container */}
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src="/futuristic.webp" // Path to your image
                            alt="Futuristic City"
                            fill
                            sizes="100vw"
                            className="object-cover" // Cover the entire container
                            priority // Add priority to improve LCP
                        />
                    </div>

                    {/* Hero Content */}
                    <div className="relative container mx-auto text-center py-24 md:py-48">
                        {/* <p className="text-custom-tan text-lg md:text-xl mb-4 uppercase tracking-widest">
                            Welcome to the Future
                        </p> */}
                         {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-12">
                            Mirai means Future
                        </h1> */}

                    </div>
                </section>

                {/* Marketing Section */}
                <section className="text-center py-16 md:py-24 bg-black relative z-10">
                  <p className="text-custom-tan text-lg md:text-xl mb-4 uppercase tracking-widest">
                            Welcome to the Future
                        </p>
                    <h1 className="font-rajdhani text-4xl md:text-6xl font-bold text-white mb-4">
                        Marketing the Modern Era
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Box 1 */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                            <div className="mb-4">
                                {/* Replace with your actual icon (e.g., an SVG or image) */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" data-slot="icon" className="w-6 h-6 text-custom-tan mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                            </div>
                            <h3 className="text-xl font-semibold mb-2">Strategic Innovation</h3>
                            <p className="text-gray-400">
                                Transform your marketing approach with data-driven strategies and
                                innovative solutions that deliver measurable results.
                            </p>
                        </div>

                        {/* Feature Box 2 */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                            <div className="mb-4">{/* Container for icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" data-slot="icon" className="w-6 h-6 text-custom-tan mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H6a1.5 1.5 0 0 0-1.5 1.5v1.372c0 .212.051.413.14.586l4.384 7.672c.03.052.067.1.108.14L10.5 13.5H18a1.5 1.5 0 0 0 1.5-1.5v-1.875c0-.278-.07-.546-.197-.785a5.23 5.23 0 0 0-.699-1.279 5.203 5.203 0 0 0-1.16-.863l-3.98 2.296a3.75 3.75 0 0 1-5.287-2.063l-.215-.377Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
                            <p className="text-gray-400">
                                Stand out in the digital landscape with compelling content and
                                creative campaigns that resonate with your audience.
                            </p>
                        </div>

                        {/* Feature Box 3 */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" data-slot="icon" className="w-6 h-6 text-custom-tan mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25a2.25 2.25 0 0 0 2.25-2.25V3.75a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 01.5 3.75v4.5A2.25 2.25 0 0 03.75 10.5H12l-2.25 7.5H15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Growth Acceleration</h3>
                            <p className="text-gray-400">
                                Scale your business with proven marketing techniques and
                                cutting-edge technology integration.
                            </p>
                        </div>
                    </div>
                    {/* <p className="text-custom-tan text-lg md:text-xl max-w-2xl mx-auto mt-8">
                        &quot;Your digital success story starts here. We&apos;re not
                        just another marketing agency – we&apos;re your partners in
                        navigating the future of digital business, combining technical
                        expertise with marketing innovation to drive real
                        results.&quot;
                    </p> */}
                    <div className="w-2/3 md:w-1/2 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto my-8"></div>
                </section>

                <div className="bg-black">
                    {/* Removed old hero section content */}
                    {/* About Mirai Section */}
                    <section className="text-center py-16 md:py-24 relative z-10 bg-black">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            About Mirai
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                            At Mirai Group, we understand that the digital landscape never
                            stands still – and neither do we. Our team of seasoned
                            developers and marketers brings decades of combined experience
                            to every project, infusing each solution with the perfect blend
                            of proven strategies and innovative technologies. We don&apos;t
                            just help businesses adapt to the digital future – we help them
                            lead it.
                        </p>
                    </section>

                    {/* Our Services Section */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-tan mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">Web Design & Development</h3>
              <p className="text-gray-400 mb-4">
                Create stunning, high-performance websites that convert visitors into customers.
              </p>
              <Link href="/web-design" className="text-custom-tan hover:text-amber-300">
                Learn More &rarr;
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-400 mb-4">
                Improve your search rankings and attract qualified organic traffic.
              </p>
              <Link href="/seo" className="text-custom-tan hover:text-amber-300">
                Learn More &rarr;
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">Email & Social Media Marketing</h3>
              <p className="text-gray-400 mb-4">
                Engage your audience and build brand loyalty with effective campaigns.
              </p>
              <Link href="/email-marketing" className="text-custom-tan hover:text-amber-300">
                Learn More &rarr;
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">Branding & Paid Media</h3>
              <p className="text-gray-400 mb-4">
                Develop a strong brand identity and reach your target audience with paid advertising.
              </p>
              <Link href="/branding" className="text-custom-tan hover:text-amber-300">
                Learn More &rarr;
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">IT Consulting</h3>
              <p className="text-gray-400 mb-4">
                Optimize your technology infrastructure and leverage the latest innovations.
              </p>
              <Link href="/it-consulting" className="text-custom-tan hover:text-amber-300">
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </section>

                    {/* Contact Us Section */}
                    <section className="text-center py-16 md:py-32 relative z-10 bg-black">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-8">
                            Ready to transform your digital presence? Let&apos;s write your
                            success story together. Whether you&apos;re looking to revamp
                            your website or create a comprehensive marketing strategy, our
                            team is here to turn your vision into reality. Take the first
                            step toward your digital future – reach out today.
                        </p>
                        <Link
            href="/contact"
            className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300"
          >
            Contact Us
          </Link>
                    </section>
                </div>
            </main>
            {/* <Footer /> */}
        </>
    );
}