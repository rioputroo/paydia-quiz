import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return <Confetti width={512} height={330} />;
};

export default ConfettiEffect;