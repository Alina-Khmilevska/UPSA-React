import React, { useState } from 'react';
import getFullImageUrl from "../../..//../utils/formatImageUrl.js";
import RegistrationModal from './RegistrationModal';


const EventElement = (props) => {
  const { imgUrl, title, body, date, id } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <div className="text-left text-[32px] text-black font-inter w-[32%] flex flex-col justify-between">

      <div
        className="flex flex-col transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-4 bg-[#DAFFE2] rounded-t-mainRadius rounded-bl-mainRadius rounded-br-[40px]"
      >
        <img
          className="rounded-mainRadius max-w-[100%] h-[35%] object-cover"
          src={getFullImageUrl(imgUrl)}
          alt={title}
        />
        <div className='p-4 h-auto' >
          <h2 className="text-[31.67px] font-light font-alexandria tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <div
            className="font-normal font-Century Gothic text-gray-700 dark:text-gray-400  mt-5 text-[20px]  "
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <i className="text-[22px] inline-block font-light ">
            {date}
          </i>


          <div onClick={openModal} className="flex w-[410px] mt-[20px] h-[74px] bg-lemon transition duration-300 hover:bg-mint font-['alexandria'] text-[24px] rounded-mainRadius items-center justify-end">
            <button className="flex items-center font-light">
              Register to the webinar
              <div className="mr-[14px] ml-[40px] relative h-[58px] w-[58px] rounded-[36px] overflow-hidden">
                <div className="h-full w-full bg-white rounded-full flex justify-center relative">
                  <div className="h-1 w-24 bg-lemon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} title={title} id={id} />
    </div>
  );
};

export default EventElement;
