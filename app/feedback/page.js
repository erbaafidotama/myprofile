"use client";
import { useEffect } from "react";

export default function Feedback() {
  console.log(" process.env.HASHNODE_DEV_KEY;", process.env.HASHNODE_DEV_KEY);
  const Secret_KEY = process.env.HASHNODE_DEV_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.hashnode.com/v1/me/articles",
          {
            headers: {
              Authorization: "4daa65de-05fb-469d-819c-95c228ab0abf",
            },
          }
        );
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Berikan Kritik dan Saran
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Halo teman-teman, selamat datang di website pribadi saya.
        </p>
        <p class="mb-3 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Pada halaman ini, saya meminta teman-teman dapat memberikan kritik dan
          saran bagi diri saya untuk membangun ataupun memperbaiki kinerja saya
          sebagai karyawan Trees khususnya frontend HARPA.
        </p>
        <p class="mb-8 lg:mb-16 text-sm font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Tenang saja, dari website ataupun halaman ini saya tidak mengambil
          data pribadi dan info apapun dari teman-teman. Halaman ini hanya
          menyimpan respon teman-teman yang ditulis pada form di bawah. Terima
          kasih karena menyediakan waktu untuk membantu saya lebih baik dalam
          bekerja :)
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              htmlFor="email"
              class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
            >
              Kritik
            </label>
            <textarea
              id="message"
              rows="2"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Tulis Kritik..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="mr-5 bg-blue-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
          <button
            type="submit"
            class="bg-blue-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Tambah Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
