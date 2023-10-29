import React from 'react';
import { Link } from 'react-router-dom';

/**
 * # ExternalButton Component
 *
 * The `ExternalButton` component is designed to create a button that links to an external URL.
 * It is styled consistently according to the project's design specifications and opens links in a new browser tab for a better user experience.
 *
 * ## Props
 *
 * The component accepts two props:
 * - `text` (string): The text displayed inside the button.
 * - `link` (string): The URL to which the button will navigate when clicked.
 *
 * ## Usage
 *
 * To use the `ExternalButton` component, you need to import it into your component file, and then you can use it as a JSX element.
 *
 * ### Example:
 *
 * ```jsx
 * import ExternalButton from './path-to-your-component/ExternalButton';
 *
 * function App() {
 *   return (
 *     <div>
 *       <ExternalButton text="Visit OpenAI" link="https://www.openai.com" />
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 *
 * In the example above, the `ExternalButton` component is used to create a button that says "Visit OpenAI" and links to "https://www.openai.com".
 *
 * ## Customization
 *
 * The button comes with a predefined style, following the project's design guidelines. However, you can still apply additional styles or override the existing ones by targeting the component's classes in your CSS.
 *
 * ### CSS Classes:
 * - The outer `div` has the classes: `bg-gray-300 p-4 rounded-md`
 * - The `a` (link) element inside has the classes: `font-inter text-gray-700 bg-white py-2 px-4 border border-gray-300 rounded-md text-xl font-normal leading-9`
 *
 * By following these guidelines, you can use and customize the `ExternalButton` component according to your needs while maintaining consistency and usability across your application.
 */

const ExternalButton = ({ text, link }) => {
    return (
        <div className="w-1/2">
            <button className="upsa-bg-light-button rounded-md px-12 py-4 mt-10">
                <Link to={link} className="font-light">
                    {text}
                </Link>
            </button>
        </div>

    );
};

export default ExternalButton;
