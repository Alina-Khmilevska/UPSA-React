import React, { useState } from 'react';

/**
 * `InputField` is a reusable React component that renders a text input with an associated label.
 *
 * Props:
 * - `label` (string): The label text to display above the input field.
 * - `id` (string): A unique identifier for the input field, required for accessibility and linking the label to the input.
 * - `value` (string): The current value of the input field.
 * - `onChange` (function): A callback function that is called when the value of the input field changes. It receives the change event as an argument.
 *
 * Usage:
 * ```jsx
 * <InputField
 *   label="Name"
 *   id="name"
 *   value={name}
 *   onChange={(e) => setName(e.target.value)}
 * />
 * ```
 *
 * Customization:
 * You can apply additional styles or classes to the `InputField` component via the `className` prop. For example:
 * ```jsx
 * <InputField
 *   label="Name"
 *   id="name"
 *   value={name}
 *   onChange={(e) => setName(e.target.value)}
 *   className="my-4"
 * />
 * ```
 *
 * The `InputField` component utilizes Tailwind CSS for styling. You can modify the Tailwind classes applied to the input and label to customize their appearance.
 */
const InputField = ({ label, id, value, onChange, className, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-black text-2xl font-normal">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full h-16 mt-2 p-2 border-2 ${isFocused ? 'border-black' : 'border-gray-400'
          } bg-white rounded-xl text-xl transition-colors focus:outline-none focus:ring-0`}
        style={{ flexShrink: 0 }}
      />
    </div>
  );
};


export default InputField;

