"use client";
import Image from "next/image";

const logos = [
  "/logos/sbi.png",
  "/logos/axis.png",
  "/logos/uti.png",
  "/logos/franklin.png",
  "/logos/canara.png",
  "/logos/motilal.png",
  "/logos/nippon.png",
  "/logos/hdfc.png",
  "/logos/tata.png",
  "/logos/icici.png",
  "/logos/AngelOne.png",
  "/logos/grow.png",
  "/logos/dsp.png",
  "/logos/ab.png",
  "/logos/kotak.png"
];

export default function LogoScroller() {
  return (
    <div className="overflow-hidden py-12 bg-white">
      
      {/* Heading */}
      <p className="text-center text-gray-500 text-sm mb-8">
        Trusted by leading mutual fund partners
      </p>

      <div className="flex w-max animate-scroll gap-16 items-center">
        
        {/* First set */}
        {logos.map((logo, i) => (
          <div
            key={i}
            className="h-40 w-60 flex items-center justify-center bg-white rounded-xl shadow-sm px-4"
          >
            <Image
              src={logo}
              alt="company logo"
              width={160}
              height={80}
              className="object-contain max-h-full max-w-full hover:opacity-100 transition duration-300"
            />
          </div>
        ))}

        {/* Duplicate for infinite effect */}
        {logos.map((logo, i) => (
          <div
            key={`dup-${i}`}
            className="h-40 w-60 flex items-center justify-center bg-white rounded-xl shadow-sm px-4"
          >
            <Image
              src={logo}
              alt="company logo"
              width={160}
              height={80}
              className="object-contain max-h-full max-w-full hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}