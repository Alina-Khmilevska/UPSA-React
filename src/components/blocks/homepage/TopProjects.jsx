import React from "react";
import TitleBlock from "../../shared/titles/TitleBlock";

export default function TopProjects() {
  return (
    <>
      <TitleBlock title="Pharmbuddy - find your mentor" />
      <div class="px-10 mb-20 mt-20">
        <div class="grid grid-cols-2 gap-40 mt-20">
          <div class="relative  border-[6.65px] border-[#DDFF96] rounded-tr-[172.95px] rounded-bl-[172.95px] ">
            <img
              class="absolute top-10 right-10 h-full w-full rounded-tr-[172.95px] rounded-bl-[172.95px]"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt="Pharmbuddy"
            />
          </div>
          <div class="mt-20">
            <p class="text-left text-4xl font-light mb-28">
              Mentorship program for pharmaceutical students
            </p>
            <p class="text-left text-4xl font-extralight mb-24">
              Классический «Lorem ipsum dolor sit amet…» проход отнести к
              ремиксов римского философа{" "}
              <a href="https://en.wikipedia.org/wiki/Cicero">Цицерона</a> 45 г.
              до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра
              и зла»).
            </p>
            <div class="flex flex-row items-center ">
              <button
                type="button"
                class="w-[280px] h-[50px] text-black bg-yellow-200 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-light rounded-full text-lg px-7 py-3 text-center me-2 mr-14 dark:focus:ring-yellow-900"
              >
                Find Your Mentor
              </button>
              <button
                type="button"
                class="text-black bg-yellow-200 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-thin rounded-full text-sm p-3 text-center inline-flex items-center me-2  dark:focus:ring-blue-800"
              >
                <svg
                  class="w-8 h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 15 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="px-10 mb-20 mt-40">
        <TitleBlock title="Support Ukraine " />
        <div class="grid grid-cols-2 gap-40 mt-20">
          <div class="mt-20">
            <p class="text-left text-4xl font-extralight mb-24">
              Классический «Lorem ipsum dolor sit amet…» проход отнести к
              ремиксов римского философа
              <a href="https://en.wikipedia.org/wiki/Cicero">Цицерона</a> 45 г.
              до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра
              и зла»). Более конкретно, проход, как полагают, происходит из
              секций 1.10.32 - 33 из его текста, с наиболее заметным часть
              извлечена ниже
            </p>
            <div class="flex flex-row items-center ">
              <button
                type="button"
                class="w-[280px] h-[50px] text-black bg-yellow-200 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-light rounded-full text-lg px-7 py-3 text-center me-2 mr-14 dark:focus:ring-yellow-900"
              >
                Find Your Mentor
              </button>
              <button
                type="button"
                class="text-black bg-yellow-200 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-thin rounded-full text-sm p-3 text-center inline-flex items-center me-2  dark:focus:ring-blue-800"
              >
                <svg
                  class="w-8 h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 15 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <div class="relative  border-[6.65px] border-[#DDFF96] rounded-tl-[172.95px] rounded-br-[172.95px] ">
            <img
              class="absolute top-10 left-10 h-full w-full rounded-tl-[172.95px] rounded-br-[172.95px]"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt="Support Ukraine "
            />
          </div>
        </div>
      </div>
    </>
  );
}
