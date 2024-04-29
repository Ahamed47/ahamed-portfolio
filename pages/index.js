import Head from "next/head";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillPhone,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import emoji from "../public/ahamed-wave.png";
import rlogo from "../public/React-logo.webp";
import rqlogo from "../public/react-query-logo.png";
import relogo from "../public/redux-logo.png";
import rrlogo from "../public/react-router-logo.png";

import awscertlogo from "../public/AWS-Certified_Cloud-Practitioner-logo.png";
import awslogo from "../public/aws-logo.png";
import bslogo from "../public/bootstrap-logo.jpeg";
import jslogo from "../public/JavaScript-logo.png";
import csslogo from "../public/css-logo.png";
import gitlogo from "../public/git-logo.png";
import githublogo from "../public/github-logo.png";
import htmllogo from "../public/html-logo.webp";
import tailwindlogo from "../public/tailwind-css-logo.png";
import sasslogo from "../public/sass-logo.png";
import jiralogo from "../public/jira-logo.png";
import nodelogo from "../public/node-logo.png";
import mongodblogo from "../public/mongodb-logo.png";
import scrumlogo from "../public/scrum-logo.png";
import expresslogo from "../public/expressjs-logo.png";
import firebaselogo from "../public/firebase-logo.png";
import vscodelogo from "../public/visual-studio-code-logo.webp";
import Image from "next/image";
import web1 from "../public/project-ss1.png";
import web2 from "../public/project-ss2.png";
import web3 from "../public/project-ss3.png";

