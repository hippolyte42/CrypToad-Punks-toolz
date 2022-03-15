/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import getTraits from "../../pages/api/main";
import { downloadToad } from "../../pages/api/main";

const Buildz = (): JSX.Element => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      getTraits();
    }
  }, []);

  return (
    <>
      <div className="md:flex items-center justify-center w-screen md:w-4/6 h-full overflow-scroll overflow-y-auto overflow-x-auto p-16 bg-gray-200 rounded-2xl mb-12">
        
        <div className="w-full flex flex-col md:grid grid-cols-[1fr,1fr] md:grid-cols-6 max-w-screen-lg gap-8">

          <h1 className="text-xl md:text-3xl mb-9 md:col-start-1 md:col-span-6 font-bold text-larva-pink">
              MAKE YOUR CRYPTOAD PUNK
          </h1>
          <script type="text/javascript" src="/main.js" defer></script>
          
          <div className="canvasWrap md:col-start-1 md:col-end-4">
            <canvas id="canvas" className="aspect-square rounded-2xl w-full max-w-md mx-auto bg-white border shadow-xl"></canvas>
          </div>
          
          <div className="selectionWrap mx-auto md:col-start-4 md:col-end-7">
            <div className="bg-larva-pink max-w-md px-5 py-3 mb-4 font-semibold text-center text-white uppercase rounded-lg cursor-pointer" onClick={downloadToad}>
              Download My CrypToad Punk
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildz;
