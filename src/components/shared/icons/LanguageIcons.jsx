import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const LanguageToggle = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Ukrainian');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className="flex justify-start space-x-2">
            <button
                className={`px-4 py-2 border-greenFooter rounded-mainRadius flex items-center space-x-1 ${selectedLanguage === 'English' ? 'bg-lemon text-white' : 'bg-transparent text-green-700'}`}
                onClick={() => handleLanguageChange('English')}
            >
                <span>
                    <FontAwesomeIcon icon={faGlobe} />
                </span>
                <span className="text-greenFooter text-lg font-normal leading-normal font-alexandria">English</span>
            </button>
            <button
                className={`px-4 py-2 border-greenFooter rounded-mainRadius flex items-center space-x-1 ${selectedLanguage === 'Ukrainian' ? 'bg-lemon text-white' : 'bg-transparent text-green-700'}`}
                onClick={() => handleLanguageChange('Ukrainian')}
            >
                <span>
                    <FontAwesomeIcon icon={faGlobe} spin />
                </span>
                <span className="text-greenFooter text-lg font-normal leading-normal font-alexandria">Ukrainian</span>
            </button>
        </div>
    );
};

export default LanguageToggle;
