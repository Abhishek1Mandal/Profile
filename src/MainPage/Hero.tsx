import React, { useEffect } from "react";
import pp from "../Components/My components/Abhishek.png";
import TS from "../Components/My components/file_type_typescript_icon_130108.svg";
import RJ from "../Components/My components/reactjs_logo_icon_206693.svg";
import AP from "../Components/My components/apps-2-line.svg";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Set animation duration
      once: true, // Only animate elements once
    });
  }, []);

  return (
    <>
      <section className="pt-0" id="about">
        <div className="container pt-14">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            
            {/* hero left start */}
            <div className="w-full md:basis-1/2">
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[25px]"
              >
                Hi,
              </h5>

              <h1
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5"
              >
                I'm Abhishek Mandal <br /> A EE Engineering Graduate
              </h1>

              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="150"
                className="flex items-center gap-6 mt-7"
              >
                <a href="#contact">
                  <button className="flex items-center gap-2 bg-black text-white font-[600] border border-solid py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor ease-in duration-100">
                    <i className="ri-mall-line"></i>Hire Me
                  </button>
                </a>

                <a
                  href="#portfolio"
                  className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                  rel="noopener noreferrer"
                >
                  See Portfolio
                </a>
              </div>

              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-headingColor mt-12 font-[500] text-[14px] leading-7 sm:pl-14 sm:pr-10"
              >
                <img src={AP} alt="" />
                <b>
                  I am a software engineering aspirant who is seeking to find
                  the opportunity to upskill in a hardworking and competitive
                  environment as well as be motivated by the company to do the
                  best for the sake of helping myself and the company advance in
                  the software engineering industry by becoming an asset.
                </b>
              </p>
              <div className="flex items-center gap-9 mt-14">
                <span className="text-smallTextColor text-[20px] font-[600]">
                  Connect
                </span>
                <span>
                  <a
                    title="instagram"
                    target="_blank"
                    href="https://www.instagram.com/1abhishek_mandal/"
                    rel="noopener noreferrer"
                    className="text-smallTextColor text-[25px] font-[600]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"
                      />
                    </svg>
                  </a>
                </span>
                <span>
                  <a
                    title="github"
                    target="_blank"
                    href="https://github.com/Abhishek1Mandal"
                    rel="noopener noreferrer"
                    className="text-smallTextColor text-[25px] font-[600]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"
                      />
                    </svg>
                  </a>
                </span>
                <span>
                  <a
                    title="LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/in/abhishek-mandal-73a070225/"
                    rel="noopener noreferrer"
                    className="text-smallTextColor text-[25px] font-[600]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3h.003Z"
                      />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            {/* hero left end */}

            {/* hero img */}
            <div className="basis-1/3 mt-10 sm:mt-0">
              <figure className="flex items-center justify-center">
                <img src={pp} alt="" />
              </figure>
            </div>
            {/* hero img end */}

            {/* hero image content right */}
            <div className="md:basis-1/5 mt-10 flex-wrap md:mt-0 md:flex-col">
              <div className="grid grid-cols-1 gap-6">
                <div className="w-[50%] relative">
                  <div className="container relative">
                    <a
                      href="#reactjs"
                      className="text-smallTextColor text-[80px] "
                    >
                      <img src={RJ} alt="React Logo" />
                    </a>
                    <div className="absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <CountUp
                        className="text-headingColor font-[600] bold text-[20px]"
                        start={0} // Start counting from 0
                        end={80} // Count up to 80
                        duration={4} // Duration of the counting animation in seconds
                        suffix="%" // Optional suffix to display after the number
                      />
                    </div>
                  </div>
                </div>

                <div className="w-[50%] relative">
                  <div className="container relative">
                    <a
                      href="#typescript"
                      className="text-smallTextColor text-[80px] "
                    >
                      <img src={TS} alt="React Logo" />
                    </a>
                    <div className="absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <CountUp
                        className="text-headingColor font-[600] bold text-[20px]"
                        start={0} // Start counting from 0
                        end={80} // Count up to 80
                        duration={4} // Duration of the counting animation in seconds
                        suffix="%" // Optional suffix to display after the number
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
