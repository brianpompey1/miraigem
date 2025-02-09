// app/page.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedLogo from "./components/AnimatedLogo";
// import Header from "./components/Header";  <-- REMOVE THIS
// import Footer from "./components/Footer";  <-- REMOVE THIS

export default function Home() {
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

    const handleAnimationEnd = () => {
      // Delay showing the main content *after* the logo fade-out
      setTimeout(() => {
        setIntroAnimationComplete(true);
      }, 500); // 500ms delay - match the logo fade-out duration
    };


  useEffect(() => {
    // Remove the timeout that was directly setting introAnimationComplete
    // The animation end is now handled by the callback
    setIsClient(true);

    const fadeInAnimation = mainContentRef.current?.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards",
        delay: 3000, // Adjust if necessary
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
      {!introAnimationComplete && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
           <AnimatedLogo onAnimationEnd={handleAnimationEnd} />
        </div>
      )}
      {introAnimationComplete && (
        <>
          {/* <Header />  <-- REMOVE THIS */}
          <main
            className="flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 md:px-16"
            ref={mainContentRef}
          >
            {/* Hero Section */}
            <section className="text-center py-16 md:py-32">
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

            {/* About Mirai Section */}
            <section className="text-center py-16 md:py-24 bg-black">
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
            <section className="text-center py-16 md:py-32 bg-black">
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
          </main>
          {/* <Footer />  <-- REMOVE THIS */}
        </>
      )}
    </>
  );
}