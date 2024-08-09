'use client'; // This makes the component a Client Component

import { useState } from 'react';

export default function NewPage() {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative">
      <button onClick={handleButtonClick} className="btn">
        Show Options
      </button>
      {showOptions && (
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg transition-transform transform translate-y-full">
          <ul>
            <li className="py-2">Option 1</li>
            <li className="py-2">Option 2</li>
            <li className="py-2">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
