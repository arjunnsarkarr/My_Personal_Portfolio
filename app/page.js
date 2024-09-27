"use client";
import React from "react";

const Homepage = () => {
  var initial = true;
  const toggleHandler = (e) => {
    e.preventDefault();
    const aside = document.querySelector("#asideLeft");
    const main = document.querySelector("#mains");
    if (initial) {
      aside.style.display = "block";
      main.style.display = "none";
      initial = false;
    } else {
      aside.style.display = "none";
      main.style.display = "block";
      initial = true;
    }
  };

  const toggleCancelHandler = (e) => {
    e.preventDefault();
    const aside = document.querySelector("#asideLeft");
    const main = document.querySelector("#mains");
    aside.style.display = "none";
    main.style.display = "block";
    initial = true;
  };

  return (
    <>
      <main>
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            top: 16,
            left: 16,
            right: 16,
            bottom: 16,
            pointerEvents: "none",
          }}
        />
        <div className="flex">
          <aside
            id="asideLeft"
            className="hidden lg:flex h-screen fixed w-screen sm:w-[300px] z-30"
          >
            <div className="toggle flex flex-col lg:m-5 w-full">
              <div className="hidden lg:flex gap-2 p-5 pt-0">
                <div className="h-4 w-4 bg-btnHighlight rounded-full" />
                <div className="h-4 w-4 bg-btnHighlight rounded-full" />
              </div>
              <div className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5">
                <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
                  <button onClick={toggleCancelHandler}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <a
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-home"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Home
                </a>
                <a
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-flame"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                  Trending
                </a>
                <a
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://github.com/arjunnsarkarr"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Snippets
                </a>
                <a
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://www.instagram.com/arjunnsarkarr/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-video"
                  >
                    <path d="m22 8-6 4 6 4V8Z" />
                    <rect width={14} height={12} x={2} y={6} rx={2} ry={2} />
                  </svg>
                  Videos
                </a>
                <div className="mt-5">Socials</div>
                <a
                  target="_blank"
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://www.instagram.com/arjunnsarkarr/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b5179e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </a>
                <a
                  target="_blank"
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://github.com/arjunnsarkarr"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Github
                </a>
                <a
                  target="_blank"
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://www.youtube.com/@arjunnsarkarr"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e63946"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  Youtube
                </a>
                <a
                  target="_blank"
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://github.com/arjunnsarkarr"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f77f00"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  Stack overflow
                </a>
                <a
                  target="_blank"
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://www.linkedin.com/in/arjunnsarkarr/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0277b5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width={4} height={12} x={2} y={9} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                  Linkedin
                </a>
                <div className="mt-5">Projects</div>
                <a
                  target="_blank"
                  className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="https://mywonderworld.netlify.app"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shirt"
                  >
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                  </svg>
                  WonderWorld
                </a>
              </div>
            </div>
          </aside>

          <main id="mains" className="flex-1 pl-0 lg:pl-[300px]">
            
            {/* navbar */}
            <nav className="flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-between">
              <div />
              <div className="flex items-center gap-5">
                <a
                  className="px-3 py-1 bg-white text-black rounded-md hover:bg-gray-500 hover:text-white transition duration-300"
                  href="/Arjun_Resume.pdf" download
                >
                  My Resume
                </a>
                <a
                  className="px-3 py-1 bg-white text-black rounded-md hover:bg-gray-500 hover:text-white transition duration-300"
                  href="mailto:arjunsarkar8756@gmail.com"
                >
                  Contact Me
                </a>
                <button type="button" onClick={toggleHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex lg:hidden cursor-pointer hover:text-primary transition-colors"
                  >
                    <line x1={4} x2={20} y1={12} y2={12} />
                    <line x1={4} x2={20} y1={6} y2={6} />
                    <line x1={4} x2={20} y1={18} y2={18} />
                  </svg>
                </button>
              </div>
            </nav>



              {/* containing my name and picture */}
              <div className="flex rounded-lg w-full  bg-[url('/images/cover.jpeg')] bg-no-repeat bg-cover">
                <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5  w-full gap-2 md:gap-10">
                  <div >
                    <img
                      alt="Arjun Sarkar"
                      loading="lazy"
                      width={120}
                      height={120}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover border-4 border-white rounded-full shadow-md"
                      style={{ color: "transparent" }}
                      src="/arjun.jpeg"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col justify-center gap-4">
                    <div className="flex justify-between items-center gap-5 ">
                      <div className="text-3xl flex flex-col font-bold text-highlight">
                        <div className="effect">
                          ARJUN SARKAR &nbsp; &nbsp;{" "}
                        </div>
                        <div className="text-sm font-thin flex justify-between items-center">
                          @arjunnsarkarr
                          <a
                            className="block md:hidden"
                            target="_blank"
                            href="https://www.instagram.com/arjunnsarkarr/"
                          >
                            <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-instagram"
                              >
                                <rect
                                  width={20}
                                  height={20}
                                  x={2}
                                  y={2}
                                  rx={5}
                                  ry={5}
                                />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                      <a
                        className="hidden md:block"
                        target="_blank"
                        href="https://instagram.com/arjunnsarkarr"
                      >
                        <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs py-2 px-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-instagram"
                          >
                            <rect
                              width={20}
                              height={20}
                              x={2}
                              y={2}
                              rx={5}
                              ry={5}
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                          <span className="hidden md:block">
                            Follow me on Instagram
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10 lg:px-10">


                {/* INTRODUCTION */}
                <section className="grid gap-5 mt-10 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">
                    A Quick Introduction About Me
                  </div>
                  <p>
                    {" "}
                    Hello, I'm Arjun Sarkar, a passionate Full-Stack web developer
                    dedicated to crafting immersive online experiences. With a
                    strong foundation in web technologies, I thrive on turning
                    creative ideas into functional, user-friendly websites.
                    Whether it's coding elegant front-end designs or optimizing
                    back-end performance, I take pride in delivering polished
                    solutions that leave a lasting impression. Welcome to my
                    digital world, where innovation and code converge to shape
                    the future of the web.
                    <br />I am on a quest to secure a challenging position
                    within a reputable organization where I can further expand
                    my learnings, knowledge, and skills while making a
                    significant contribution to the success of the organization.
                  </p>
                </section>

              {/* Experience */}
              <section className="grid gap-5 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">
                  Experience
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                    
                    
                    {/* wonderworld */}
                    <div className="flex flex-col gap-3">
                      <a
                        target="_blank"
                        href="https://mywonderworld.netlify.app"
                      >
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="wonder world"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/wonderimage.png"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          Wonder World
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://mywonderworld.netlify.app"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            Freelance Project
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://mywonderworld.netlify.app"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            4 Months
                          </a>
                        </div>
                      </div>
                    </div>

                            {/* Panjwani Softwares */}
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Panjwani Softwares"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/panjwani_logo.jpeg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">Panjwani Softwares</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            Full-Stack Developer 
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            2 Months
                          </a>
                        </div>
                      </div>
                    </div>

      {/* Tcs */}
      <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="TCS"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/tcs.png"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">Techverse Coding Studio</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            Frontend Dev Intern
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            5 Months
                          </a>
                        </div>
                      </div>
                    </div>


                  </div>
                </section>










                {/* projects */}
                <section className="grid gap-5 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">
                    Projects
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                  
                    

                    {/* Social Fund Raising */}
                    <div className="flex flex-col gap-3">
                      <a
                        target="_blank"
                        href="https://github.com/arjunnsarkarr/Social_Fund_Raising"
                      >
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Social Fund Raising"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/fundraising.png"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          Social Fund Raising
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://github.com/arjunnsarkarr/Social_Fund_Raising"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://github.com/arjunnsarkarr/Social_Fund_Raising"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* MyPinterest */}
                    <div className="flex flex-col gap-3">
                      <a
                        target="_blank"
                        href="https://github.com/arjunnsarkarr/MyPinterest"
                      >
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="MyPinterest"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/mypinterest.png"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          MyPinterest
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://github.com/arjunnsarkarr/MyPinterest"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://github.com/arjunnsarkarr/MyPinterest"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Unsplash Clone */}
                    <div className="flex flex-col gap-3">
                      <a
                        target="_blank"
                        href="https://github.com/arjunnsarkarr/Unsplash_Clone"
                      >
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Unsplash Clone"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/unsplashclone.png"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          Unsplash Clone
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://github.com/arjunnsarkarr/Unsplash_Clone"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="https://github.com/arjunnsarkarr/Unsplash_Clone"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>


                {/* Frontend */}
                <section className="grid gap-5 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">
                    Frontend
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="HTML, CSS"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/htmlandcss.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          HTML, CSS
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Tailwind"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/tailwindcss.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">Tailwind</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Javascript, Typescript"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/jsandts.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "85%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          Javascript, Typescript
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Reactjs"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/reactandts.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">Reactjs</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Nextjs 13"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/nextjs.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          Nextjs 13
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>



                {/* Backend */}
                <section className="grid gap-5 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">
                    Backend
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="NodeJs"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/nodejs.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">NodeJs</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="ExpressJs"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/expressjs.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">
                          ExpressJs
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


                {/* Database */}
                <section className="grid gap-5 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">
                    Database
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="MongoDB"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/mongodb.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">MongoDB</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* DevOps */}
                <section className="grid gap-5 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">DevOps</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="GIT"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/git.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">GIT</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


               

                {/* Others */}
                <section className="grid gap-5 p-5 md:p-0">
                  <div className="text-xl font-bold text-highlight">Others</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                    {/* rest api */}
                    <div className="flex flex-col gap-3">
                      <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            alt="Rest API"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="/restapi.jpg"
                          />
                          <div className="progress-bar">
                            <div
                              className="h-full bg-btnHighlight"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="grid gap-2 px-2">
                        <div className="text-highlight font-bold">Rest API</div>
                        <div className="flex gap-2 md:gap-10">
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code"
                            >
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                            1,128
                          </a>
                          <a
                            target="_blank"
                            className="flex items-center text-info text-xs gap-1"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                            1 day ago
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


              </div>
            
          </main>
        </div>
        <next-route-announcer style={{ position: "absolute" }} />
      </main>
    </>
  );
};

export default Homepage;
