import Link from "next/link";
import Head from "next/head";

export default function Qna() {
  return (
    <>
      {" "}
      <div className="flex justify-start">
        <Link href="/">
          <a className="p-2 text-2xl font-bold rounded text-gray-200 bg-slate-800 hover:text-indigo-400 transition-colors relative">
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className="p-2 text-2xl font-bold rounded text-gray-200 bg-slate-800 hover:text-indigo-400 transition-colors relative">
            Projects
          </a>
        </Link>
        <Link href="/qna">
          <a className=" p-2 text-2xl font-bold rounded text-gray-200 hover:text-indigo-500 bg-slate-800 transition-colors">
            Q&A
          </a>
        </Link>
      </div>
      <Head>
        <title>Dirivial x QnA</title>
        <meta
          name="description"
          content="Personal portfolio website for me, Dirivial"
        />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Dirivial/A-maze-d/main/public/pfp.png"
        />
      </Head>
      <div className="p-2" />
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-red-600">
        Q&A
      </h1>
      <div className="container mx-auto flex flex-col items-center qna">
        <div className="p-3" />

        <h1>Yo?</h1>
        <p>Yo.</p>

        <h1>Have you gotten any questions?</h1>
        <p>No.</p>

        <h1>What is the point of this page?</h1>
        <p>To add a page.</p>

        <h1>What did you use to create this site?</h1>
        <p>
          I used{" "}
          <a
            className="text-indigo-400"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            NextJS
          </a>{" "}
          and{" "}
          <a
            className="text-indigo-400"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          . To ease the setup, I used the wonderful{" "}
          <a
            className="text-indigo-400"
            href="https://create.t3.gg/"
            target="_blank"
            rel="noreferrer"
          >
            Create-T3-App
          </a>
          .
        </p>
      </div>
    </>
  );
}
