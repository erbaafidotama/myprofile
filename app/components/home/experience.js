export default function Experience() {
  return (
    <section className="flex justify-center bg-gray-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="flex justify-center">
          <div className="max-w-screen-md mb-8 text-center lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Experience
            </h2>
          </div>
        </div>
        <ol className="relative border-black border-s dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2016 - July 2017
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Project at Nokia
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              As Fullstack Developer using Code Igniter
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 2017 - Present
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Website Frontend Developer at PT. Trees Solutions
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Create and maintaince HR website using ReactJS called HARPA (Human
              Resources & People Application)
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022 - Present
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Freelance for Create and Maintaince Website
            </h3>
          </li>
        </ol>
      </div>
    </section>
  );
}