import styles from "../styles/index.module.css";
import Contact from "./contact";
import ArrowToTopButton from "./arrowupbutton";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`sm:scroll-smooth ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>{`Ahamed's Portfolio`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-black top-0 z-10">
        <nav className="to-teal-500 pt-5 pb-2 px-5 md:px-10 flex flex-col md:flex-row justify-between dark:bg-gray-900 dark:text-white">
          <h1 className="font-burtons text-xl text-gray-800 hover:text-[#378CE7] dark:hover:text-[#41C9E2] dark:text-white transition-colors duration-300 mb-4 md:mb-0">
            ahamed abdul khader
          </h1>
          <ul className="flex items-center space-x-4 sm:space-x-4 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
            <a
              href="#skills"
              className="font-semibold text-gray-800 hover:text-[#378CE7] dark:text-white dark:hover:text-[#41C9E2] transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="font-semibold text-gray-800 hover:text-[#378CE7] dark:text-white dark:hover:text-[#41C9E2] transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="font-semibold text-gray-800 hover:text-[#378CE7] dark:text-white dark:hover:text-[#41C9E2] transition-colors duration-300"
            >
              Contact
            </a>
            <li>
              <a
                className="font-semibold bg-gradient-to-r from-[#41C9E2] to-[#378CE7] hover:from-[#3c6a9b] hover:to-[#25486d] transition duration-300 text-white px-4 py-2 border-none rounded-md "
                href="/Ahamed_Abdul_Khader_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl transition-transform duration-300 transform hover:scale-110"
              />
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center p-4">
            <div className="md:flex md:items-center md:justify-center">
              <div className="md:w-1/2 md:mr-10">
                <h2 className="text-4xl md:text-5xl py-2 text-[#67C6E3] font-semibold dark:text-[#67C6E3] flex items-center justify-center">
                  <span className="whitespace-nowrap">{`Hi , I'm Ahamed `}</span>
                  <span
                    role="img"
                    aria-label="wave emoji"
                    className="inline-block text-3xl md:text-4xl"
                  >
                    👋🏻
                  </span>
                </h2>
                <h3 className="text-lg font-semibold md:text-2xl py-2 dark:text-white">
                  MERN Stack Developer | React JS Developer
                </h3>
                <p className="text-sm font-medium md:text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-md md:max-w-xl mx-auto">
                  {`Experienced MERN Stack Developer crafting top-notch web
                    applications with expertise in React, Node.js, MongoDB, and more.
                    Explore how I can contribute to your team's success by connecting
                    with me below!`}
                </p>
                <div className="text-3xl md:text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
                  <a
                    href="mailto:ahamedabdul24@gmail.com"
                    className="hover:text-[#41C9E2]"
                  >
                    <AiFillMail />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahamed-abdul-khader/"
                    className="hover:text-[#0077B5]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a href="tel:+919003637701" className="hover:text-[#378CE7]">
                    <AiFillPhone />
                  </a>
                </div>
              </div>
              <div className="mx-auto bg-gradient-to-b from-[#41C9E2] rounded-full w-48 md:w-80 h-48 md:h-80 relative overflow-hidden mt-10 md:mt-0">
                <Image alt="img" src={emoji} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="pt-12">
          <div>
            <h3 className="text-3xl font-bold py-1 dark:text-white">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome to my arsenal of technical skills! I specialize in
              crafting immersive digital experiences. With expertise in
              debugging, testing, and integrating APIs, I ensure robust and
              dynamic web solutions.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 md:flex-col md:gap-4 sm:flex-col sm:gap-4">
            <div className="text-center shadow-lg p-5 md:p-10 rounded-xl my-5 md:my-10 dark:bg-white flex-1">
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={rlogo} width={70} height={60} />

                <p className="px-3 py-4 font-semibold text-[#162c44]">React</p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={nodelogo} width={50} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">
                  Node.js
                </p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={mongodblogo} width={30} height={60} />
                <p className="px-4 py-4  font-semibold text-[#162c44]">
                  MongoDB
                </p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={expresslogo} width={50} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">
                  Express.js
                </p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={relogo} width={50} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">Redux</p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={gitlogo} width={50} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">Git</p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={githublogo} width={50} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">Github</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-5 md:p-10 rounded-xl my-5 md:my-10 dark:bg-white flex-1">
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={jslogo} width={50} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">
                  JavaScript
                </p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={htmllogo} width={55} height={55} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">HTML</p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={csslogo} width={50} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">CSS</p>
              </div>

              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={bslogo} width={60} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">
                  Bootstrap
                </p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={sasslogo} width={60} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">Sass</p>
              </div>

              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={tailwindlogo} width={70} height={50} />
                <p className="px-1 py-4 font-semibold text-[#162c44]">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={awslogo} width={70} height={50} />
                <p className="px-4 py-4 font-semibold text-[#162c44]">AWS</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-5 md:p-10 rounded-xl my-5 md:my-10 dark:bg-white flex-1">
              <div className="flex justify-center py-2 items-center">
                <Image alt="img" src={awscertlogo} width={100} height={100} />
                <p className="py-4 font-semibold text-[#162c44]">
                  AWS Cloud Practitioner
                </p>
              </div>
              <div className="flex justify-center py-2 items-center">
                <Image alt="img" src={rrlogo} width={60} height={40} />
                <p className="px-1.5 py-4 font-semibold text-[#162c44]">
                  React Router
                </p>
              </div>

              <div className="flex justify-center py-2 items-center">
                <Image alt="img" src={rqlogo} width={50} height={50} />
                <p className="px-3 py-4 font-semibold text-[#162c44]">
                  React Query
                </p>
              </div>
              <div className="flex justify-center py-3 items-center">
                <Image alt="img" src={firebaselogo} width={60} height={65} />
                <p className="px-3 py-4 font-semibold text-[#162c44]">
                  Firebase
                </p>
              </div>

              <div className="flex justify-center py-3 items-center">
                <Image alt="img" src={scrumlogo} width={70} height={70} />
                <p className="px-2 font-semibold text-[#162c44]">Scrum</p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={jiralogo} width={60} height={60} />
                <p className="px-4 font-semibold text-[#162c44]">Jira</p>
              </div>
              <div className="flex justify-center py-4 items-center">
                <Image alt="img" src={vscodelogo} width={50} height={50} />
                <p className="px-4 font-semibold text-[#162c44]">VS Code</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="pt-12">
          <div>
            <h3 className="text-3xl font-bold py-1 dark:text-white">
              Projects
            </h3>
          </div>

          <div className="flex flex-col items-center space-y-10 py-2 lg:flex-row lg:flex-wrap">
            <div className="w-full relative">
              <h4 className="text-xl font-semibold py-2 dark:text-white text-center">
                Food Ordering Application
              </h4>
              <div className="relative rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
                <a
                  href="https://pizza-mania-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="rounded-lg"
                    layout="responsive"
                    src={web1}
                    alt="Your Image Alt Text"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#008DDA]/90 to-[#ED5AB3]/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white font-bold text-lg">
                      <div className="absolute inset-0  bg-opacity-80 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <p className="text-sm text-center mb-4">
                          This React-powered Online Food Ordering Application is
                          a robust web-based system designed to streamline the
                          process of ordering your favourite pizza. It enhances
                          user experiences, simplifies operations, and optimizes
                          the online ordering process for food enthusiasts and
                          customers.
                        </p>
                        <div className="text-sm text-center mt-2">
                          <p>Technologies Used:</p>
                          <ul>
                            <li>React</li>
                            <li>Redux & Redux Toolkit</li>
                            <li>React Router v6</li>
                            <li>Tailwind CSS</li>
                            <li>React Router Form</li>
                            <li>RESTful APIs integration</li>
                            <li>
                              React Router useFetcher, useLoaderData for data
                              fetching
                            </li>
                          </ul>
                        </div>
                        <p className="text-lg text-black text-center mt-4">
                          Click to visit👆
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full  relative">
              <h4 className="text-xl font-semibold py-2 dark:text-white text-center ">
                Support Ticket System
              </h4>
              <div className="relative rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
                <a
                  href="https://support-desk-ils5.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
                >
                  <Image
                    // className="rounded-lg border border-black" not working
                    className={`${styles.imageWithBorder} rounded-lg`}
                    layout="responsive"
                    src={web2}
                    alt="Your Image Alt Text"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#008DDA]/90 to-[#ED5AB3]/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white font-bold text-lg">
                      <div className="absolute inset-0  bg-opacity-80 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <p className="text-sm text-center mb-4">
                          System The Support Desk Application is a robust and
                          user-friendly web-based platform built on the MERN
                          (MongoDB Express.js, React, Node.js) stack. It
                          empowers businesses to deliver exceptional customer
                          support by centralizing support requests, tracking
                          issues, and facilitating efficient communication
                          between support agents and customers.
                        </p>
                        <div className="text-sm text-center mt-2">
                          <p>Technologies Used:</p>
                          <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Redux</li>
                            <li>RESTful APIs for integrations</li>
                            <li>Authentication and Authorization Mechanisms</li>
                          </ul>
                        </div>
                        <p className="text-lg text-black text-center mt-4">
                          Click to visit👆
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full relative">
              <h4 className="text-xl font-semibold py-2 dark:text-white text-center ">
                Bussiness Website
              </h4>
              <div className="relative rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
                <a
                  href="https://ahamed-rockets.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
                >
                  <Image
                    className="rounded-lg"
                    layout="responsive"
                    src={web3}
                    alt="Your Image Alt Text"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#008DDA]/90 to-[#ED5AB3]/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white font-bold text-lg">
                      <div className="absolute inset-0  bg-opacity-80 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <p className="text-sm text-center mb-4">
                          This business website is crafted using Tailwind CSS,
                          HTML, CSS, and JavaScript. It serves as a
                          comprehensive platform to showcase essential company
                          details, including product information, contact
                          details, testimonials, and a functional contact form.
                          The website is designed to be responsive to all screen
                          sizes, ensuring a seamless experience for visitors.
                        </p>
                        <div className="text-sm text-center mt-2">
                          <p>Technologies Used:</p>
                          <ul>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                          </ul>
                        </div>
                        <p className="text-lg text-black text-center mt-4">
                          Click to visit👆
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="pt-14 pb-20">
          <Contact />
        </section>
        <ArrowToTopButton />
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <p className="mb-4 text-center">
            &copy; {new Date().getFullYear()} Ahamed Abdul Khader
          </p>
          <div className="flex flex-wrap justify-center  space-x-4  w-full">
            <a
              href="https://www.linkedin.com/in/ahamed-abdul-khader/"
              className="hover:text-[#0077B5]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ahamed_24?igsh=enZxNHcxczdhb2Zm"
              className="hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/share/fsdnnMM8SP2wGjFd/?mibextid=qi2Omg"
              className="hover:text-[#1877F2]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook className="text-2xl" />
            </a>
            <a
              href="https://x.com/ahamed24786?t=yuuWP3T3ruqoiiOiCOM0eQ&s=09"
              className="hover:text-[#1DA1F2]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterSquare className="text-2xl" />
            </a>
            <a
              href="mailto:ahamedabdul24@gmail.com"
              className="hover:text-[#41C9E2]"
            >
              <AiFillMail className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
