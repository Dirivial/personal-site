import type { NextPage } from "next";
import Head from "next/head";

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="container mx-auto flex flex-col items-center p-4">
          <div className="p-4" />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-red-600">
            Dirivial
          </h1>
          <div className="p-2" />
          <div className="">
            <a href="https://github.com/Dirivial" className="">
              <img
                className="p-1 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-500"
                src="https://raw.githubusercontent.com/Dirivial/A-maze-d/main/public/pfp.png"
              />
            </a>
            <div className="flex justify-around">
              <div className="pt-2 pr-1 pb-2 rounded bg-gradient-to-bl from-indigo-600 via-gray-800 to-gray-800 relative -left-10 bottom-0 w-fit">
                <a
                  href="/projects"
                  className="p-2 text-2xl font-bold rounded text-gray-200 bg-slate-800 hover:bg-slate-900 transition-colors relative"
                >
                  Projects
                </a>
              </div>
              <div className="pt-2 pl-1 rounded bg-gradient-to-br from-indigo-600 via-gray-800 to-gray-800 relative w-fit">
                <a
                  href="/qna"
                  className="p-2 text-2xl font-bold rounded text-gray-200 bg-slate-800 hover:bg-slate-900 transition-colors"
                >
                  Q&A
                </a>
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
