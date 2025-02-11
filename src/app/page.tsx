// app/page.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedLogo from "./components/AnimatedLogo";
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null); // Add a ref for the intro container


  const handleAnimationEnd = () => {
    setTimeout(() => {
      setIntroAnimationComplete(true);
        if(introRef.current){
            introRef.current.style.display = "none"
        }
    }, 2000); // 3000ms total delay (2s draw + 0.5s pause + 0.5s fade)
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
        className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50"
      >
        <AnimatedLogo onAnimationEnd={handleAnimationEnd} />
      </div>
      <main
        className={`flex flex-col  min-h-screen  px-4 md:px-16  transition-opacity duration-1000 ${
          introAnimationComplete ? "opacity-100" : "opacity-0"
        }`}
        ref={mainContentRef}
      >
         {/* Hero Section with Image */}
          <section className="relative  pt-16 md:pt-20">
            {/* Background Image Container */}
             <div className="absolute inset-0 -z-10">
              <Image
                src="/future-city.png" // Path to your image
                alt="Futuristic City"
                fill
                sizes="100vw"
                className="object-cover" // Cover the entire container
                priority // Add priority to improve LCP
              />
            </div>

            {/* Overlay Text */}
           <div className="relative  flex justify-center items-center h-[50vh] ">
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
                  Mirai means Future
              </h1>
            </div>
          </section>
        <div className = "bg-black">
        <section className="text-center py-16 md:py-32 relative z-10 bg-black">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Marketing
                <br />
                for modern era
            </h1>
            <p className="text-custom-tan text-lg md:text-xl max-w-2xl mx-auto">
                &quot;Your digital success story starts here. We&apos;re not
                just another marketing agency – we&apos;re your partners in
                navigating the future of digital business, combining technical
                expertise with marketing innovation to drive real
                results.&quot;
            </p>
            <div className="w-2/3 md:w-1/2 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto my-8"></div>
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
            <button className="bg-custom-tan text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition duration-300">
            GET IN TOUCH
            </button>
        </section>
        </div>
      </main>
    </>
  );
}