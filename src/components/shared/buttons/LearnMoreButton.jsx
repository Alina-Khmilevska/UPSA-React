import React from 'react';
import { Link } from 'react-router-dom';

/**
 * # LearnMoreButton Component
 *
 * The `LearnMoreButton` component is designed to navigate users to different pages within the application.
 * It uses React Router's `Link` component for client-side navigation.
 *
 * ## Props
 *
 * The component accepts two props:
 * - `text` (string): The text displayed inside the button.
 * - `link` (string): The path to which the button will navigate when clicked.
 *
 * ## Usage
 *
 * To use the `LearnMoreButton` component, you need to import it into your component file, and then you can use it as a JSX element.
 *
 * ### Example:
 *
 * ```jsx
 * import LearnMoreButton from './path-to-your-component/LearnMoreButton';
 *
 * function App() {
 *   return (
 *     <div>
 *       <LearnMoreButton text="Learn More About Us" link="/about-us" />
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 *
 * In the example above, the `LearnMoreButton` component is used to create a button that says "Learn More About Us" and navigates to "/about-us" when clicked.
 *
 * ## Styling
 *
 * The button comes with a predefined style, following the project's design guidelines:
 * - Font Family: Inter
 * - Font Size: 30px
 * - Font Weight: 400 (Normal)
 * - Line Height: 36px
 * - Letter Spacing: 0em
 * - Text Align: Left
 * - Background Color: White
 * - Border: 1px solid Gray
 * - Border Radius: Medium rounded
 * - Padding: Y-2, X-4
 *
 * These styles are applied using Tailwind CSS classes directly on the `Link` component.
 *
 * ## Customization
 *
 * If you need to apply additional styles or override the existing ones, you can do so by adding your custom styles in your CSS file and applying additional classes or inline styles as needed.
 *
 * By following these guidelines, you can use and customize the `LearnMoreButton` component according to your needs while maintaining a consistent look and feel across your application.
 */

const LearnMoreButton = ({ text, link }) => {
  return (
    <Link to={link} className="font-inter text-black py-1 px-1 border-b border-black text-3xl font-normal leading-9">
      {text}
    </Link>
  );
};

export default LearnMoreButton;
