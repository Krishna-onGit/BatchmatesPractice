import React from "react";
import { Button } from "./ui/button";

const Herosection = () => {
  return (
    <div>
      <div className="text-white flex flex-col justify-center items-center ">
        <div className="bg-black w-28 h-28 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-800 ">
          <img src="/Logo.png" alt="" className="w-64 h-64 object-contain" />
        </div>
        <div className="text-center font-bold text-6xl ">Batchmates</div>
        <div className="text-center mt-2.5 text-2xl text-white/80 font-small">
          Students Community App
        </div>
        <div className="text-center mt-5 max-w-2xl text-white/60 font-small text-sm">
          <p>
            Connect with classmates, join study groups, discover events, and
            build lasting friendships.
            <br /> Batchmates brings your entire student experience together in
            one app.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center item-center">
        <p className="text-xl font-medium text-center text-white">
          Download on your devices
        </p>
      </div>
      <div className="flex justify-center mt-5 gap-4">
        {/* <button className='p-2 bg-white rounded-xl hover:scale-105 transition'>Download for IOS</button>
            <button className='p-2 bg-white rounded-xl hover:scale-105 transition'>Download for Android</button> */}
        <Button variant="outline">Download for IOS</Button>
        <Button variant="outline">Download for Android</Button>
      </div>
      <div className="flex justify-center">
        <Button className="mt-10">Explore More</Button>
      </div>
    </div>
  );
};

export default Herosection;
