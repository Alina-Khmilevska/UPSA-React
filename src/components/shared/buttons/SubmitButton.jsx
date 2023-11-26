import React from 'react';

const SubmitButton = ({ text }) => {
    return (
        <div className="w-1/2 pt-4">
            <button className=" bg-lemon transition duration-300 font-alexandria text-sm py-3 px-4
        rounded-inputRadius hover:bg-mint  hover:border-lemon font-thin" type='submit'>
            <span className="text-sm">
                {text}
                </span>
            </button>
        </div>
    );
};

export default SubmitButton;
