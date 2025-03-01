import Image from 'next/image';
import Link from 'next/link';

import { IoLogoGithub } from "react-icons/io";

export default function HomePage() {
  return (
    <article className="flex flex-col justify-center max-w-[80ch] mx-auto p-8 min-h-screen">
      <div className="flex flex-col-reverse md:flex-row md:items-end md:gap-16">
        <h1 className="text-6xl font-bold bg-clip-text uppercase">
          Tusk
        </h1>
        <Image src="https://raw.githubusercontent.com/ofabiodev/tusk/main/.github/assets/icon.svg" alt="Tusk" priority width={128} height={128} />
      </div>
      <div className="my-8">
        <p>
          Effortless runtime object manipulation for JavaScript/TypeScript. Patch, extend, and debug with ease while keeping your codebase clean and maintainable.
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <Link
          href="/docs/"
          className="inline-flex items-center rounded-xl px-4 py-2 bg-[#a56953] text-white hover:bg-[#a56953]/80 transition-colors"
        >
          Get Started
        </Link>
        <Link
          href="https://github.com/ofabiodev/tusk"
          className="inline-flex items-center rounded-xl px-4 py-2 border bg-none border-white/50 gap-2"
        >
          <IoLogoGithub />
          Github
        </Link>
      </div>
    </article>
  );
}
