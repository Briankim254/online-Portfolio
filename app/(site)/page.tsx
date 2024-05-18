import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job";
import GlobeDemo from "./components/AutoGlobe/page";
import { FlipWords } from "@/app/(site)/components/ui/flip-words";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();
  const words = [
    "Data Scientist",
    "Software Engineer",
    "FrontEnd Developer",
    "IT consultant",
    "ML enthusiast",
  ];

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between  lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-normal tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full text-neutral-600 dark:text-neutral-400">
                I&apos;m Brian Kimutai Rotich, <br />
                a <FlipWords words={words} />
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                      >
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <GlobeDemo />
      </section>
      <Job />
    </main>
  );
}
