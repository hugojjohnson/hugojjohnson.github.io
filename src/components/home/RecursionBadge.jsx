import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import boopSfx from '/pickup.mp3';


const RecursionBadge = () => {
    const [visible, setVisible] = useState(false);
    const [play] = useSound(boopSfx);

    play()

    useEffect(() => {
        // Fade in
        setVisible(true);

        const timeoutId = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`absolute right-20 top-20 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center border-2 border-gray-100 p-3 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className='text-lg'>Recursion!</p>
            <p className='text-sm'>Visit the website from the website</p>
            <p className='italic'>Nice. 😎</p>
        </div>
    );
};

export default RecursionBadge;
