import React, { useRef } from "react";

export default function Banner() {
  const ref = useRef(null);
  return (
    <div className="flex flex-row items-center justify-center gap-4 bg-gradient-to-r from-pink-500 to-violet-500 py-4 z-[100]">
      <div className="sticky top-0 flex items-center justify-center text-gray-50 font-medium text-center ">
        <h2>The website is still in developing stages </h2>
      </div>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets3.lottiefiles.com/packages/lf20_fQij9m.json"
        style={{width:'40px', height:'40px'}}
      ></lottie-player>
    </div>
  );
}
