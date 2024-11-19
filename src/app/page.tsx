import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

import React from "react";
import { ArrowRight, SquareAsterisk } from "lucide-react";

const values = [
  {
    number: "01",
    title: "0 to 1, then 1 to 100.",
    description:
      "Bronco is at the frontier with Gen AI, doing things that have never been done before. Bronco moves fast to deliver value, and then iterates continuously so our customers can reach victory.",
  },
  {
    number: "02",
    title: "Play the hand you're dealt.",
    description:
      "Bronco doesn't shy away from antiquated and siloed industrial data. Bronco ships applications that don't assume any prerequisites and dedicates R&D towards making AI systems useful for companies of all data maturity levels.",
  },
  {
    number: "03",
    title: "The buck stops here.",
    description:
      "Bronco customers work hard enough running the companies that keep the world turning. The team works tirelessly to deliver them the wins they demand. Bronco is online, onsite and on call.",
  },
];

const principles = [
  {
    number: "01",
    title: "TRUST BUT VERIFY",
    description:
      "Bronco builds trustworthy and auditable AI. No answer and no action happens without operators knowing why.",
  },
  {
    number: "02",
    title: "PRECISION > SPRAY AND PRAY",
    description:
      "Bronco deploys cutting edge generative AI in the highest-leverage places to deliver cold, hard ROI.",
  },
  {
    number: "03",
    title: "TAILORED TO EACH CUSTOMER",
    description:
      "Bronco deploys AI systems with rich knowledge and predefined workflows specific to each customer.",
  },
  {
    number: "04",
    title: "LOW EGO, ALWAYS LEARNING",
    description:
      "Bronco is customer-first, not AI-first. Bronco's systems are always learning from real-world deployments and feedback.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full py-3 px-6 bg-white/70 backdrop-blur-md z-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-12">
            <a href="/" className="flex items-center">
              <img src="./logo.svg" alt="Bronco Logo" className="h-8" />
            </a>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 flex items-center"
                >
                  Systems
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Company
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Careers
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-black text-white px-6 py-2 rounded flex items-center space-x-2 hover:bg-gray-900 transition-colors">
            <span>Schedule a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          >
            <source src="./videos/initial_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6">
          <div className="h-full flex flex-col justify-center">
            {/* Left Content */}
            <div className="flex justify-between items-end w-full">
              <div className="max-w-2xl">
                <h1 className="text-white text-[85px] font-normal leading-[1.1] tracking-tight mb-0">
                  Artificial
                  <br />
                  Intelligence for
                  <br />
                  American
                  <br />
                  Industry
                </h1>
              </div>

              {/* Right Content */}
              <div className="max-w-md mb-32">
                <p className="text-white/90 text-xl mb-8">
                  Bronco's mission is to rebuild the information layer of the
                  American industrial base, bit by bit.
                </p>
                <button className="text-white flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <span>Schedule a Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Layer Section */}
      <section className="w-full bg-white pt-32 pb-0">
        {/* Values Label */}
        <div className="max-w-[1400px] mx-auto px-6 pb-32">
          <div className="inline-block border-b border-l px-4 py-1 text-sm text-gray-600 mb-10 w-full">
            VALUES
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col space-y-12">
            {/* Heading */}
            <h2 className="text-[60px] leading-[1.1] tracking-tight max-w-2xl">
              Rebuilding the
              <br />
              Information Layer
            </h2>

            {/* Video */}
            <div className="relative w-full pb-[56.25%]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              >
                <source src="./videos/rebuilding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white ">
        {/* Values Grid */}
        <div className="max-w-[1400px] mx-auto px-6 mt-12 border-t pt-12">
          <div className="grid grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-sm text-gray-500 mb-8">
                  — {value.number}
                </span>
                <h3 className="text-2xl font-normal mb-6">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Label */}
        <div className="max-w-[1400px] mx-auto px-6 pt-32">
          <div className="inline-block border-b border-l px-4 py-1 text-sm text-gray-600 mb-10 w-full">
            DISRUPTIVE
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        {/* Label */}
        {/* <div className="max-w-[1400px] mx-auto px-6">
          <div className="inline-block border-b border-l border-gray-300 px-4 py-1">
            <span className="text-sm text-gray-600 tracking-wide uppercase font-mono">
              DISRUPTIVE
            </span>
          </div>
        </div> */}

        <section className="w-full bg-white">
          {/* Content Grid */}
          <div className="max-w-[1400px] mx-auto px-6 mt-32 mb-28">
            <div className="flex w-full gap-8">
              {/* Left Column - Text */}
              <div className="flex flex-col w-1/3 justify-between">
                <h2 className="text-[60px] leading-[1.1] tracking-tight mb-32">
                  Gen AI, the
                  <br />
                  Key Enabler
                </h2>
                <p className="text-gray-600 text-xl max-w-md">
                  Generative AI will be the defining technology of the
                  post-internet era. Harnessing it is up to you.
                </p>
              </div>

              {/* Right Column - Video */}
              <div className="relative aspect-[6/3] w-2/3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                >
                  <source src="./videos/wave.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Label */}
          <div className="inline-block border-b border-l px-4 py-1 text-sm text-gray-600 mb-32 w-full">
            FUTURE
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-2 gap-16 mb-16">
            {/* Left Column - Image */}
            <div className="flex justify-center items-center relative aspect-square h-[500px]">
              <img
                src={"./chip.png"}
                alt="AI visualization"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Right Column - Text Content */}
            <div className="flex flex-col h-[500px]">
              <h2 className="text-[60px] leading-[1.1] tracking-tight mb-8">
                AI Principles
              </h2>

              <p className="text-xl text-gray-600 mb-16">
                Bronco develops and deploys AI responsibly to its customers.
              </p>

              {/* Principles List */}
              <div className="space-y-12">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 border-dotted border-2 p-8"
                  >
                    {/* <span className="text-2xl">*</span> */}
                    <SquareAsterisk className="w-8 h-8 text-2xl" />

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg text-gray-500">
                          {principle.number}
                        </span>
                        <span className="text-lg">/</span>
                        <span className="text-lg font-medium">
                          {principle.title}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed max-w-xl">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
