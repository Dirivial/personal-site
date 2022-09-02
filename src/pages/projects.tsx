import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import amazedImage from "../../public/amazed.png";
import kanbanImage from "../../public/issueTracker.png";

type ProjectCardProps = {
  image: StaticImageData;
  header: string;
  link: string;
  description: string;
};

const AllProjects = [
  {
    image: amazedImage,
    header: "Amazed",
    link: "https://amazed.vercel.app/",
    description: "Small app for generating and solving mazes",
  },
  {
    image: kanbanImage,
    header: "Kanban Thing",
    link: "https://issues-dirivial.vercel.app/",
    description: "A not-so-functioning kanban app",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto flex flex-col gap-y-4 items-center ">
      <Head>
        <title>Dirivial x Projects</title>
        <meta
          name="description"
          content="Personal portfolio website for me, Dirivial"
        />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Dirivial/A-maze-d/main/public/pfp.png"
        />
      </Head>
      <div className="p-4" />
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-red-600">
        Projects
      </h1>
      <div />
      <div className="flex flex-col gap-y-8">
        {AllProjects.map((card, index) => {
          return (
            <ProjectCard
              key={index}
              image={card.image}
              header={card.header}
              link={card.link}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({ image, header, link, description }: ProjectCardProps) {
  return (
    <a
      href={link}
      className="rounded text-gray-100 hover:text-red-400 w-fit flex flex-col items-center"
    >
      <h1 className="text-xl font-bold transition-colors duration-150">
        {header}
      </h1>
      <div className="">
        <hr />
        <Image
          title={description}
          src={image}
          alt={"Image showing " + header}
          layout="fixed"
          width={400}
          height={225}
        />
      </div>
    </a>
  );
}
