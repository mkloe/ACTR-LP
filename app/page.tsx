"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_60%)]" />
      
      <header className="relative z-50 mx-auto w-full max-w-7xl px-4 pt-2 md:px-12 lg:px-20">
        <div className="flex items-center justify-end rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <button
            onClick={handleDownloadClick}
            className="mx-3 my-2 cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-100 md:mx-6 md:my-4 md:px-8 md:py-3 md:text-base"
          >
            Download the app
          </button>
        </div>
      </header>
      
      <main className="relative z-10 mx-auto flex flex-1 max-w-7xl items-center justify-center px-6 pt-8 md:px-12 md:pt-0 lg:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          <div
            className={`flex flex-col items-center space-y-8 text-center transition-all duration-1000 ease-out md:space-y-10 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Your partner for learning lines.
            </h1>
            
            <p className="max-w-lg text-base leading-relaxed text-gray-300 md:text-lg lg:text-xl">
              ActMate helps actors rehearse scenes, memorize faster, and stay ready for every audition.
            </p>
            
            <button
              onClick={handleDownloadClick}
              className="group relative cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                width={300}
                height={100}
                className="h-auto w-[200px] md:w-auto"
              />
            </button>
          </div>

          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/15 via-purple-600/20 to-purple-500/15 blur-3xl md:-inset-12" />
              <div className="relative">
                <Image
                  src="/IMG_5682-left.png"
                  alt="ActMate app preview"
                  width={400}
                  height={800}
                  className="relative z-10 w-full max-w-[240px] drop-shadow-[0_20px_60px_rgba(139,92,246,0.3)] md:max-w-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative mx-4 rounded-2xl border border-white/10 bg-gray-900/95 p-8 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 cursor-pointer text-gray-400 transition-colors hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-center text-xl font-semibold text-white">
              Under development
            </p>
            <p className="mt-4 text-center text-gray-300">
              The app is currently under development. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
