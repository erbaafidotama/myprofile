import Image from "next/image";
import reactIcon from "@/app/public/images/react-icon.png";
import nextIcon from "@/app/public/images/next-icon.png";
import qwikIcon from "@/app/public/images/qwik-icon.png";
import vueIcon from "@/app/public/images/vue-icon.png";
import svelteIcon from "@/app/public/images/svelte-icon.png";
import nodeIcon from "@/app/public/images/node-icon.png";
import goIcon from "@/app/public/images/go-icon.png";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Skill() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="flex justify-center">
          <div className="max-w-screen-md mb-8 text-center lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Stack
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              I can create an application with this stack
            </p>
          </div>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center">
              <div className="mb-4 rounded-full h-18 w-28 bg-primary-100 dark:bg-primary-900">
                {/* <FaReact className="w-10 h-10" /> */}
                <Image src={reactIcon} alt="react icon" className="h-18 w-28" />
              </div>
            </div>
            <div className="flex justify-center">
              <h3 className="mb-2 text-xl font-bold dark:text-white">React</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="mb-4 rounded-full h-18 w-28 bg-primary-100 dark:bg-primary-900">
                <Image src={nextIcon} alt="react icon" className="h-18 w-28" />
              </div>
            </div>
            <div className="flex justify-center">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Next</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="mb-4 rounded-full h-18 w-28 bg-primary-100 dark:bg-primary-900">
                <Image src={qwikIcon} alt="react icon" className="h-18 w-28" />
              </div>
            </div>
            <div className="flex justify-center">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Qwik</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="mb-4 rounded-full h-18 w-28 bg-primary-100 dark:bg-primary-900">
                <Image src={vueIcon} alt="react icon" className="h-18 w-28" />
              </div>
            </div>
            <div className="flex justify-center">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Vue</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="mb-4 rounded-full h-18 w-28 bg-primary-100 dark:bg-primary-900">
                <Image
                  src={svelteIcon}
                  alt="react icon"
                  className="h-18 w-28"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Svelte</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="mb-4 rounded-full h-18 w-28 bg-primary-100 dark:bg-primary-900">
                <Image src={nodeIcon} alt="react icon" className="h-18 w-28" />
              </div>
            </div>
            <div className="flex justify-center">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Node</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="mb-4 rounded-full h-18 w-28 bg-primary-100 dark:bg-primary-900">
                <Image src={goIcon} alt="react icon" className="h-18 w-28" />
              </div>
            </div>
            <div className="flex justify-center">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Go</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
