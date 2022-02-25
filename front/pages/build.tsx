/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import getTraits from "./api/main";
import { downloadToad } from "./api/main";

const Buildz = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      getTraits();
    }
  }, []);

  return (
    <>
      <div className="md:flex fixed items-center justify-center w-screen h-screen p-16 overflow-scroll bg-gray-200">
        <div className="w-full flex flex-col md:grid grid-cols-[1fr,1fr] max-w-screen-lg gap-8">
          <script type="text/javascript" src="/main.js" defer></script>
          <div className="selectionWrap mx-auto">
          <div className="bg-larva-pink max-w-md px-5 py-3 mb-4 font-semibold text-center text-white uppercase rounded-lg cursor-pointer" onClick={downloadToad}>
              Download My Toad Punk
            </div>
          </div>
          <div className="canvasWrap">
            <canvas id="canvas" className="aspect-square rounded-2xl w-full max-w-lg mx-auto bg-white border shadow-xl"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildz;
