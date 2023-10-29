import React from 'react';

/**
 * `SubmitButton` is a reusable React component that renders a submit button.
 *
 * Props:
 * - `text` (string): The text to be displayed inside the button.
 *
 * Usage:
 * ```jsx
 * <SubmitButton text="Submit" />
 * ```
 *
 * This button is styled using Tailwind CSS and custom classes. You can further customize the button by adding more Tailwind CSS classes or your own custom styles.
 *
 * Customization:
 * If you want to add additional styles, you can wrap the `SubmitButton` in a `div` or another element and apply your styles there. You can also create a custom CSS class and apply it to the button.
 *
 * Example of adding extra styles:
 * ```jsx
 * <div className="my-custom-class">
 *   <SubmitButton text="Submit" />
 * </div>
 * ```
 *
 * In this example, `my-custom-class` is a class you would define in your CSS file.
 */
const SubmitButton = ({ text }) => {
    return (
        <div className="w-1/2">
            <button className="upsa-bg-light-button rounded-md px-12 py-4 mt-10 font-light" type='submit'>
                {text}
            </button>
        </div>
    );
};

export default SubmitButton;
