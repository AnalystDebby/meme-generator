import Image from "next/image";
import favicon from "/public/favicon_io/favicon-32x32.png";

export const Nav = () => (
  <div className="h-16 bg-gradient-to-r from-purple-900 to-purple-600 text-white-50 items-center p-5 text-slate-50 flex justify-between">
    <div className="flex justify-start content-between">
      <Image src={favicon} alt="Meme Face" className="h-full mr-2 ml-5" />
      <h1 className="text-xl mr-auto">Meme Generator</h1>
    </div>
    <div>
      <p className="text-xs font-medium leading-4 mr-5">
        React Course - Project 3
      </p>
    </div>
  </div>
);
