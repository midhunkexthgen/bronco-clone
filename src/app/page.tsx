import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    title: "Play the hand you&aposre dealt.",
    description:
      "Bronco doesn&apost shy away from antiquated and siloed industrial data. Bronco ships applications that don&apost assume any prerequisites and dedicates R&D towards making AI systems useful for companies of all data maturity levels.",
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
      "Bronco is customer-first, not AI-first. Bronco&aposs systems are always learning from real-world deployments and feedback.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full py-3 px-6 bg-white/70 backdrop-blur-md z-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-12">
            <Link href="/">
              <Image
                src="./logo.svg"
                alt="Bronco Logo"
                className="h-8 w-32"
                width={500}
                height={500}
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <div className="relative group">
                <Link
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
                </Link>

                {/* <a
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
                </a> */}
              </div>
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                Company
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                Careers
              </Link>
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
                  Bronco&aposs mission is to rebuild the information layer of
                  the American industrial base, bit by bit.
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
            <h2 className="text-[60px] leading-[1.1] tracking-tight max-w-2xl text-black">
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
        <div className="max-w-[1400px] mx-auto px-6 border-t pt-12">
          <div className="grid grid-cols-3 divide-x">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col px-8 first:pl-0">
                <span className="text-sm text-gray-500 mb-8">
                  — {value.number}
                </span>
                <h3 className="text-2xl font-semibold mb-6 text-black">
                  {value.title}
                </h3>
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
        <section className="w-full bg-white">
          <div className="max-w-[1400px] mx-auto px-6 mt-32 mb-28">
            <div className="flex w-full gap-8">
              <div className="flex flex-col w-1/3 justify-between">
                <h2 className="text-[60px] leading-[1.1] tracking-tight text-black mb-32">
                  Gen AI, the
                  <br />
                  Key Enabler
                </h2>
                <p className="text-gray-600 text-xl max-w-md">
                  Generative AI will be the defining technology of the
                  post-internet era. Harnessing it is up to you.
                </p>
              </div>

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
          <div className="inline-block border-b border-l px-4 py-1 text-sm text-gray-600 mb-32 w-full">
            FUTURE
          </div>

          <div className="min-h-screen bg-white p-8 md:p-16">
            <div className="gap-16 mb-16 w-full relative flex flex-col md:flex-row">
              {/* Sticky Image Column */}
              <div className="w-full md:w-1/2 sticky top-0 h-[500px] aspect-square flex items-center justify-center">
                <div className="h-full w-full relative">
                  <Image
                    src={"./chip.png"}
                    alt="AI visualization"
                    className="w-full h-full object-cover "
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-lg" />
                </div>
              </div>

              {/* Scrollable Content Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h2 className="text-[60px] leading-[1.1] tracking-tight mb-8 text-black">
                  AI Principles
                </h2>

                <p className="text-xl text-gray-600 mb-16">
                  Bronco develops and deploys AI responsibly to its customers.
                </p>

                <div className="space-y-12">
                  {principles.map((principle, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 border-dotted border-2 p-8 rounded-lg
                  hover:border-black/50 transition-colors duration-300"
                    >
                      <SquareAsterisk className="w-8 h-8 text-2xl text-gray-500 flex-shrink-0" />

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-lg text-gray-500">
                            {principle.number}
                          </span>
                          <span className="text-lg text-gray-500">/</span>
                          <span className="text-lg font-medium text-black">
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
        </div>
      </section>

      <div className=" bg-black text-white relative ">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Top label */}
          {/* <div className="absolute top-8 left-8">
          <span className="text-sm uppercase tracking-wider">Hiring</span>
        </div> */}
          <div className="inline-block border-b border-l border-gray-800 px-4 py-1 text-base text-gray-600 mt-14 w-full">
            HIRING
          </div>

          {/* Main content container */}
          <div className=" flex items-center">
            <div className="w-full mx-auto px-8 grid grid-cols-2 gap-24 ">
              {/* Left column */}
              <div className="flex flex-col justify-between h-[470px]">
                <h1 className="text-7xl font-light mb-auto pt-32">Join Us</h1>
                <div className="mb-16">
                  <a
                    href="#careers"
                    className="inline-block text-lg border-b border-white pb-1 hover:opacity-80 transition-opacity"
                  >
                    Careers →
                  </a>
                </div>
              </div>

              {/* Right column */}
              <div className="pt-32 h-[470px] flex flex-col justify-between ">
                <h2 className="text-2xl font-light mb-8">
                  WORK ON WHAT MATTERS
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  We are always looking for exceptional people to join us on the
                  frontier. Our team includes ML researchers, distributed
                  systems engineers, big data analysts, and former manufacturing
                  C-Suite. We work across disciplines, get our hands dirty, and
                  are laser-focused on delivering success to the people and
                  firms we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-800 mb-16"></div>

          <div className="grid grid-cols-5 gap-8 mb-16">
            {/* Logo Column - Updated with better contrast */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center opacity-100">
                <Image
                  src="./bottom_logo.svg"
                  alt="Bronco Logo"
                  className="h-8 brightness-100 contrast-100"
                  width={500}
                  height={500}
                />
              </Link>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-gray-500 text-sm mb-6">Contact</h3>
              <a
                href="mailto:contact@bronco.ai"
                className="block text-sm text-white hover:text-gray-300"
              >
                contact[at]bronco.ai
              </a>
              <a
                href="/demo"
                className="block text-sm text-white hover:text-gray-300"
              >
                Schedule a demo
              </a>
            </div>

            {/* Systems Column */}
            <div className="space-y-4">
              <h3 className="text-gray-500 text-sm mb-6">Systems</h3>
              <a
                href="/procurement"
                className="block text-sm text-white hover:text-gray-300"
              >
                AI Procurement Agent
              </a>
              <a
                href="/os"
                className="block text-sm text-white hover:text-gray-300"
              >
                Stampede OS
              </a>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-gray-500 text-sm mb-6">Company</h3>
              <a
                href="/company"
                className="block text-sm text-white hover:text-gray-300"
              >
                Company
              </a>
              <a
                href="/careers"
                className="block text-sm text-white hover:text-gray-300"
              >
                Careers
              </a>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="text-gray-500 text-sm mb-6">Legal</h3>
              <a
                href="/terms"
                className="block text-sm text-white hover:text-gray-300"
              >
                Terms of use
              </a>
              <a
                href="/privacy"
                className="block text-sm text-white hover:text-gray-300"
              >
                Privacy policy
              </a>
            </div>
          </div>

          {/* Copyright - Updated with proper opacity */}
          <div className="text-sm text-gray-500">
            © 2024 Bronco AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
