import NameDesignation from "@/components/Home/NameDesignation/NameDesignation";
import Photo from "@/components/Home/Photo/Photo";
import Stats from "@/components/Home/Stats/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* left side content name designation */}
          <NameDesignation />
          {/* right side content */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* stats content */}
      <Stats />
    </section>
  );
}
