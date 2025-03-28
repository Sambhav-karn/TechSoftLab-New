import React, { useState, useEffect } from 'react';
import '../App.css';
import WebDev from '../Images/webimg.png';
import AppDev from '../Images/AppDev.png';
import DataAna from '../Images/DataAna.png';
import Hardware from '../Images/Hardware.png';
import POM from '../Images/POM.png';
import idea from '../Images/idea.png';
import Process from '../Images/Process.png';
import design from '../Images/design.png';
import development from '../Images/development.png';
import testing from '../Images/testing.png';
import Deployment from '../Images/Deployment.png';
import support from '../Images/support.png';
import vishay from '../Images/vishay.jpg';
import Sambhav from '../Images/Sambhav.jpg';
import Sanny from '../Images/Sanny.jpg';
import { HiArrowUpRight } from 'react-icons/hi2';
import EnqForm from '../enqForm/EnqForm';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      img: 'https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-01.jpg',
      quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'Triveni Media',
      role: 'CEO',
    },
    {
      img: 'https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-02.jpg',
      quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: 'The Helpingone Foundation',
      role: 'Owner',
    },
  ];

  React.useEffect(() => {
    const autorotate = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(autorotate);
  }, [testimonials.length]);

  return (
    <div className="w-full max-w-3xl mx-auto text-center py-6 sm:py-8 md:py-10 px-4">
      <h1 className="uppercase text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#292D55] mb-6 sm:mb-8">
        What <span className="text-[#EDD2F3] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">Clients Say</span>
      </h1>

      <div className="relative h-24 sm:h-28 md:h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] sm:w-[360px] md:w-[480px] h-[240px] sm:h-[360px] md:h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-24 sm:h-28 md:h-32 [mask-image:linear-gradient(0deg,transparent,white_20%,white)]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 -z-10 transition-all duration-700 ease-[cubic-bezier(0.68,-0.3,0.32,1)] ${active === index ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-[60deg]'}`}
              >
                <img
                  className="relative top-8 sm:top-10 md:top-11 left-1/2 -translate-x-1/2 rounded-full w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8 md:mb-9">
        <div className="relative flex flex-col transition-all duration-150 ease-in-out">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${active === index ? 'opacity-100 translate-x-0' : 'opacity-0 absolute translate-x-4'} transition-all duration-500 ease-in-out delay-200`}
            >
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D'] px-2">
                {testimonial.quote}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 -m-1">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-2 py-1 sm:px-3 sm:py-1.5 m-1 text-xs sm:text-sm shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ${active === index ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'}`}
            onClick={() => setActive(index)}
          >
            <span>{testimonial.name}</span>{' '}
            <span className={active === index ? 'text-indigo-200' : 'text-slate-300'}>-</span>{' '}
            <span>{testimonial.role}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// New OurTeam Component with Slider
