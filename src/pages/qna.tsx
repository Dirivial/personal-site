import Link from "next/link";

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
            Project
          </a>
        </Link>
        <Link href="/qna">
          <a className=" p-2 text-2xl font-bold rounded text-gray-200 hover:text-indigo-500 bg-slate-800 transition-colors">
            Q&A
          </a>
        </Link>
      </div>
      <div className="container mx-auto"></div>
    </>
  );
}

function Entry(Question: string, Answer: string) {
  return (
    <div>
      <h1>{Question}</h1>
      <p>{Answer}</p>
    </div>
  );
}
