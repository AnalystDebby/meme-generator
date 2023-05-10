"use client";
import { Meme } from "./component/meme";
import { Nav } from "./component/nav";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Meme />
    </main>
  );
}
