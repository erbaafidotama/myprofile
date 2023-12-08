// import iconProfile from "@/app/statics/iconProfile";
import Image from "next/image";
export default function Welcome() {
  return (
    <section className="bg-gray-50">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl xl:text-6xl">
            Hellooo!! Welcome
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            My Name Erba Afidotama. Im a Web Developer. Ussualy as Frontend
            Developer
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src="/iconprofile.png" width={100} height={100} alt="mockup" />
        </div>
      </div>
    </section>
  );
}
