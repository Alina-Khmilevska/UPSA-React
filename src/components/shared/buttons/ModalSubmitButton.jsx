import React from 'react';

const ModalSubmitButton = ({ text }) => {
    return (
        <div className="pt-8 text-center">
            <button className=" bg-lemon transition duration-300 font-alexandria pb-2 px-8
        rounded-inputRadius hover:bg-mint  hover:border-lemon font-thin" type='submit'>
            <span className="text-[16px]">
                {text}
                </span>
            </button>
        </div>
    );
};

export default ModalSubmitButton;
