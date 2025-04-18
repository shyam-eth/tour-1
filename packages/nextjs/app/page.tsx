"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Marker from "../components/Markers";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const scrollToEvents = useCallback(() => {
    document.getElementById("events-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -top-[75px] bg-[#FFE7B5]">
        <Image
          src="/assets/background.png"
          alt="Background"
          fill
          className="hidden md:block object-contain object-top"
          priority
          sizes="100vw"
          quality={100}
        />
        <Image
          src="/assets/mobile-bg.png"
          alt="Background Mobile"
          fill
          className="block md:hidden object-contain object-top"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 mx-4 lg:mx-10">
        <div className="hero min-h-[90vh]">
          <div
            className="hero-content flex-col lg:flex-row-reverse transition-transform duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <div className="lg:w-2/3">
              <Image
                src="/assets/airship-2.png"
                alt="Airship"
                width={1200}
                height={1200}
                className=""
                sizes="(max-width: 1000px) 100vw, 50vw"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="mb-4">
                <Image src="/assets/eth-symbol.svg" alt="Ethereum Logo" width={40} height={40} className="opacity-80" />
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-black">
                Ethereum <br /> on Tour
              </h1>
              <p className="py-3 text-xl text-black">Bringing Ethereum curriculum, tools, and mentorship to you!</p>
              <button
                className="bg-sky-200 hover:bg-sky-300 text-gray-800 px-6 py-2 rounded-[32px] border-none font-ppwriter font-normal"
                onClick={scrollToEvents}
              >
                Follow our next dates ↓
              </button>
            </div>
          </div>
        </div>

        {/* New Map Section */}
        <div className="container mx-auto px-4 lg:py-20 py-10">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center mb-10">Upcoming Locations</h2>
            <div
              className="relative w-full max-w-4xl transition-transform duration-1000 ease-out"
              style={{
                transform: `translateY(${scrollY * -0.03}px)`,
              }}
            >
              <Image
                src="/assets/map.png"
                alt="Tour Map"
                width={1200}
                height={800}
                className="w-full h-auto mt-5"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              {/* Small Airship */}
              <div
                className="absolute bottom-22 lg:bottom-3 right-5 w-24 lg:w-32 transition-transform duration-1000 ease-out"
                style={{
                  transform: `translateY(${scrollY * -0.05}px)`,
                }}
              >
                <Image
                  src="/assets/airship-3.png"
                  alt="Small Airship"
                  width={260}
                  height={260}
                  className="w-full h-auto"
                />
              </div>

              {/* Map Markers */}
              <Marker left="24%" top="39%" label="Lawrence" />
              <Marker left="22%" top="38%" label="Boulder" />
              <Marker left="46.5%" top="35.5%" label="Oxford" />
              <Marker left="27%" top="35%" label="Urbana-Champaign" />
              <Marker left="20%" top="41%" label="Los Angeles" />
              <Marker left="75%" top="46%" label="Taipei" />
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div id="events-section" className="container mx-auto px-4 py-12 mb-16">
          <h2 className="text-4xl font-bold mb-8 font-ppwriter">Next events:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 bg-[#f5ce81] rounded-t-[24px] h-40">
                <div className="text-lg">Mar 9</div>
                <h3 className="font-bold text-[24px] leading-7 mt-1">Virtual Office Hours</h3>
                <p className="text-gray-700 m-0 p-0">Kansas University Blockchain Club</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 mt-0">Open office hours on Zoom with the KU Blockchain Club.</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 bg-[#f5ce81] rounded-t-[24px] h-40">
                <div className="text-lg">Apr 1</div>
                <h3 className="font-bold text-[24px] leading-7 mt-1">Speedrun Ethereum Workshop</h3>
                <p className="text-gray-700 m-0 p-0">ETHTaipei</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 mt-0">
                  We&apos;ll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of
                  one-shotting.
                </p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 bg-[#f5ce81] rounded-t-[24px] h-40">
                <div className="text-lg">Apr 16</div>
                <h3 className="font-bold text-[24px] leading-7 mt-1">In-Person Office Hours</h3>
                <p className="text-gray-700 m-0 p-0">Colorado University Boulder</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 mt-0"> Open office hours IRL at CU Boulder.</p>
              </div>
            </div>

            {/* Event Card 4 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 bg-[#f5ce81] rounded-t-[24px] h-40">
                <div className="text-lg">Apr 22</div>
                <h3 className="font-bold text-[24px] leading-7 mt-1">Virtual Speedrun Ethereum Workshop</h3>
                <p className="text-gray-700 m-0 p-0">University of Illinois, Urbana-Champaign</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 mt-0">
                  We&apos;ll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of
                  one-shotting.
                </p>
              </div>
            </div>

            {/* Event Card 5 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 bg-[#f5ce81] rounded-t-[24px] h-40">
                <div className="text-lg">Apr 24</div>
                <h3 className="font-bold text-[24px] leading-7 mt-1">Virtual Speedrun Ethereum Workshop</h3>
                <p className="text-gray-700 m-0 p-0">University of Southern California</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 mt-0">
                  We&apos;ll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of
                  one-shotting.
                </p>
              </div>
            </div>

            {/* Event Card 6 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 bg-[#f5ce81] rounded-t-[24px] h-40">
                <div className="text-lg">Apr 25</div>
                <h3 className="font-bold text-[24px] leading-7 mt-1">Virtual Speedrun Ethereum Workshop</h3>
                <p className="text-gray-700 m-0 p-0">Oxford University</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 mt-0">
                  We&apos;ll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of
                  one-shotting.
                </p>
              </div>
            </div>

            {/* Event Card 7 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 bg-[#f5ce81] rounded-t-[24px] h-40">
                <div className="text-lg">Coming Soon...</div>
                <h3 className="font-bold text-[24px] leading-7 mt-1">Your University Here</h3>
                <p className="text-gray-700 m-0 p-0"></p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 mt-0">
                  We are traveling all over the world to bring Ethereum education to you!
                </p>
                <button
                  className="bg-[#f5ce81] text-gray-800 px-6 py-2 rounded-[32px] hover:bg-[#f3d494] transition-colors font-ppwriter"
                  onClick={() => (window.location.href = "mailto:university@ethereum.foundation")}
                >
                  Email us!
                </button>
                <button
                  className="m-2 bg-[#f5ce81] text-gray-800 px-6 py-2 rounded-[32px] hover:bg-[#f3d494] transition-colors font-ppwriter"
                  onClick={() =>
                    window.open(
                      "https://cryptpad.fr/form/#/2/form/view/RQme15gwpaycGeocic47okNWlJj6q-FcxVwL7gKncXI/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Sign up!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
