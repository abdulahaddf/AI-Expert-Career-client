import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdStars } from 'react-icons/md';

const ProgressBar = ({ item }) => {
    const [progressPercentage, setProgressPercentage] = useState(10);
    const { progress, rating } = item;
    useEffect(() => {
        setProgressPercentage(progress);
    }, [progress]);
    return (
        <div>
            <div>
                <div className="flex justify-between">
                    <h1>Performances</h1>
                    <h1>{rating}/10</h1>
                </div>
                <div className="relative mb-5 h-2 rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-white"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900">
                        <div
                            className="h-4 rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        >
                            <MdStars className="text-red-600" />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;