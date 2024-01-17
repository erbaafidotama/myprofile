"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/utils/supabase/server";
import Toast from "@/components/toast";

export default function Feedback() {
  const [totalPesan, setTotalPesan] = useState(1);
  const [showToastSuccess, setShowToastSuccess] = useState(true);
  const [showLoadingSubmit, setShowLoadingSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (showToastSuccess === true) {
      setTimeout(() => {
        setShowToastSuccess(false);
      }, 3000);
    }
  }, [showToastSuccess]);

  function handleTambahPesan() {
    setTotalPesan(totalPesan + 1);
  }

  async function onSubmitPesan(pesan) {
    setShowLoadingSubmit(true);
    const arrayObject = Object.keys(pesan).map((key) => ({
      pesan: pesan[key],
    }));

    const { data, error } = await supabase
      .from("feedbacks")
      .insert(arrayObject);

    if (data === null && error === null) {
      setShowToastSuccess(true);
      const clearObject = Object.fromEntries(
        Object.keys(arrayObject).map((key) => [`pesan${key}`, null])
      );

      reset(clearObject);
      setTotalPesan(1);
      setShowLoadingSubmit(false);
    }
  }

  function onHandleClose() {
    setShowToastSuccess(false);
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
            Berikan Kritik dan Saran
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
            Halo teman-teman, selamat datang di website pribadi saya.
          </p>
          <p className="mb-3 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Pada halaman ini, saya meminta teman-teman dapat memberikan kritik
            dan saran bagi diri saya untuk membangun ataupun memperbaiki kinerja
            saya sebagai karyawan Trees khususnya frontend HARPA.
          </p>
          <p className="mb-3 text-sm font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Tenang saja, dari website ataupun halaman ini saya tidak mengambil
            data pribadi dan info apapun dari teman-teman. Halaman ini hanya
            menyimpan kritik dan saran teman-teman yang ditulis pada form di
            bawah. Terima kasih karena menyediakan waktu untuk membantu saya
            lebih baik dalam bekerja :)
          </p>
          <p className="mb-8 text-sm font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
            Jika dirasa ada pesan yang kurang, teman-teman bisa submit
            berkali-kali kok.
          </p>

          <div className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Kritik / Saran
              </label>

              {Array.from({ length: totalPesan }).map((_, index) => (
                <textarea
                  {...register(`pesan${index}`)}
                  key={index}
                  id="message"
                  rows="2"
                  className="basis-3/4 mr-5 mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tulis Kritik / Saran..."
                ></textarea>
              ))}

              <div className="flex flex-row">
                <button
                  onClick={handleTambahPesan}
                  className="px-5 py-3 mr-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  + Tambah Pesan
                </button>
                <button
                  type="button"
                  onClick={handleSubmit(onSubmitPesan)}
                  className="px-5 py-3 mr-5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <div className="flex flex-row">
                    Kirim Pesan
                    {showLoadingSubmit && (
                      <div role="status" className="ml-2">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showToastSuccess && (
        <div className="absolute lg:top-2 right-2 top-36">
          <Toast
            message="Pesan Kamu Berhasil Disimpan"
            handleClose={onHandleClose}
          />
        </div>
      )}
    </>
  );
}
