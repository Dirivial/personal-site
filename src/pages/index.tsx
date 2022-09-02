import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-orange-400">
      <Head>
        <title>Dirivial</title>
        <meta
          name="description"
          content="Personal portfolio website for Dirivial"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col items-center min-h-screen p-4">
        <h1 className="w-10">
          Create <span>T3</span> App
        </h1>

        <div>Test</div>
      </main>
    </div>
  );
};

export default Home;
