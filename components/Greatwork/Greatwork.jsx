import React from "react";

const Greatwork = () => {
  return (
    <section className=" ">
      <h1 className="w-full leading-[1] text-[30px] sm:text-[70px] md:text-[80px] lg:text-[110px] xl:text-[130px] font-semibold mb-6 md:mb-8   text-[#0f1d07]">
        Great work for <br /> great☺people.
      </h1>

      <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-16 py-12 md:py-24">
        {/* Left Content */}
        <div className="lg:w-[40%] flex items-center">
          <div className="max-w-xl flex flex-col justify-between relative h-fit">
            <div>
              <p className="text-sm leading-[1] sm:text-base md:text-[20px] lg:text-[24px] mb-6 text-[#0f1d07] font-semibold">
                We put people first, understanding that a work-centered world
                can't ethically impact the lives of those who use it. By
                empowering users with rich functionality, we honor their
                problems, accelerate progress and unlock potential for our
                clients.
              </p>

              <p className="text-sm leading-[1] sm:text-base md:text-[20px] lg:text-[24px] mb-8 text-[#0f1d07]  font-semibold">
                Our independent status protects our creative energy, and
                approach to technology, allowing us to achieve quality and
                consistently deliver outstanding outcomes.
              </p>

              <button
                className="flex items-center gap-2 rounded-full px-4 py-2 mb-12 md:mb-16 text-white bg-[#0f1d07] 
                hover:bg-green-300 hover:text-[#0f1d07] 
                transition-transform duration-300 ease-in-out 
                w-fit text-sm sm:text-[16px] md:text-[18px] font-semibold 
                transform hover:translate-x-2 hover:translate-y-1"
              >
                About Us{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  fill="green"
                  strokeWidth="0.5"
                  viewBox="0 0 14 13"
                  className="transition-transform duration-300 ease-in-out"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className=" ">
              <div className="border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pb-6 md:pb-8">
                  <div className="text-3xl sm:text-5xl md:text-[72px] lg:text-[92px] font-semibold text-[#0f1d07]">
                    100%
                  </div>
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-[#0f1d07]">
                    In house & independent
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pb-6 md:pb-8">
                  <div className="text-3xl sm:text-5xl md:text-[72px] lg:text-[92px] font-semibold text-[#0f1d07]">
                    15
                  </div>
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-[#0f1d07]">
                    Years crafting digital experiences
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pb-6 md:pb-8">
                  <div className="text-3xl sm:text-5xl md:text-[72px] lg:text-[92px] font-semibold text-[#0f1d07]">
                    80+
                  </div>
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-[#0f1d07]">
                    Awards from AWA, FWA and Awwwards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-[60%] w-full relative overflow-hidden">
          <img
            src="/images/greatWork.webp"
            alt="Professional team collaboration in modern office"
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-full object-cover rounded-2xl lg:rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Greatwork;
