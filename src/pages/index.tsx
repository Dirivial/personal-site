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
      <main className="container mx-auto flex flex-col items-center min-h-screen p-4">
        <div className="p-2" />
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-red-600">
          Dirivial
        </h1>
        <div className="p-2" />
        <div>
          <a href="https://github.com/Dirivial" className="">
            <img
              className="p-1 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-500"
              src="https://raw.githubusercontent.com/Dirivial/A-maze-d/main/public/pfp.png"
            />
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
