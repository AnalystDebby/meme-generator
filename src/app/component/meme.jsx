import Image from "next/image";
import { useEffect, useState } from "react";

export const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    memes: [],
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "vvvvvv");
        setMeme((prev) => ({ ...prev, memes: data.data.memes }));
      });
  }, []);

  function getMemeImage(event) {
    const randomNumber = Math.floor(Math.random() * meme.memes.length);
    const url = meme.memes[randomNumber].url;
    setMeme((prev) => ({
      ...prev,
      topText: event.target.value,
      bottomText: event.target.value,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main className="w-full  relative p-10">
      <form className="w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-10 text-center">
        <div className="grid col-span-1 text-center">
          <input
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            className="indent-3 rounded-md border-solid border-2 border-gray-400 focus:outline-none"
          />
        </div>
        <div className="grid col-span-1 text-center">
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="indent-3 rounded-md border-solid border-2 border-gray-400 focus:outline-none"
          />
        </div>

        <button
          className="grid col-span-2 bg-gradient-to-r from-purple-900 to-purple-600 text-white-50 items-center p-5 text-slate-50 rounded-md border-none cursor-pointer"
          type="button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <div className="flex justify-center w-f relative">
        <Image
          src={meme.randomImage}
          alt="memes"
          className="rounded-sm mt-9"
          width={500}
          height={500}
        />
        <h2
          className="top-5 absolute w-4/5 md:w-1/4 text-center my-4 mx-0 py-0 px-1 font-[impact] text-[2em] uppercase text-white tracking-[1px] transform translate-x-1/2 right-56 md:right-2/4 meme-text break-words
        "
        >
          {meme.topText}
        </h2>
        <h2 className="-bottom-4 absolute w-4/5 md:w-1/4 text-center  my-4 mx-0 py-0 px-1 font-[impact] text-[2em] uppercase text-white tracking-[1px] transform translate-x-1/2 right-56 md:right-2/4 meme-text break-words ">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};
