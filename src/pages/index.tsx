import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dirivial</title>
        <meta
          name="description"
          content="Personal portfolio website for me, Dirivial"
        />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Dirivial/A-maze-d/main/public/pfp.png"
        />
      </Head>
      <div>
        <main className="container mx-auto flex flex-col items-center p-4">
          <div className="p-4" />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-red-600">
            Dirivial
          </h1>
          <div className="p-2" />
          <div className="">
            <div className="p-2" />
            <a href="https://github.com/Dirivial" className="">
              <Image
                className="p-4 rounded-full"
                alt="Profile picture of cartoon ghost linking to Github page"
                width="300"
                height="300"
                src="https://raw.githubusercontent.com/Dirivial/A-maze-d/main/public/pfp.png"
              />
            </a>
            <div className="flex justify-around">
              <div className="pt-2 pr-1 pb-2 rounded bg-gradient-to-bl from-indigo-600 via-gray-800 to-gray-800 relative -left-10 bottom-0 w-fit">
                <Link href="/projects">
                  <a className="p-2 text-2xl font-bold rounded text-gray-200 bg-slate-800 hover:text-indigo-400 transition-colors relative">
                    Projects
                  </a>
                </Link>
              </div>
              <div className="pt-2 pl-1 rounded bg-gradient-to-br from-indigo-600 via-gray-800 to-gray-800 relative w-fit">
                <Link href="/qna">
                  <a className="p-2 text-2xl font-bold rounded text-gray-200 hover:text-indigo-500 bg-slate-800 transition-colors">
                    Q&A
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-4" />
          <div className="container text-gray-100 text-xl flex gap-x-1 justify-center">
            Hello there, my name is Alexander. I am a{"  "}
            <span>{(new Date().getFullYear() - 2000).toString()} </span>
            year old CS student.
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
