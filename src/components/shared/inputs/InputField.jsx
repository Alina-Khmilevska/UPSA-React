import React from 'react';

const InputField = ({ label, id, value, onChange, className, name, required, errorMessage, type, placeholder }) => {


  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-black text-2xl font-normal pl-4 pb-1">
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
        className="block p-2 pl-4 w-[675px] h-[50px] text-gray-900 bg-white border-inputBorder  rounded-inputRadius focus:border-inputBorder focus:box-shadow-transparent focus:ring-0 shadow-formInput"
        style={{ flexShrink: 0 }}
      />
    </div>
  );
};

export default InputField;
