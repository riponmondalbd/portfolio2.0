export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* left side content name designation */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-amber-200">Ripon Mondal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am a
              proficient in various programming language and technologies.
            </p>
          </div>
          {/* right side content */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
