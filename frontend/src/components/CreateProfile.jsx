import React, { useState } from 'react';
import PlayGround from './PlayGround'; // Import the Playground component

const CreateProfile = () => {
    const [selectedTab, setSelectedTab] = useState('Build');

    return (
        <div className="h-screen w-screen bg-slate-800 flex  flex-col">
            {/* Top Profile navbar */}
            <div className="max-w-4xl md:max-w-7xl w-full mx-auto  h-16 mt-3 md:mt-6 bg-gray-800 top-3 border border-gray-700 rounded-xl flex justify-between items-center p-3 shadow-lg">
                
                {/* Left side (Build, Styles tabs) */}
                <div className="flex space-x-6 md:space-x-10 items-center">
                    {/* Build Button */}
                    <div
                        className={`flex items-center space-x-2 cursor-pointer text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                            selectedTab === 'Build'
                                ? 'bg-white text-gray-800 shadow-md'
                                : 'text-zinc-100 hover:bg-gray-700 hover:text-white'
                        }`}
                        onClick={() => setSelectedTab('Build')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <p>Build</p>
                    </div>

                    {/* Styles Button */}
                    <div
                        className={`flex items-center space-x-2 cursor-pointer text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                            selectedTab === 'Styles'
                                ? 'bg-white text-gray-800 shadow-md'
                                : 'text-zinc-100 hover:bg-gray-700 hover:text-white'
                        }`}
                        onClick={() => setSelectedTab('Styles')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path d="M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 
                                    0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001
                                    4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z"></path>
                            </svg>
                        </span>
                        <p>Styles</p>
                    </div>
                </div>

                {/* Deploy Button */}
                <button className="flex items-center bg-fuchsia-500 hover:bg-fuchsia-600 px-4 md:px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    <p className="text-md text-zinc-900 font-bold">Deploy</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        className="ml-2 h-5 w-5"
                    >
                        <path d="M36.679688 5.0253906 C33.760246 4.9345308 30.852754 6.0261525 28.697266 8.1816406 L18.878906 18 L10.757812 18 C8.1483627 18 6 20.148362 6 22.757812 C6 24.346353 6.7951624 25.833494 8.1171875 26.714844 L9.5625 27.677734 C8.6605283 29.159969 8.491665 30.961654 9.0878906 32.537109 C8.1813306 32.755459 7.3215848 33.209665 6.6171875 33.914062 C5.7543789 34.776871 5.4415246 35.81554 5.1425781 36.910156 C4.8436317 38.004773 4.6523022 39.156255 4.5253906 40.101562 C4.2669637 42.026942 5.9702775 43.73093 7.8964844 43.472656 L7.8984375 43.472656 C8.8434769 43.345781 9.9931628 43.154307 11.087891 42.855469 C12.182618 42.55663 13.223052 42.244679 14.085938 41.380859 C14.78981 40.676987 15.242654 39.817594 15.460938 38.912109 C17.036799 39.509123 18.83949 39.3398 20.322266 38.4375 L21.285156 39.882812 C22.166506 41.204839 23.653647 42 25.242188 42 C27.851638 42 30 39.851638 30 37.242188 L30 29.5 A1.50015 1.50015 0 0 0 29.964844 29.15625 L39.816406 19.304688 C43.101804 16.019293 43.920166 10.983703 41.841797 6.828125 A1.50015 1.50015 0 0 0 41.171875 6.1582031 C40.132981 5.6386109 39.037371 5.3010068 37.929688 5.1367188 C37.514306 5.0751107 37.096751 5.0383706 36.679688 5.0253906 z"></path>
                    </svg>
                </button>
            </div>

            {/* Playground Logic */}
            {selectedTab === 'Build' && <PlayGround/>}
        </div>
    );
};

export default CreateProfile;
