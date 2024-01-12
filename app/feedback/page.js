"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/utils/supabase/server";
import Toast from "@/components/toast";

export default function Feedback() {
  const [totalPesan, setTotalPesan] = useState(1);
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function handleTambahPesan() {
    setTotalPesan(totalPesan + 1);
  }

  async function onSubmitPesan(pesan) {
    console.log("dataaa", pesan);
    const arrayObject = Object.keys(pesan).map((key) => ({
      pesan: pesan[key],
    }));
    console.log(arrayObject);
    const { data, error } = await supabase
      .from("feedbacks")
      .insert(arrayObject);

    console.log("returnData", data);
    console.log("error", error);
    if (data === null && error === null) {
      setShowToastSuccess(true);
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
          <p className="mb-8 text-sm font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
            Tenang saja, dari website ataupun halaman ini saya tidak mengambil
            data pribadi dan info apapun dari teman-teman. Halaman ini hanya
            menyimpan respon teman-teman yang ditulis pada form di bawah. Terima
            kasih karena menyediakan waktu untuk membantu saya lebih baik dalam
            bekerja :)
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
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showToastSuccess && (
        <Toast
          message="Pesan Kamu Berhasil Disimpan"
          handleClose={onHandleClose}
        />
      )}
    </>
  );
}
