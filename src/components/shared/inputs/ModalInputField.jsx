import React from 'react';

const ModalInputField = ({ label, id, value, onChange, className, name, required, type, placeholder }) => {


  return (
    <div className='m-auto' >
      {label && (
        <label htmlFor={id} className="block text-black text-[16px] font-normal pl-4 pb-1 pt-3">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type || 'text'}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="block p-2 pl-4 w-[425px] h-[50px] text-gray-900 bg-white border-inputBorder  rounded-inputRadius focus:border-inputBorder focus:box-shadow-transparent focus:ring-0 shadow-formInput"
        style={{ flexShrink: 0 }}
      />
    </div>
  );
};

export default ModalInputField;
