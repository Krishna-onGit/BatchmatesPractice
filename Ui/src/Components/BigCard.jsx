import React from "react";

const BigCard = () => {
  return (
    <div className="   relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-900/50 rounded-3xl border border-gray-800 overflow-hidden ">
          <div className=" grid lg:grid-cols-2 gap-12 items-center py-4 px-4">
            <div className="relative order-1">
              <div className="w-full h-[520px] rounded-2xl ">
                <img src="/Poster-3.png" alt="" className="w-full h-full rounded-2xl object-cover" />
                  <button className="absolute top-4 left-4 px-3 py-2 rounded-full text-sm bg-[#51B8DA] text-black font-medium">
                  Academic Success
                </button>
                 <button className="absolute bottom-4 right-4 px-3 py-2 rounded-full text-sm bg-[#EE319A] text-white font-medium">
                  Real Friendships
                </button>

              </div>
            </div>
            <div className="space-y-8 order-2 text-center px-4 ">
              <div>
                <span className="inline-flex item-centre bg-green-600 text-white py-2 px-4 rounded-full text-sm font-medium">
                  About Our Vision
                </span>
              </div>
              <div>
                <h2 className="text-white font-bold text-4xl leading-tight">
                  Revolutionizing <br />
                  <span className="bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Student Life
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-gray-300  font-medium text-base  leading-7 max-w-xl mx-auto">
                  We're not just another app - we're a movement! Built by
                  passionate students who believe campus life should be more
                  connected, more fun, and more empowering. Join the revolution!
                </p>
              </div>
               <div className="grid grid-cols-2 gap-4 text-white font-medium text-sm max-w-sm mx-auto ">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-3xl">👥</div>
                  <span>Community Driven</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-3xl">🧑‍💻</div>
                  <span>Innovation First</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-3xl">👨‍🎓</div>
                  <span>Student Success</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-3xl">🌏</div>
                  <span>Global Impact</span>
                </div>
              </div>
              <div className="text-white flex flex-col justify-centre items-center gap-2">
                <span className="py-4 px-8 border rounded-full">
                  Know More About Batchmates
                </span>
                <span className="text-gray-400 text-sm">
                  ✨ Free forever • No credit card required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;

//  <div className='absolute top-6 left-6'>
//                         <button className='px-4 py-2 rounded-full font-medium bg-[#51B8DA] '>Academic Success</button>
//                     </div>
//                     <div className=' bottom-6 left-6'>
//                         <button className='px-4 py-2 rounded-full font-medium bg-[#EE319A] '>Real Friendships</button>
//                     </div>
