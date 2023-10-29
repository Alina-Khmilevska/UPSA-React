import React from 'react';

/**
 * `Card` is a reusable React component that displays content in a card layout.
 *
 * Props:
 * - `title` (string): The title of the card.
 * - `content` (string): The main content or body of the card.
 * - `imageSrc` (string): The URL of the image to display at the top of the card.
 * 
 * Usage:
 * ```jsx
 * <Card
 *   imageSrc="URL_TO_YOUR_IMAGE"
 *   title="Pharmbuddy - менторська программа"
 *   content="Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs."
 * />
 * ```
 */
const Card = ({ imageSrc, title, content }) => {
  return (
    <div className="p-6 border bg-gray-100 rounded-lg shadow-md w-96">
      {imageSrc && <img src={imageSrc} alt={title} className="w-full rounded-t-lg mb-4" />}
      {title && <h3 className="text-2xl font-semibold mb-4">{title}</h3>}
      {content && <p className="text-md">{content}</p>}
    </div>
  );
};

export default Card;