const OurTeam = () => {
  const teamMembers = [
    {
      show: true,
      img: `${Sambhav}`,
      heading: 'Meet Our Lead Developer',
      quote: `Innovating today for a better tomorrow, powered by technology`,
      name: 'Sambhav Karn',
      role: 'Co-founder & Lead Developer at Techsoft',
    },
    {
      show: true,
      img: `${vishay}`,
      heading: 'Meet Our Co-founder',
      quote: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥`,
      name: 'Vishay',
      role: 'Co-founder at Techsoft',
    },
    {
      show: true,
      img: `${Sanny}`,
      heading: 'Meet Our Hardware Product Manager',
      quote: 'Bridging user needs and technical possibilities in the physical world',
      name: 'Sanny Kumar',
      role: 'Hardware Product Manager at Techsoft',
    },
  ];

  const visibleSlides = teamMembers
    .map((member, index) => (member.show ? index : -1))
    .filter((index) => index !== -1);

  const [currentSlide, setCurrentSlide] = useState(visibleSlides.length > 0 ? visibleSlides[0] : 0);

  useEffect(() => {
    const autorotate = setInterval(() => {
      setCurrentSlide((prev) => {
        const currentIndex = visibleSlides.indexOf(prev);
        const nextIndex = (currentIndex + 1) % visibleSlides.length;
        return visibleSlides[nextIndex];
      });
    }, 7000);
    return () => clearInterval(autorotate);
  }, [visibleSlides]);

  const nextSlide = () => {
    const currentIndex = visibleSlides.indexOf(currentSlide);
    const nextIndex = (currentIndex + 1) % visibleSlides.length;
    setCurrentSlide(visibleSlides[nextIndex]);
  };

  const prevSlide = () => {
    const currentIndex = visibleSlides.indexOf(currentSlide);
    const prevIndex = (currentIndex - 1 + visibleSlides.length) % visibleSlides.length;
    setCurrentSlide(visibleSlides[prevIndex]);
  };

  if (visibleSlides.length === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto text-center py-6 sm:py-8 md:py-10 px-4">
        <h1 className="uppercase text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#292D55] mb-6 sm:mb-8">
          Our <span className="text-[#EDD2F3] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">Team</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600">No team members to display.</p>
      </div>
    );
  }

  const currentMember = teamMembers[currentSlide];

  return (
    <div className="w-full max-w-5xl mx-auto text-center py-6 sm:py-8 md:py-10 px-4">
      <h1 className="uppercase text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#292D55] mb-6 sm:mb-8">
        Our <span className="text-[#EDD2F3] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">Team</span>
      </h1>

      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 flex justify-center sm:justify-start">
            <img
              src={currentMember.img}
              alt={currentMember.name}
              className="w-48 sm:w-full sm:h-auto object-cover rounded-[50%] p-4 sm:p-8"
            />
          </div>
          <div className="w-full sm:w-3/5 p-6 sm:p-10 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{currentMember.heading}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{`"${currentMember.quote}"`}</p>
            <div className="text-base sm:text-lg font-semibold text-gray-800">{currentMember.name}</div>
            <div className="text-xs sm:text-sm text-blue-600">{currentMember.role}</div>
          </div>
        </div>
        <div className="flex justify-center gap-3 p-4">
          <button
            onClick={prevSlide}
            className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-blue-700 transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-blue-700 transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [showEnqForm, setShowEnqForm] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-violet-200 to-pink-200 py-5">
        <div>
          <h2 className="text-center text-black text-xl sm:text-2xl md:text-3xl py-2 font-semibold">
            IT Software & Hardware Consultant
          </h2>
        </div>
        <div className="text-center mt-2 sm:mt-4 md:mt-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-snug md:leading-18 uppercase font-bold text-[#292D55] [text-shadow:_-2px_-2px_0_white,_2px_-2px_0_white,_-2px_2px_0_white,_2px_2px_0_white]">
            Your Innovative <br />
            <span className="uppercase font-bold text-[#292D55] [text-shadow:_-2px_-2px_0_white,_2px_-2px_0_white,_-2px_2px_0_white,_2px_2px_0_white]">
              IT Solutions Partner
            </span>
          </h1>
          <div className="max-w-[90%] sm:max-w-[600px] md:max-w-[950px] mx-auto border-4 bg-gradient-to-r from-rose-100 to-teal-100 border-[#292D55] p-3 sm:p-4 md:p-5 rounded-3xl my-3 sm:my-4 md:my-6">
            <p className="text-justify text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 font-semibold">
              We are at the forefront of IT innovation, offering a comprehensive suite of hardware and software solutions. We partner with businesses to understand their unique challenges and deliver tailored technology that provides a competitive edge. Our expertise spans from sourcing and implementing high-performance hardware to developing scalable and user-friendly software applications, all designed to optimize your operations and fuel your success in today's digital world.
            </p>
          </div>
        </div>

        {/* Together We Create Section */}
        <section className="bg-gradient-to-r from-red-100 to-neutral-50 md:max-h-[700px] max-h-fit rounded-3xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-4 sm:p-5 md:p-6 gap-6 sm:gap-8 md:gap-10 my-10">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h2 className="uppercase text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 sm:mt-6 md:mt-10 font-bold text-[#292D55] leading-tight">
              Together <br />
              <span className="text-[#FEE4E4] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
                we create
              </span>
            </h2>
            <h2 className="font-bold my-2 sm:my-2 md:my-3 text-base sm:text-lg md:text-xl">
              with the top IT Software and Hardware Company
            </h2>
            <p className="text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              Based in Delhi, we are a dynamic IT company providing end-to-end solutions encompassing cutting-edge hardware and innovative software. We empower businesses in Delhi and beyond with reliable infrastructure, seamless integration, and tailored software applications designed to drive efficiency and growth. From robust servers and networking equipment to custom software development and cloud solutions, we are your trusted partner for all your technology needs, ensuring a future-ready IT landscape.
            </p>
            <button className="py-2 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6 bg-yellow-500 mt-4 sm:mt-6 md:mt-10 max-w-[40%] font-semibold cursor-pointer rounded-md text-sm sm:text-base md:text-lg">
              View All Services
            </button>
          </div>

          {/* Right Side */}
          <div className="mt-4 sm:mt-6 md:mt-10 pr-0 md:pr-3 overflow-y-auto max-h-[450px] sm:max-h-[500px] md:max-h-[600px]">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[20%_auto] gap-4 sm:gap-6 md:gap-2 mb-6 sm:mb-8 md:mb-10">
              <img src={WebDev} alt="Web Development" className="w-14 sm:w-16 md:w-full h-auto" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-2 md:mb-3">
                  Web Development
                </h1>
                <p className="text-justify text-xs sm:text-sm md:text-base">
                  At Techsoft Lab Services, we create websites that are both visually appealing and functionally seamless. Whether you’re a startup in need of a digital marketing advertising solution or an established business seeking a full-service advertising agency, we ensure your website meets your goals and engages your audience.
                </p>
                <button className="mt-2 uppercase flex gap-2 sm:gap-2 md:gap-3 items-center border-b border-red-500 pb-1 hover:border-blue-600 duration-200 text-xs sm:text-sm md:text-base">
                  Read More <HiArrowUpRight />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[20%_auto] gap-4 sm:gap-6 md:gap-2 mb-6 sm:mb-8 md:mb-10">
              <img src={AppDev} alt="App Development" className="w-14 sm:w-16 md:w-full h-auto" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-2 md:mb-3">
                  App Development
                </h1>
                <p className="text-justify text-xs sm:text-sm md:text-base">
                  At Techsoft Lab Services, we create websites that are both visually appealing and functionally seamless. Whether you’re a startup in need of a digital marketing advertising solution or an established business seeking a full-service advertising agency, we ensure your website meets your goals and engages your audience.
                </p>
                <button className="mt-2 uppercase flex gap-2 sm:gap-2 md:gap-3 items-center border-b border-red-500 pb-1 hover:border-blue-600 duration-200 text-xs sm:text-sm md:text-base">
                  Read More <HiArrowUpRight />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[20%_auto] gap-4 sm:gap-6 md:gap-2 mb-6 sm:mb-8 md:mb-10">
              <img src={DataAna} alt="Data Analysis" className="w-14 sm:w-16 md:w-full h-auto" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-2 md:mb-3">
                  Data Analysis & Web Automation
                </h1>
                <p className="text-justify text-xs sm:text-sm md:text-base">
                  At Techsoft Lab Services, we create websites that are both visually appealing and functionally seamless. Whether you’re a startup in need of a digital marketing advertising solution or an established business seeking a full-service advertising agency, we ensure your website meets your goals and engages your audience.
                </p>
                <button className="mt-2 uppercase flex gap-2 sm:gap-2 md:gap-3 items-center border-b border-red-500 pb-1 hover:border-blue-600 duration-200 text-xs sm:text-sm md:text-base">
                  Read More <HiArrowUpRight />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[20%_auto] gap-4 sm:gap-6 md:gap-2 mb-6 sm:mb-8 md:mb-10">
              <img src={Hardware} alt="Hardware & CCTV" className="w-14 sm:w-16 md:w-full h-auto" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-2 md:mb-3">
                  Hardware & CCTV
                </h1>
                <p className="text-justify text-xs sm:text-sm md:text-base">
                  At Techsoft Lab Services, we create websites that are both visually appealing and functionally seamless. Whether you’re a startup in need of a digital marketing advertising solution or an established business seeking a full-service advertising agency, we ensure your website meets your goals and engages your audience.
                </p>
                <button className="mt-2 uppercase flex gap-2 sm:gap-2 md:gap-3 items-center border-b border-red-500 pb-1 hover:border-blue-600 duration-200 text-xs sm:text-sm md:text-base">
                  Read More <HiArrowUpRight />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[20%_auto] gap-4 sm:gap-6 md:gap-2">
              <img src={POM} alt="Project Management" className="w-14 sm:w-16 md:w-full h-auto" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-2 md:mb-3">
                  Project & Operation Management
                </h1>
                <p className="text-justify text-xs sm:text-sm md:text-base">
                  At Techsoft Lab Services, we create websites that are both visually appealing and functionally seamless. Whether you’re a startup in need of a digital marketing advertising solution or an established business seeking a full-service advertising agency, we ensure your website meets your goals and engages your audience.
                </p>
                <button className="mt-2 uppercase flex gap-2 sm:gap-2 md:gap-3 items-center border-b border-red-500 pb-1 hover:border-blue-600 duration-200 text-xs sm:text-sm md:text-base">
                  Read More <HiArrowUpRight />
                </button>
                <div className="bg-white my-7 px-7 py-4 rounded-xl">
                  <p className="text-justify font-semibold text-xl">
                    Ready to take the next step? Request additional services or start your next project with the top digital marketing company in India today.
                  </p>
                  <button
                    className="py-2 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6 bg-yellow-500 mt-4 sm:mt-6 md:mt-10 max-w-[40%] font-semibold cursor-pointer rounded-md text-sm sm:text-base md:text-lg"
                    onClick={() => setShowEnqForm(true)}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="my-10 px-4">
          <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl text-center font-extrabold text-[#292D55]">
            Our <span className="text-[#EDD2F3] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">Process</span>
          </h1>
          <p className="text-center my-4 text-base sm:text-lg">
            See how our smooth, step-by-step process can turn your ideas into practical digital <br className="hidden sm:block" />solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center p-0 sm:p-5">
            <div className="space-y-5">
              <div className="p-3 bg-gradient-to-r from-rose-100 to-teal-100 border-[#292D55] border-2 rounded-xl">
                <div className="flex justify-between">
                  <img src={idea} alt="Planning" className="w-10 sm:w-12" />
                  <h1 className="text-4xl sm:text-5xl text-[#D0FAF1] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
                    1
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold mt-3 text-base sm:text-lg">
                    Planning & Requirements Gathering
                  </h1>
                  <p className="text-justify text-sm sm:text-base">
                    Identifying the what and how of the project.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-teal-100 to-rose-100 border-[#292D55] border-2 rounded-xl">
                <div className="flex justify-between">
                  <img src={design} alt="Planning" className="w-10 sm:w-12" />
                  <h1 className="text-4xl sm:text-5xl text-[#FAE6E7] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
                    2
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold mt-3 text-base sm:text-lg">Design</h1>
                  <p className="text-justify text-sm sm:text-base">
                    Shaping ideas into tangible realities.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-rose-100 to-teal-100 border-[#292D55] border-2 rounded-xl">
                <div className="flex justify-between">
                  <img src={development} alt="Planning" className="w-10 sm:w-12" />
                  <h1 className="text-4xl sm:text-5xl text-[#D0FAF1] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
                    3
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold mt-3 text-base sm:text-lg">Development</h1>
                  <p className="text-justify text-sm sm:text-base">
                    Building and implementing the designed solution.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full hidden md:block">
              <img src={Process} alt="" className="w-full" />
            </div>

            <div className="space-y-5">
              <div className="p-3 bg-gradient-to-r from-teal-100 to-rose-100 border-[#292D55] border-2 rounded-xl">
                <div className="flex justify-between">
                  <img src={testing} alt="Planning" className="w-10 sm:w-12" />
                  <h1 className="text-4xl sm:text-5xl text-[#FAE6E7] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
                    4
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold mt-3 text-base sm:text-lg">Testing</h1>
                  <p className="text-justify text-sm sm:text-base">
                    Verifying the solution meets requirements.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-rose-100 to-teal-100 border-[#292D55] border-2 rounded-xl">
                <div className="flex justify-between">
                  <img src={Deployment} alt="Planning" className="w-10 sm:w-12" />
                  <h1 className="text-4xl sm:text-5xl text-[#D0FAF1] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
                    5
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold mt-3 text-base sm:text-lg">Deployment</h1>
                  <p className="text-justify text-sm sm:text-base">
                    Making the solution live and accessible.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-teal-100 to-rose-100 border-[#292D55] border-2 rounded-xl">
                <div className="flex justify-between">
                  <img src={support} alt="Planning" className="w-10 sm:w-12" />
                  <h1 className="text-4xl sm:text-5xl text-[#FAE6E7] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
                    6
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold mt-3 text-base sm:text-lg">
                    Maintenance & Optimization
                  </h1>
                  <p className="text-justify text-sm sm:text-base">
                    Supporting and enhancing the live product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Say Section */}
        <section className="bg-gradient-to-r from-red-100 to-neutral-50 rounded-3xl">
          <Testimonials />
        </section>

        {/* Our Team Section */}
        <section className=" rounded-3xl my-10">
          <OurTeam />
        </section>
      </div>
      {showEnqForm && (
        <>
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
            onClick={() => setShowEnqForm(false)}
          />
          <div
            className="fixed inset-x-0 top-0 z-50 transform transition-transform duration-500 ease-in-out"
            style={{ transform: showEnqForm ? 'translateY(0)' : 'translateY(-100%)' }}
          >
            <EnqForm onClose={() => setShowEnqForm(false)} />
          </div>
        </>
      )}
    </>
  );
}