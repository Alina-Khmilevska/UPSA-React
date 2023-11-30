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
    <div className="text-left text-[32px] text-black font-inter w-[30%] background-grey flex flex-col justify-between">
      <div className="ounded-3xs bg-darkgray" />
      <div className=" ounded-3xs bg-darkslategray" />
      <img
        className="max-w-full overflow-hidden object-cover"
        alt=""
        src={getFullImageUrl(imgUrl)}
      />
      <div className="p-4">
        <div className="ont-medium inline-block text-[26px]">
          {title}
        </div>
        <div className="text-[18px] font-light inline-block " dangerouslySetInnerHTML={{ __html: body }}></div>
        <div className="flex flex-row justify-between">
          <i className=" text-[22px] inline-block font-light ">
            {date}
          </i>
          <div
            className="cursor-pointer text-[18px] text-white bg-black w-[200px] h-[40px] flex justify-center items-center"
            onClick={openModal}
          >
            Register to the webinar
          </div>
        </div>
      </div>
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} title={title} id={id} />
    </div>
  );
};

export default EventElement;
