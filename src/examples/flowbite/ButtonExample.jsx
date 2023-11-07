// ButtonExample.jsx
import React from 'react';
import { Button } from 'flowbite-react';

/**
 * This is an example component that demonstrates how to use Flowbite-React components.
 * In this example, we're using the Button component from Flowbite-React.
 * 
 * You can import any other components from flowbite-react and use them in a similar way.
 * Make sure that flowbite-react and Tailwind CSS are properly installed and configured
 * as per the documentation.
 * 
 * Refer to the Flowbite-React documentation for more components and further details:
 * https://flowbite-react.com/
 */

function ButtonExample() {
  return (
    <div className="flex justify-center p-4">
      {/* The Button component is used here with its default styling */}
      <Button>
        Click me
      </Button>
    </div>
  );
}

export default ButtonExample;
