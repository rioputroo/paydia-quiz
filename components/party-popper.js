import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PartyPopper = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Tampilkan party popper selama 5 detik, kemudian sembunyikan
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative"
            >
                {/* SVG atau CSS untuk efek partikel */}
                <svg className="w-32 h-32" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M12 2C13.1 2 14 2.9 14 4V6H10V4C10 2.9 10.9 2 12 2M4 6V10H2V6C2 4.9 2.9 4 4 4H6V6H4M18 6V4H20C21.1 4 22 4.9 22 6V10H20V6H18M6 18H4C2.9 18 2 17.1 2 16V12H4V16H6V18M18 18H20V16H22V12H20V16C20 17.1 19.1 18 18 18M12 22C10.9 22 10 21.1 10 20V18H14V20C14 21.1 13.1 22 12 22Z"
                    />
                </svg>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                >
                    <h1 className="text-4xl font-bold text-blue-500">Congratulations!</h1>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PartyPopper;