import React from "react";
import TitleBlock from "../../shared/titles/TitleBlock";
import { useGetProjectsQuery } from "../../../redux/api/api.js";
import getFullImageUrl from "../../../utils/formatImageUrl.js";

const TopProjects = () => {

  const { data, isLoading } = useGetProjectsQuery({ type: "top"});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TitleBlock title={data[0].title} />
      <div class="px-10 mb-20 mt-20">
        <div class="grid grid-cols-2 gap-40 mt-20">
          <div class="relative  border-[6.65px] border-[#DDFF96] rounded-tr-[172.95px] rounded-bl-[172.95px] ">
            <img
              class="absolute top-10 right-10 h-full w-full rounded-tr-[172.95px] rounded-bl-[172.95px] min-h-[500px]"
              src={getFullImageUrl(data[0].image)}
              alt={data[0].title}
            />
          </div>
          <div class="mt-20">
            <p class="text-left text-body font-extralight mb-24" dangerouslySetInnerHTML={{ __html: data[0].body }}></p>
            <div class="flex flex-row items-center ">
              <a href={data[0].link}>
                <button
                  type="button"
                  class="w-[280px] h-[50px] text-black bg-yellow-200 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-light rounded-mainRadius text-lg px-7 py-3 text-center me-2 mr-14 dark:focus:ring-yellow-900"
                >
                  {data[0].link_title}
                </button>
              </a>
              <a href={data[0].link}>
                <button
                  type="button"
                  class="text-black bg-yellow-200 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-thin rounded-mainRadius text-sm p-3 text-center inline-flex items-center me-2  dark:focus:ring-blue-800"
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
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="px-10 mb-20 mt-40">
        <TitleBlock title={data[1].title} />
        <div class="grid grid-cols-2 gap-40 mt-20">
          <div class="mt-20">
            <p class="text-left text-body font-extralight mb-24" dangerouslySetInnerHTML={{ __html: data[1].body }}></p>
            <div class="flex flex-row items-center ">
              <a href={data[1].link}>
                <button
                  type="button"
                  class="w-[280px] h-[50px] text-black bg-yellow-200 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-light rounded-mainRadius text-lg px-7 py-3 text-center me-2 mr-14 dark:focus:ring-yellow-900"
                >
                  {data[1].link_title}
                </button>
                <button
                  type="button"
                  class="text-black bg-yellow-200 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-thin rounded-mainRadius text-sm p-3 text-center inline-flex items-center me-2  dark:focus:ring-blue-800"
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
              </a>
            </div>
          </div>
          <div class="relative  border-[6.65px] border-[#DDFF96] rounded-tl-[172.95px] rounded-br-[172.95px] ">
            <img
              class="absolute top-10 left-10 h-full w-full rounded-tl-[172.95px] rounded-br-[172.95px] min-h-[500px]"
              src={getFullImageUrl(data[1].image)}
              alt="Support Ukraine "
            />
          </div>
        </div>
      </div>
    </>
  );
}


export default TopProjects;