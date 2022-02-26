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
        <div className="w-full flex flex-col md:grid grid-cols-[1fr,1fr] max-w-screen-lg gap-8">
          <script type="text/javascript" src="/main.js" defer></script>
          <div className="canvasWrap">
            <canvas id="canvas" className="aspect-square rounded-2xl w-full max-w-md mx-auto bg-white border shadow-xl"></canvas>
          </div>
          <div className="selectionWrap mx-auto">
            <div className="bg-larva-pink max-w-md px-5 py-3 mb-4 font-semibold text-center text-white uppercase rounded-lg cursor-pointer" onClick={downloadToad}>
              Download My Toad Punk
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildz;
